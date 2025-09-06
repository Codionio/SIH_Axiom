import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { UserCheck, Brain, Heart, TrendingUp } from 'lucide-react';

const Assessment = () => {
  const [selectedAssessment, setSelectedAssessment] = useState<string | null>(null);

  const assessments = [
    {
      id: 'phq9',
      title: 'PHQ-9 Depression Screening',
      description: 'A 9-question assessment to screen for depression symptoms',
      duration: '3-5 minutes',
      icon: Brain,
      color: 'bg-blue-500',
    },
    {
      id: 'gad7',
      title: 'GAD-7 Anxiety Assessment',
      description: 'A 7-question screening tool for generalized anxiety disorder',
      duration: '2-4 minutes',
      icon: Heart,
      color: 'bg-green-500',
    },
    {
      id: 'wellness',
      title: 'General Wellness Check',
      description: 'A comprehensive assessment of your overall mental wellness',
      duration: '5-8 minutes',
      icon: TrendingUp,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <UserCheck className="h-8 w-8 mr-3 text-blue-600" />
            Mental Health Assessment
          </h1>
          <p className="text-gray-600 mt-2">
            Regular self-assessment helps track your mental wellness and identify areas for support.
          </p>
        </div>

        {!selectedAssessment ? (
          <>
            {/* Assessment Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {assessments.map((assessment) => {
                const Icon = assessment.icon;
                return (
                  <Card 
                    key={assessment.id} 
                    className="hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setSelectedAssessment(assessment.id)}
                  >
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${assessment.color} flex items-center justify-center mb-4`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{assessment.title}</CardTitle>
                      <CardDescription>{assessment.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary">{assessment.duration}</Badge>
                        <Button size="sm">Start Assessment</Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Information Section */}
            <Card>
              <CardHeader>
                <CardTitle>About Mental Health Assessments</CardTitle>
                <CardDescription>
                  Understanding the importance of regular mental health check-ins
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Why Take Assessments?</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Track your mental wellness over time</li>
                      <li>• Identify potential areas of concern early</li>
                      <li>• Get personalized recommendations</li>
                      <li>• Monitor progress in your mental health journey</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Your Privacy</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• All responses are confidential</li>
                      <li>• Data is encrypted and secure</li>
                      <li>• You control who sees your results</li>
                      <li>• Anonymous mode available</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> These assessments are screening tools and not diagnostic instruments. 
                    If you have concerns about your mental health, please consult with a qualified healthcare professional.
                  </p>
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <div className="space-y-6">
            <Button 
              variant="outline" 
              onClick={() => setSelectedAssessment(null)}
              className="mb-4"
            >
              ← Back to Assessments
            </Button>
            
            <Card>
              <CardHeader>
                <CardTitle>Assessment in Progress</CardTitle>
                <CardDescription>
                  {assessments.find(a => a.id === selectedAssessment)?.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <UserCheck className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Assessment Component Coming Soon
                  </h3>
                  <p className="text-gray-600 mb-6">
                    The detailed assessment forms will be implemented in the next phase.
                  </p>
                  <div className="space-y-4">
                    <Progress value={0} className="w-full max-w-md mx-auto" />
                    <p className="text-sm text-gray-500">Question 0 of 9</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assessment;