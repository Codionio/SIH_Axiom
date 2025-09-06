// Fallback Authentication Service
// Uses mock authentication when Firebase is not properly configured

import { mockAuth, MockUser } from './mockAuth';
import { User } from '../types/user.types';
import { auth } from './firebase';

// Check if Firebase is properly configured
const isFirebaseConfigured = () => {
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
  return apiKey && apiKey !== 'demo_api_key' && apiKey.length > 10;
};

export class AuthService {
  // Email/Password Authentication
  static async signUpWithEmail(email: string, password: string, displayName?: string): Promise<User> {
    if (!isFirebaseConfigured()) {
      console.warn('Firebase not configured, using mock authentication');
      const result = await mockAuth.createUserWithEmailAndPassword(email, password, displayName);
      return this.convertMockUserToUser(result.user);
    }

    // Use real Firebase authentication
    try {
      const { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } = await import('firebase/auth');
      const { doc, setDoc } = await import('firebase/firestore');
      const { auth, db } = await import('./firebase');
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
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
    if (!isFirebaseConfigured()) {
      console.warn('Firebase not configured, using mock authentication');
      const result = await mockAuth.signInWithEmailAndPassword(email, password);
      return this.convertMockUserToUser(result.user);
    }

    // Use real Firebase authentication
    try {
      const { signInWithEmailAndPassword } = await import('firebase/auth');
      const { doc, updateDoc } = await import('firebase/firestore');
      const { auth, db } = await import('./firebase');
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
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
    if (!isFirebaseConfigured()) {
      console.warn('Firebase not configured, using mock authentication');
      const result = await mockAuth.signInAnonymously();
      return this.convertMockUserToUser(result.user);
    }

    // Use real Firebase authentication
    try {
      const { signInAnonymously } = await import('firebase/auth');
      const { doc, setDoc } = await import('firebase/firestore');
      const { auth, db } = await import('./firebase');
      
      const userCredential = await signInAnonymously(auth);
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
    if (!isFirebaseConfigured()) {
      console.warn('Firebase not configured, using mock authentication');
      await mockAuth.signOut();
      return;
    }

    // Use real Firebase authentication
    try {
      const { signOut } = await import('firebase/auth');
      const { auth } = await import('./firebase');
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  }

  // Get User Data
  static async getUserData(userId: string): Promise<User> {
    if (!isFirebaseConfigured()) {
      console.warn('Firebase not configured, using mock authentication');
      const mockUser = mockAuth.getCurrentUser();
      if (mockUser && mockUser.uid === userId) {
        return this.convertMockUserToUser(mockUser);
      }
      throw new Error('User not found');
    }

    // Use real Firebase authentication
    try {
      const { doc, getDoc } = await import('firebase/firestore');
      const { db } = await import('./firebase');
      
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
    if (!isFirebaseConfigured()) {
      console.warn('Firebase not configured, using mock authentication');
      // Mock implementation - just log the update
      console.log('Mock profile update:', { userId, updates });
      return;
    }

    // Use real Firebase authentication
    try {
      const { doc, updateDoc } = await import('firebase/firestore');
      const { db } = await import('./firebase');
      
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
  static getCurrentUser() {
    if (!isFirebaseConfigured() || !auth) {
      return mockAuth.getCurrentUser();
    }

    // Use real Firebase authentication
    try {
      return auth.currentUser;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  }

  // Convert MockUser to User type
  private static convertMockUserToUser(mockUser: MockUser): User {
    return {
      userId: mockUser.uid,
      email: mockUser.email || undefined,
      displayName: mockUser.displayName || undefined,
      role: mockUser.role as 'student' | 'counselor' | 'admin',
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
        anonymousMode: mockUser.role === 'anonymous',
      },
    };
  }
}
