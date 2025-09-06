import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Bot, Users, UserCheck, Phone } from 'lucide-react';

const Chat = () => {
  const [selectedChatType, setSelectedChatType] = useState<string | null>(null);

  const chatOptions = [
    {
      id: 'ai-support',
      title: 'AI Mental Health Assistant',
      description: 'Chat with our AI-powered support assistant available 24/7',
      icon: Bot,
      color: 'bg-blue-500',
      status: 'Available Now',
      features: ['24/7 Availability', 'Immediate Response', 'Crisis Detection', 'Resource Recommendations'],
    },
    {
      id: 'peer-chat',
      title: 'Peer Support Groups',
      description: 'Connect with other students in moderated support groups',
      icon: Users,
      color: 'bg-green-500',
      status: 'Join Group',
      features: ['Moderated Groups', 'Anonymous Option', 'Shared Experiences', 'Mutual Support'],
    },
    {
      id: 'counselor-chat',
      title: 'Professional Counselor',
      description: 'Schedule a chat session with a licensed mental health professional',
      icon: UserCheck,
      color: 'bg-purple-500',
      status: 'Book Session',
      features: ['Licensed Professionals', 'Confidential Sessions', 'Personalized Care', 'Crisis Intervention'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <MessageCircle className="h-8 w-8 mr-3 text-blue-600" />
            Support Chat
          </h1>
          <p className="text-gray-600 mt-2">
            Choose the type of support that feels right for you. All conversations are confidential and secure.
          </p>
        </div>

        {!selectedChatType ? (
          <>
            {/* Chat Options */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {chatOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <Card 
                    key={option.id} 
                    className="hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setSelectedChatType(option.id)}
                  >
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${option.color} flex items-center justify-center mb-4`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{option.title}</CardTitle>
                      <CardDescription>{option.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Badge variant="secondary">{option.status}</Badge>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {option.features.map((feature, index) => (
                            <li key={index}>• {feature}</li>
                          ))}
                        </ul>
                        <Button className="w-full">
                          {option.id === 'ai-support' ? 'Start Chat' : 
                           option.id === 'peer-chat' ? 'Join Group' : 'Book Session'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Safety Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Safety & Privacy</CardTitle>
                  <CardDescription>How we protect your conversations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">End-to-End Encryption</h4>
                      <p className="text-sm text-gray-600">All messages are encrypted and secure</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Anonymous Options</h4>
                      <p className="text-sm text-gray-600">Chat without revealing your identity</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Crisis Detection</h4>
                      <p className="text-sm text-gray-600">AI monitors for crisis situations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-900">Crisis Support</CardTitle>
                  <CardDescription className="text-red-700">
                    Immediate help when you need it most
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-red-800">
                    If you're experiencing a mental health crisis or having thoughts of self-harm, 
                    please reach out for immediate help:
                  </p>
                  <div className="space-y-2">
                    <Button variant="destructive" size="sm" className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Crisis Hotline: 988
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      Emergency Services: 911
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      Campus Security
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        ) : (
          <div className="space-y-6">
            <Button 
              variant="outline" 
              onClick={() => setSelectedChatType(null)}
              className="mb-4"
            >
              ← Back to Chat Options
            </Button>
            
            <Card className="h-96">
              <CardHeader>
                <CardTitle>
                  {chatOptions.find(c => c.id === selectedChatType)?.title}
                </CardTitle>
                <CardDescription>
                  Chat interface will be implemented in the next phase
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-full">
                <div className="text-center">
                  <MessageCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Chat Interface Coming Soon
                  </h3>
                  <p className="text-gray-600">
                    Real-time messaging, AI integration, and crisis detection features 
                    will be available in the next development phase.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;