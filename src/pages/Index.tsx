import { AuthTest } from '@/components/auth/AuthTest';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="space-y-8 max-w-4xl w-full">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            MindCare Campus
          </h1>
          <p className="text-xl text-muted-foreground">
            Mental Health Support Platform for Students
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Features Card */}
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>
                Comprehensive mental health support tools
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">🔍 Mental Health Assessments</h4>
                <p className="text-sm text-muted-foreground">
                  PHQ-9 and GAD-7 screening tools
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">💬 Counselor Chat</h4>
                <p className="text-sm text-muted-foreground">
                  Real-time messaging with mental health professionals
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">📅 Appointment Booking</h4>
                <p className="text-sm text-muted-foreground">
                  Schedule sessions with counselors
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">📚 Educational Resources</h4>
                <p className="text-sm text-muted-foreground">
                  Access to mental health information and tools
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Authentication Test */}
          <AuthTest />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/register">Register</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/dashboard">Dashboard</Link>
          </Button>
        </div>

        {/* Development Notice */}
        <div className="text-center text-sm text-muted-foreground">
          <p>🔧 Development Mode: Using mock authentication</p>
          <p>Configure Firebase for production authentication</p>
        </div>
      </div>
    </div>
  );
}
