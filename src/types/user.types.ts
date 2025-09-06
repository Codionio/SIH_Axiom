export interface User {
  userId: string;
  anonymousId?: string;
  email?: string;
  displayName?: string;
  role: 'student' | 'counselor' | 'admin';
  riskLevel: 'low' | 'moderate' | 'high' | 'crisis';
  preferredLanguage: 'en' | 'hi';
  assessmentHistory: AssessmentResult[];
  lastActive: Date;
  createdAt: Date;
  isActive: boolean;
  interventionFlags: string[];
  privacySettings: {
    allowAnalytics: boolean;
    shareWithCounselors: boolean;
    anonymousMode: boolean;
  };
}

export interface AssessmentResult {
  assessmentId: string;
  type: 'PHQ9' | 'GAD7' | 'custom';
  score: number;
  riskLevel: 'low' | 'moderate' | 'high' | 'crisis';
  completedAt: Date;
}

export interface UserProfile {
  displayName?: string;
  email?: string;
  phone?: string;
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
  preferences: {
    language: 'en' | 'hi';
    notifications: boolean;
    anonymousMode: boolean;
  };
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}