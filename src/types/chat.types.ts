export interface ChatMessage {
  messageId: string;
  sessionId: string;
  userId: string;
  content: string;
  messageType: 'text' | 'image' | 'file' | 'system';
  timestamp: Date;
  isRead: boolean;
  sentimentScore?: number;
  flagged?: boolean;
}

export interface ChatSession {
  sessionId: string;
  userId: string;
  sessionType: 'ai-support' | 'peer-chat' | 'counselor-chat';
  participants: string[];
  messages: ChatMessage[];
  sentimentAnalysis: SentimentData[];
  crisisFlags: CrisisFlag[];
  startTime: Date;
  endTime?: Date;
  isActive: boolean;
  metadata: {
    language: string;
    platform: string;
    userAgent: string;
  };
}

export interface SentimentData {
  messageId: string;
  polarity: number; // -1.0 to 1.0
  intensity: number; // 0.0 to 1.0
  emotions: string[];
  confidence: number;
  timestamp: Date;
}

export interface CrisisFlag {
  flagId: string;
  messageId: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  keywords: string[];
  confidence: number;
  timestamp: Date;
  resolved: boolean;
}

export interface TypingStatus {
  userId: string;
  isTyping: boolean;
  timestamp: Date;
}