import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export const AuthTest = () => {
  const { user, isAuthenticated, isLoading, signIn, signOut, signInAnonymously } = useAuth();

  const handleTestLogin = async () => {
    try {
      await signIn('test@mindcare.com', 'password123');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleTestSignUp = async () => {
    try {
      await signIn('newuser@mindcare.com', 'password123', 'New User');
    } catch (error) {
      console.error('Sign up failed:', error);
    }
  };

  const handleAnonymousLogin = async () => {
    try {
      await signInAnonymously();
    } catch (error) {
      console.error('Anonymous login failed:', error);
    }
  };

  if (isLoading) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-6">
          <div className="text-center">Loading...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Authentication Test</CardTitle>
        <CardDescription>
          Testing mock authentication system
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {isAuthenticated ? (
          <div className="space-y-4">
            <Alert>
              <AlertDescription>
                ✅ Successfully authenticated using mock authentication!
              </AlertDescription>
            </Alert>
            
            <div className="space-y-2">
              <h3 className="font-semibold">User Information:</h3>
              <div className="text-sm space-y-1">
                <p><strong>Email:</strong> {user?.email || 'N/A'}</p>
                <p><strong>Name:</strong> {user?.displayName || 'N/A'}</p>
                <p><strong>Role:</strong> <Badge variant="secondary">{user?.role}</Badge></p>
                <p><strong>User ID:</strong> {user?.userId}</p>
              </div>
            </div>

            <Button onClick={signOut} className="w-full" variant="outline">
              Sign Out
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <Alert>
              <AlertDescription>
                🔧 Using mock authentication for development
              </AlertDescription>
            </Alert>

            <div className="space-y-2">
              <Button onClick={handleTestLogin} className="w-full">
                Test Login (test@mindcare.com)
              </Button>
              
              <Button onClick={handleTestSignUp} className="w-full" variant="outline">
                Test Sign Up (newuser@mindcare.com)
              </Button>
              
              <Button onClick={handleAnonymousLogin} className="w-full" variant="secondary">
                Anonymous Login
              </Button>
            </div>

            <div className="text-xs text-muted-foreground">
              <p><strong>Test Credentials:</strong></p>
              <p>• Email: test@mindcare.com</p>
              <p>• Password: password123</p>
              <p>• Admin: admin@mindcare.com</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
