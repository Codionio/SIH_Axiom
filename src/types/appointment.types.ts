export interface Appointment {
  appointmentId: string;
  userId: string;
  counselorId: string;
  scheduledTime: Date;
  duration: number; // minutes
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled' | 'no-show';
  appointmentType: 'video' | 'phone' | 'in-person';
  meetingLink?: string;
  notes?: string;
  reminderSent: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TimeSlot {
  startTime: Date;
  endTime: Date;
  counselorId: string;
  isAvailable: boolean;
  appointmentType: ('video' | 'phone' | 'in-person')[];
}

export interface Counselor {
  counselorId: string;
  name: string;
  email: string;
  specializations: string[];
  languages: string[];
  availability: TimeSlot[];
  rating: number;
  bio: string;
  profileImage?: string;
}

export interface AppointmentBooking {
  counselorId: string;
  scheduledTime: Date;
  duration: number;
  appointmentType: 'video' | 'phone' | 'in-person';
  notes?: string;
  anonymous: boolean;
}