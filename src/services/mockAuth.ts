// Mock Authentication Service for Development
// This provides a temporary authentication solution until Firebase is properly configured

export interface MockUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  role: string;
}

class MockAuthService {
  private currentUser: MockUser | null = null;
  private listeners: Array<(user: MockUser | null) => void> = [];

  // Simulate user state
  private isAuthenticated = false;
  private isLoading = false;

  // Mock user data
  private mockUsers: MockUser[] = [
    {
      uid: 'mock-user-1',
      email: 'test@mindcare.com',
      displayName: 'Test User',
      role: 'student'
    },
    {
      uid: 'mock-admin-1',
      email: 'admin@mindcare.com',
      displayName: 'Admin User',
      role: 'admin'
    }
  ];

  // Listen to auth state changes
  onAuthStateChanged(callback: (user: MockUser | null) => void) {
    this.listeners.push(callback);
    
    // Return unsubscribe function
    return () => {
      const index = this.listeners.indexOf(callback);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  // Notify all listeners of auth state change
  private notifyListeners() {
    this.listeners.forEach(callback => callback(this.currentUser));
  }

  // Sign up with email and password
  async createUserWithEmailAndPassword(email: string, password: string, displayName?: string) {
    this.isLoading = true;
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user already exists
    const existingUser = this.mockUsers.find(user => user.email === email);
    if (existingUser) {
      this.isLoading = false;
      throw new Error('User already exists with this email');
    }

    // Create new user
    const newUser: MockUser = {
      uid: `mock-user-${Date.now()}`,
      email,
      displayName: displayName || null,
      role: 'student'
    };

    this.mockUsers.push(newUser);
    this.currentUser = newUser;
    this.isAuthenticated = true;
    this.isLoading = false;
    
    this.notifyListeners();
    return { user: newUser };
  }

  // Sign in with email and password
  async signInWithEmailAndPassword(email: string, password: string) {
    this.isLoading = true;
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Find user
    const user = this.mockUsers.find(u => u.email === email);
    if (!user) {
      this.isLoading = false;
      throw new Error('User not found');
    }

    // Simulate password check (in real app, this would be handled by Firebase)
    if (password.length < 6) {
      this.isLoading = false;
      throw new Error('Password should be at least 6 characters');
    }

    this.currentUser = user;
    this.isAuthenticated = true;
    this.isLoading = false;
    
    this.notifyListeners();
    return { user };
  }

  // Sign in anonymously
  async signInAnonymously() {
    this.isLoading = true;
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const anonymousUser: MockUser = {
      uid: `anonymous-${Date.now()}`,
      email: null,
      displayName: 'Anonymous User',
      role: 'student'
    };

    this.currentUser = anonymousUser;
    this.isAuthenticated = true;
    this.isLoading = false;
    
    this.notifyListeners();
    return { user: anonymousUser };
  }

  // Sign out
  async signOut() {
    this.isLoading = true;
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    this.currentUser = null;
    this.isAuthenticated = false;
    this.isLoading = false;
    
    this.notifyListeners();
  }

  // Get current user
  getCurrentUser() {
    return this.currentUser;
  }

  // Check if user is authenticated
  isUserAuthenticated() {
    return this.isAuthenticated;
  }

  // Check if loading
  isAuthLoading() {
    return this.isLoading;
  }
}

// Create singleton instance
export const mockAuth = new MockAuthService();
