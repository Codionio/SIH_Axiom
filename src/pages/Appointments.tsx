import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Video, Phone, MapPin, User } from 'lucide-react';

const Appointments = () => {
  const [view, setView] = useState<'book' | 'upcoming' | 'history'>('book');

  const counselors = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      title: 'Licensed Clinical Psychologist',
      specializations: ['Anxiety', 'Depression', 'Stress Management'],
      rating: 4.9,
      availability: 'Available Today',
      image: '/api/placeholder/64/64',
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      title: 'Licensed Professional Counselor',
      specializations: ['Academic Stress', 'Relationship Issues', 'ADHD'],
      rating: 4.8,
      availability: 'Available Tomorrow',
      image: '/api/placeholder/64/64',
    },
    {
      id: '3',
      name: 'Dr. Emily Rodriguez',
      title: 'Licensed Marriage & Family Therapist',
      specializations: ['Family Therapy', 'Trauma', 'PTSD'],
      rating: 4.9,
      availability: 'Available This Week',
      image: '/api/placeholder/64/64',
    },
  ];

  const upcomingAppointments = [
    {
      id: '1',
      counselor: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      time: '2:00 PM',
      type: 'video',
      status: 'confirmed',
    },
  ];

  const appointmentTypes = [
    {
      type: 'video',
      icon: Video,
      title: 'Video Call',
      description: 'Secure video session from anywhere',
      duration: '50 minutes',
    },
    {
      type: 'phone',
      icon: Phone,
      title: 'Phone Call',
      description: 'Private phone conversation',
      duration: '50 minutes',
    },
    {
      type: 'in-person',
      icon: MapPin,
      title: 'In-Person',
      description: 'Meet at our campus wellness center',
      duration: '50 minutes',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Calendar className="h-8 w-8 mr-3 text-blue-600" />
            Appointments
          </h1>
          <p className="text-gray-600 mt-2">
            Schedule sessions with licensed mental health professionals
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg w-fit">
          <Button
            variant={view === 'book' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setView('book')}
          >
            Book Appointment
          </Button>
          <Button
            variant={view === 'upcoming' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setView('upcoming')}
          >
            Upcoming
          </Button>
          <Button
            variant={view === 'history' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setView('history')}
          >
            History
          </Button>
        </div>

        {view === 'book' && (
          <>
            {/* Appointment Types */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {appointmentTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <Card key={type.type} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{type.title}</h3>
                          <p className="text-sm text-gray-600">{type.description}</p>
                          <Badge variant="secondary" className="mt-1">{type.duration}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Available Counselors */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Available Counselors</h2>
              {counselors.map((counselor) => (
                <Card key={counselor.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                          <User className="h-8 w-8 text-gray-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{counselor.name}</h3>
                          <p className="text-sm text-gray-600">{counselor.title}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {counselor.specializations.map((spec) => (
                              <Badge key={spec} variant="outline" className="text-xs">
                                {spec}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center mt-2 space-x-4">
                            <div className="flex items-center">
                              <span className="text-sm text-gray-600">Rating: {counselor.rating}/5</span>
                            </div>
                            <Badge variant="secondary">{counselor.availability}</Badge>
                          </div>
                        </div>
                      </div>
                      <Button>Book Session</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {view === 'upcoming' && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Upcoming Appointments</h2>
            {upcomingAppointments.length > 0 ? (
              upcomingAppointments.map((appointment) => (
                <Card key={appointment.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-green-100 rounded-lg">
                          <Calendar className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{appointment.counselor}</h3>
                          <p className="text-sm text-gray-600">
                            {appointment.date} at {appointment.time}
                          </p>
                          <div className="flex items-center mt-1 space-x-2">
                            <Badge variant="outline">{appointment.type}</Badge>
                            <Badge className="bg-green-100 text-green-800">{appointment.status}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Reschedule</Button>
                        <Button variant="destructive" size="sm">Cancel</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Upcoming Appointments</h3>
                  <p className="text-gray-600 mb-4">You don't have any scheduled appointments.</p>
                  <Button onClick={() => setView('book')}>Book Your First Appointment</Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {view === 'history' && (
          <Card>
            <CardContent className="p-12 text-center">
              <Clock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Appointment History</h3>
              <p className="text-gray-600">Your completed appointments will appear here.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Appointments;