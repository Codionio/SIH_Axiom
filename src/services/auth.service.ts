import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
  signOut,
  updateProfile,
  User as FirebaseUser,
  UserCredential,
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import { User } from '../types/user.types';

export class AuthService {
  // Email/Password Authentication
  static async signUpWithEmail(email: string, password: string, displayName?: string): Promise<User> {
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      if (displayName) {
        await updateProfile(firebaseUser, { displayName });
      }

      // Create user document in Firestore
      const userData: User = {
        userId: firebaseUser.uid,
        email: firebaseUser.email || undefined,
        displayName: displayName || firebaseUser.displayName || undefined,
        role: 'student',
        riskLevel: 'low',
        preferredLanguage: 'en',
        assessmentHistory: [],
        lastActive: new Date(),
        createdAt: new Date(),
        isActive: true,
        interventionFlags: [],
        privacySettings: {
          allowAnalytics: true,
          shareWithCounselors: false,
          anonymousMode: false,
        },
      };

      await setDoc(doc(db, 'users', firebaseUser.uid), userData);
      return userData;
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  }

  static async signInWithEmail(email: string, password: string): Promise<User> {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      // Get user data from Firestore
      const userData = await this.getUserData(firebaseUser.uid);
      
      // Update last active
      await updateDoc(doc(db, 'users', firebaseUser.uid), {
        lastActive: new Date(),
      });

      return userData;
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  }

  // Anonymous Authentication
  static async signInAnonymously(): Promise<User> {
    try {
      const userCredential: UserCredential = await signInAnonymously(auth);
      const firebaseUser = userCredential.user;

      // Create anonymous user document
      const userData: User = {
        userId: firebaseUser.uid,
        anonymousId: `anon_${Date.now()}`,
        role: 'student',
        riskLevel: 'low',
        preferredLanguage: 'en',
        assessmentHistory: [],
        lastActive: new Date(),
        createdAt: new Date(),
        isActive: true,
        interventionFlags: [],
        privacySettings: {
          allowAnalytics: false,
          shareWithCounselors: false,
          anonymousMode: true,
        },
      };

      await setDoc(doc(db, 'users', firebaseUser.uid), userData);
      return userData;
    } catch (error) {
      console.error('Error signing in anonymously:', error);
      throw error;
    }
  }

  // Sign Out
  static async signOut(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  }

  // Get User Data
  static async getUserData(userId: string): Promise<User> {
    try {
      const userDoc = await getDoc(doc(db, 'users', userId));
      if (userDoc.exists()) {
        const data = userDoc.data();
        return {
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(),
          lastActive: data.lastActive?.toDate() || new Date(),
          assessmentHistory: data.assessmentHistory?.map((assessment: { completedAt?: { toDate: () => Date } }) => ({
            ...assessment,
            completedAt: assessment.completedAt?.toDate() || new Date(),
          })) || [],
        } as User;
      } else {
        throw new Error('User document not found');
      }
    } catch (error) {
      console.error('Error getting user data:', error);
      throw error;
    }
  }

  // Update User Profile
  static async updateUserProfile(userId: string, updates: Partial<User>): Promise<void> {
    try {
      await updateDoc(doc(db, 'users', userId), {
        ...updates,
        updatedAt: new Date(),
      });
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  }

  // Get Current Firebase User
  static getCurrentUser(): FirebaseUser | null {
    return auth.currentUser;
  }
}