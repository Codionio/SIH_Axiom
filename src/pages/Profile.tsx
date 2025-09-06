import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { User, Mail, Phone, Shield, Bell, Eye, Trash2, Download } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || '',
    email: user?.email || '',
    phone: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: '',
  });
  const [privacySettings, setPrivacySettings] = useState({
    allowAnalytics: user?.privacySettings?.allowAnalytics ?? true,
    shareWithCounselors: user?.privacySettings?.shareWithCounselors ?? false,
    anonymousMode: user?.privacySettings?.anonymousMode ?? false,
  });
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    appointmentReminders: true,
    crisisAlerts: true,
    weeklyReports: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSave = async () => {
    try {
      await updateProfile({
        displayName: formData.displayName,
        privacySettings: privacySettings,
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'moderate': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'crisis': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <User className="h-8 w-8 mr-3 text-blue-600" />
            Profile Settings
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your account information and privacy preferences
          </p>
        </div>

        <div className="space-y-6">
          {/* Profile Information */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Your basic account details and contact information
                </CardDescription>
              </div>
              <Button
                variant={isEditing ? 'default' : 'outline'}
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              >
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="displayName">Display Name</Label>
                  <Input
                    id="displayName"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    placeholder={user?.anonymousId ? 'Anonymous User' : 'Enter your name'}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing || !!user?.anonymousId}
                    placeholder={user?.anonymousId ? 'Anonymous account' : 'your@email.com'}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Account Status</Label>
                  <div className="flex items-center space-x-2">
                    <Badge className={getRiskLevelColor(user?.riskLevel || 'low')}>
                      {user?.riskLevel || 'Low'} Risk
                    </Badge>
                    <Badge variant="outline">
                      {user?.role || 'Student'}
                    </Badge>
                    {user?.anonymousId && (
                      <Badge variant="secondary">Anonymous</Badge>
                    )}
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Emergency Contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactName">Name</Label>
                    <Input
                      id="emergencyContactName"
                      name="emergencyContactName"
                      value={formData.emergencyContactName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      placeholder="Contact name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactPhone">Phone</Label>
                    <Input
                      id="emergencyContactPhone"
                      name="emergencyContactPhone"
                      type="tel"
                      value={formData.emergencyContactPhone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactRelationship">Relationship</Label>
                    <Input
                      id="emergencyContactRelationship"
                      name="emergencyContactRelationship"
                      value={formData.emergencyContactRelationship}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      placeholder="Parent, Spouse, etc."
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Privacy Settings
              </CardTitle>
              <CardDescription>
                Control how your data is used and shared
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Allow Analytics</Label>
                  <p className="text-sm text-muted-foreground">
                    Help improve our services by sharing anonymous usage data
                  </p>
                </div>
                <Switch
                  checked={privacySettings.allowAnalytics}
                  onCheckedChange={(checked) => 
                    setPrivacySettings(prev => ({ ...prev, allowAnalytics: checked }))
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Share with Counselors</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow counselors to access your assessment history
                  </p>
                </div>
                <Switch
                  checked={privacySettings.shareWithCounselors}
                  onCheckedChange={(checked) => 
                    setPrivacySettings(prev => ({ ...prev, shareWithCounselors: checked }))
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Anonymous Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Use the platform without linking data to your identity
                  </p>
                </div>
                <Switch
                  checked={privacySettings.anonymousMode}
                  onCheckedChange={(checked) => 
                    setPrivacySettings(prev => ({ ...prev, anonymousMode: checked }))
                  }
                  disabled={!!user?.anonymousId}
                />
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Choose what notifications you'd like to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive updates and reminders via email
                  </p>
                </div>
                <Switch
                  checked={notificationSettings.emailNotifications}
                  onCheckedChange={(checked) => 
                    setNotificationSettings(prev => ({ ...prev, emailNotifications: checked }))
                  }
                  disabled={!!user?.anonymousId}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Appointment Reminders</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified before scheduled appointments
                  </p>
                </div>
                <Switch
                  checked={notificationSettings.appointmentReminders}
                  onCheckedChange={(checked) => 
                    setNotificationSettings(prev => ({ ...prev, appointmentReminders: checked }))
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Crisis Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive immediate notifications for crisis situations
                  </p>
                </div>
                <Switch
                  checked={notificationSettings.crisisAlerts}
                  onCheckedChange={(checked) => 
                    setNotificationSettings(prev => ({ ...prev, crisisAlerts: checked }))
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Weekly Reports</Label>
                  <p className="text-sm text-muted-foreground">
                    Get weekly summaries of your mental health progress
                  </p>
                </div>
                <Switch
                  checked={notificationSettings.weeklyReports}
                  onCheckedChange={(checked) => 
                    setNotificationSettings(prev => ({ ...prev, weeklyReports: checked }))
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-5 w-5 mr-2" />
                Data Management
              </CardTitle>
              <CardDescription>
                Download or delete your personal data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Download My Data
                </Button>
                <Button variant="destructive" className="flex-1">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                You can request a copy of all your data or permanently delete your account. 
                These actions cannot be undone.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;