import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  MessageCircle, 
  Calendar, 
  BookOpen, 
  UserCheck, 
  AlertTriangle,
  TrendingUp,
  Clock,
  Users
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';

const quickActions = [
  {
    title: 'Take Assessment',
    description: 'Check your mental health status',
    icon: UserCheck,
    href: '/assessment',
    color: 'bg-blue-500',
  },
  {
    title: 'Start Chat',
    description: 'Talk to our AI support or counselors',
    icon: MessageCircle,
    href: '/chat',
    color: 'bg-green-500',
  },
  {
    title: 'Book Appointment',
    description: 'Schedule time with a counselor',
    icon: Calendar,
    href: '/appointments',
    color: 'bg-purple-500',
  },
  {
    title: 'Browse Resources',
    description: 'Access helpful materials and guides',
    icon: BookOpen,
    href: '/resources',
    color: 'bg-orange-500',
  },
];

const Dashboard = () => {
  const { user } = useAuth();
  const [wellnessScore, setWellnessScore] = useState(75);

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'moderate': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'crisis': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {getGreeting()}, {user?.displayName || user?.anonymousId || 'there'}! 👋
          </h1>
          <p className="text-gray-600 mt-2">
            How are you feeling today? Let's check in on your mental wellness.
          </p>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Status</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Badge className={getRiskLevelColor(user?.riskLevel || 'low')}>
                  {user?.riskLevel || 'Low'} Risk
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Based on your recent assessments
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Wellness Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{wellnessScore}%</div>
              <Progress value={wellnessScore} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                +5% from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last Assessment</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {user?.assessmentHistory?.length || 0}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {user?.assessmentHistory?.length 
                  ? 'Assessments completed' 
                  : 'No assessments yet'
                }
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link key={action.title} to={action.href}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-lg ${action.color}`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{action.title}</h3>
                          <p className="text-sm text-gray-600">{action.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Activity & Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest interactions and progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {user?.assessmentHistory?.length ? (
                  user.assessmentHistory.slice(0, 3).map((assessment, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          {assessment.type} Assessment
                        </p>
                        <p className="text-xs text-gray-500">
                          Score: {assessment.score} - {assessment.riskLevel} risk
                        </p>
                      </div>
                      <span className="text-xs text-gray-400">
                        {new Date(assessment.completedAt).toLocaleDateString()}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-6">
                    <Users className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">No recent activity</p>
                    <p className="text-xs text-gray-400">
                      Take your first assessment to get started
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Personalized Recommendations</CardTitle>
              <CardDescription>Based on your current wellness profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900">Daily Check-in</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    Take a few minutes to reflect on your mood and energy levels
                  </p>
                  <Button size="sm" className="mt-2" asChild>
                    <Link to="/assessment">Start Check-in</Link>
                  </Button>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900">Mindfulness Practice</h4>
                  <p className="text-sm text-green-700 mt-1">
                    Try a 5-minute guided meditation to reduce stress
                  </p>
                  <Button size="sm" variant="outline" className="mt-2" asChild>
                    <Link to="/resources">Browse Resources</Link>
                  </Button>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-900">Connect with Support</h4>
                  <p className="text-sm text-purple-700 mt-1">
                    Chat with our AI assistant or schedule a counselor session
                  </p>
                  <Button size="sm" variant="outline" className="mt-2" asChild>
                    <Link to="/chat">Start Chat</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Crisis Support Banner */}
        {user?.riskLevel === 'crisis' && (
          <Card className="mt-6 border-red-200 bg-red-50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <div className="flex-1">
                  <h3 className="font-medium text-red-900">
                    Immediate Support Available
                  </h3>
                  <p className="text-sm text-red-700 mt-1">
                    If you're in crisis, please reach out for immediate help. 
                    You're not alone, and support is available 24/7.
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    Crisis Chat
                  </Button>
                  <Button size="sm" variant="outline">
                    Call 988
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;