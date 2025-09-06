import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  Users, 
  AlertTriangle, 
  BarChart3, 
  MessageCircle, 
  Calendar,
  TrendingUp,
  TrendingDown,
  Clock
} from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Total Users',
      value: '1,234',
      change: '+12%',
      trend: 'up',
      icon: Users,
    },
    {
      title: 'Active Sessions',
      value: '89',
      change: '+5%',
      trend: 'up',
      icon: MessageCircle,
    },
    {
      title: 'Crisis Alerts',
      value: '3',
      change: '-2',
      trend: 'down',
      icon: AlertTriangle,
    },
    {
      title: 'Appointments Today',
      value: '24',
      change: '+8%',
      trend: 'up',
      icon: Calendar,
    },
  ];

  const alerts = [
    {
      id: '1',
      severity: 'critical',
      user: 'User #1234',
      description: 'Crisis keywords detected in chat session',
      timestamp: '2 minutes ago',
      status: 'open',
    },
    {
      id: '2',
      severity: 'high',
      user: 'User #5678',
      description: 'High-risk assessment score detected',
      timestamp: '15 minutes ago',
      status: 'acknowledged',
    },
    {
      id: '3',
      severity: 'medium',
      user: 'User #9012',
      description: 'Missed consecutive appointments',
      timestamp: '1 hour ago',
      status: 'open',
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-800';
      case 'acknowledged': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Shield className="h-8 w-8 mr-3 text-blue-600" />
            Admin Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Monitor system health, user activity, and crisis alerts
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="alerts">Crisis Alerts</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
                return (
                  <Card key={stat.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <TrendIcon className={`h-4 w-4 mr-1 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                        <span>{stat.change} from last week</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Recent Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Crisis Alerts</CardTitle>
                <CardDescription>Latest alerts requiring immediate attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.slice(0, 3).map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <Badge className={getSeverityColor(alert.severity)}>
                              {alert.severity}
                            </Badge>
                            <Badge className={getStatusColor(alert.status)}>
                              {alert.status}
                            </Badge>
                          </div>
                          <p className="font-medium">{alert.description}</p>
                          <p className="text-sm text-gray-600">{alert.user} • {alert.timestamp}</p>
                        </div>
                      </div>
                      <Button size="sm">Review</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Crisis Alert Management</CardTitle>
                <CardDescription>Monitor and respond to crisis situations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.map((alert) => (
                    <div key={alert.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Badge className={getSeverityColor(alert.severity)}>
                            {alert.severity}
                          </Badge>
                          <Badge className={getStatusColor(alert.status)}>
                            {alert.status}
                          </Badge>
                          <span className="text-sm text-gray-500">{alert.timestamp}</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">Acknowledge</Button>
                          <Button size="sm">Respond</Button>
                        </div>
                      </div>
                      <h3 className="font-medium mb-1">{alert.description}</h3>
                      <p className="text-sm text-gray-600">User: {alert.user}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Monitor user activity and manage accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    User Management Interface
                  </h3>
                  <p className="text-gray-600">
                    User management features will be implemented in the next phase.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Analytics</CardTitle>
                <CardDescription>Detailed insights and reporting</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Analytics Dashboard
                  </h3>
                  <p className="text-gray-600">
                    Detailed analytics and reporting features will be available in the next phase.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;