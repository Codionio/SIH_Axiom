export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  error?: string;
}

export interface PaginatedResponse<T> {
  results: T[];
  count: number;
  next: string | null;
  previous: string | null;
}

export interface Assessment {
  assessmentId: string;
  userId: string;
  type: 'PHQ9' | 'GAD7' | 'custom';
  responses: Record<string, number>;
  score: number;
  riskLevel: 'low' | 'moderate' | 'high' | 'crisis';
  recommendations: string[];
  completedAt: Date;
  createdAt: Date;
}

export interface Resource {
  resourceId: string;
  title: string;
  description: string;
  category: 'video' | 'audio' | 'pdf' | 'article' | 'assessment';
  language: 'en' | 'hi' | 'both';
  storageUrl: string;
  thumbnailUrl?: string;
  fileSize: number;
  duration?: number; // for video/audio
  tags: string[];
  uploadedBy: string;
  createdAt: Date;
  updatedAt: Date;
  isPublished: boolean;
  viewCount: number;
  ratings: {
    average: number;
    count: number;
    distribution: Record<string, number>;
  };
}

export interface Alert {
  alertId: string;
  userId: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  alertType: 'crisis_detection' | 'risk_escalation' | 'missed_appointment' | 'system_alert';
  triggerEvent: string;
  description: string;
  metadata: {
    sessionId?: string;
    assessmentId?: string;
    appointmentId?: string;
    aiConfidence?: number;
  };
  status: 'open' | 'acknowledged' | 'resolved' | 'escalated';
  acknowledgedBy?: string;
  acknowledgedAt?: Date;
  resolvedBy?: string;
  resolvedAt?: Date;
  actions: AlertAction[];
  createdAt: Date;
}

export interface AlertAction {
  actionId: string;
  actionType: string;
  description: string;
  performedBy: string;
  performedAt: Date;
}