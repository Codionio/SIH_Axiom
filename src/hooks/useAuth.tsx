import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth } from '../services/firebase';
import { AuthService } from '../services/auth.service.fallback';
import { User, AuthState } from '../types/user.types';
import { mockAuth } from '../services/mockAuth';

interface AuthContextType extends AuthState {
  signUp: (email: string, password: string, displayName?: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signInAnonymously: () => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    // Check if Firebase is properly configured
    const isFirebaseConfigured = () => {
      const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
      return apiKey && apiKey !== 'demo_api_key' && apiKey.length > 10;
    };

    if (isFirebaseConfigured() && auth) {
      // Use Firebase authentication
      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
        setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

        try {
          if (firebaseUser) {
            // Get user data from Firestore
            const userData = await AuthService.getUserData(firebaseUser.uid);
            setAuthState({
              user: userData,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
          } else {
            setAuthState({
              user: null,
              isAuthenticated: false,
              isLoading: false,
              error: null,
            });
          }
        } catch (error) {
          console.error('Error loading user data:', error);
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: error instanceof Error ? error.message : 'Authentication error',
          });
        }
      });

      return () => unsubscribe();
    } else {
      // Use mock authentication
      console.warn('Firebase not configured, using mock authentication for development');
      
      const unsubscribe = mockAuth.onAuthStateChanged(async (mockUser) => {
        setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

        try {
          if (mockUser) {
            // Convert mock user to User type
            const userData: User = {
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
            
            setAuthState({
              user: userData,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
          } else {
            setAuthState({
              user: null,
              isAuthenticated: false,
              isLoading: false,
              error: null,
            });
          }
        } catch (error) {
          console.error('Error loading user data:', error);
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: error instanceof Error ? error.message : 'Authentication error',
          });
        }
      });

      return () => unsubscribe();
    }
  }, []);

  const signUp = async (email: string, password: string, displayName?: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      await AuthService.signUpWithEmail(email, password, displayName);
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Sign up failed',
      }));
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      await AuthService.signInWithEmail(email, password);
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Sign in failed',
      }));
      throw error;
    }
  };

  const signInAnonymously = async () => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      await AuthService.signInAnonymously();
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Anonymous sign in failed',
      }));
      throw error;
    }
  };

  const signOut = async () => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      await AuthService.signOut();
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Sign out failed',
      }));
      throw error;
    }
  };

  const updateProfile = async (updates: Partial<User>) => {
    try {
      if (!authState.user) throw new Error('No user logged in');
      
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      await AuthService.updateUserProfile(authState.user.userId, updates);
      
      // Update local state
      setAuthState(prev => ({
        ...prev,
        user: prev.user ? { ...prev.user, ...updates } : null,
        isLoading: false,
      }));
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Profile update failed',
      }));
      throw error;
    }
  };

  const value: AuthContextType = {
    ...authState,
    signUp,
    signIn,
    signInAnonymously,
    signOut,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};