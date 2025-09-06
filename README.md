# 🧠 Mental Health Support System - SIH 2024

## 📝 Problem Statement Summary
**Build a Digital Psychological Intervention System for college students** to provide:
- Stigma-free mental health support
- Early detection of mental health issues
- Easy access to counselling services
- Data-driven insights for college administration

## 🎯 Our Solution: **MindCare Campus**

A modern web application using Django REST Framework + Firebase + React with Tailwind CSS for comprehensive mental health support.

## ✨ Key Features (As Required by PS)

### 1. 🤖 AI-Guided First-Aid Support
- **Smart Chatbot** powered by OpenAI/Gemini API
- Real-time sentiment analysis using Django
- Crisis detection with automatic alerts
- Available in Hindi and English

### 2. 🔒 Confidential Booking System  
- Firebase real-time appointment scheduling
- Anonymous booking options
- Email notifications via Django
- Counsellor availability management

### 3. 📚 Psychoeducational Resource Hub
- Firebase Storage for videos/audio
- Content management via Django admin
- Multi-language support
- Offline-capable Progressive Web App

### 4. 👥 Peer Support Platform
- Real-time chat using Firebase Realtime Database
- Moderated by trained volunteers
- Anonymous participation options
- Content filtering and reporting

### 5. 📊 Admin Dashboard
- Firebase Analytics integration
- Django-powered data insights
- Real-time mental health trends
- Automated alert system

## 🛠 Tech Stack

```
Frontend: React.js + Tailwind CSS + Vite
Backend: Django + Django REST Framework
Database: Firebase Firestore + Realtime Database
Authentication: Firebase Auth + Django JWT
File Storage: Firebase Storage
Real-time: Firebase Realtime Database
AI: OpenAI API / Google Gemini
Deployment: Vercel (Frontend) + Railway (Backend)
```

## 🏗 System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Student App   │    │  Counsellor     │    │ Admin Dashboard │
│ React+Tailwind  │    │   Portal        │    │ React+Tailwind  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │ Django REST API │
                    │   + Firebase    │
                    └─────────────────┘
                                 │
         ┌──────────────────────┼──────────────────────┐
         │                      │                      │
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│   Firestore     │   │ Realtime DB     │   │ Firebase Auth   │
│  (Main Data)    │   │   (Chat)        │   │   (Users)       │
└─────────────────┘   └─────────────────┘   └─────────────────┘
```

## 📁 Project Structure

```
mindcare-campus/
├── frontend/                   # React + Tailwind
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/            # Main application pages
│   │   ├── hooks/            # Custom React hooks
│   │   ├── services/         # Firebase & API services
│   │   ├── utils/            # Helper functions
│   │   └── styles/           # Tailwind configurations
│   ├── public/
│   ├── tailwind.config.js
│   └── vite.config.js
├── backend/                   # Django Project
│   ├── mindcare/             # Main Django app
│   │   ├── models.py         # Data models
│   │   ├── views.py          # API views
│   │   ├── serializers.py    # DRF serializers
│   │   ├── urls.py           # URL patterns
│   │   └── utils.py          # Helper functions
│   ├── config/               # Django settings
│   ├── requirements.txt
│   └── manage.py
├── firebase/                 # Firebase configuration
│   ├── firestore.rules
│   ├── storage.rules
│   └── firebase.json
└── docs/                     # Documentation
```

## 🔥 Firebase Database Structure

### Firestore Collections

#### Users Collection
```javascript
// /users/{userId}
{
  uid: "firebase_auth_uid",
  email: "student@college.edu",
  role: "student" | "counsellor" | "admin",
  profile: {
    name: "Anonymous User",
    college: "ABC College",
    department: "Computer Science",
    year: 3,
    isAnonymous: true,
    language: "en" | "hi"
  },
  mentalHealth: {
    phq9Score: 8,
    gad7Score: 12,
    lastAssessment: timestamp,
    riskLevel: "medium",
    assessmentHistory: []
  },
  createdAt: timestamp,
  updatedAt: timestamp
}
```

#### Appointments Collection
```javascript
// /appointments/{appointmentId}
{
  id: "auto_generated_id",
  studentId: "user_uid",
  counsellorId: "counsellor_uid", 
  dateTime: timestamp,
  duration: 60, // minutes
  status: "scheduled" | "completed" | "cancelled",
  isAnonymous: true,
  meetingLink: "https://meet.google.com/xxx",
  notes: "Session notes here",
  createdAt: timestamp
}
```

#### Chat Sessions (Realtime Database)
```javascript
// /chatSessions/{sessionId}
{
  userId: "user_uid",
  messages: {
    "msg1": {
      sender: "user" | "bot",
      message: "I'm feeling anxious about exams",
      timestamp: timestamp,
      sentiment: -0.3,
      riskScore: 0.2
    }
  },
  sessionSummary: "User discussing exam anxiety",
  riskFlags: ["anxiety", "stress"],
  isActive: true,
  createdAt: timestamp
}
```

#### Resources Collection
```javascript
// /resources/{resourceId}
{
  id: "auto_generated_id",
  title: "Managing Exam Stress",
  description: "Helpful techniques for students",
  type: "video" | "audio" | "article" | "pdf",
  url: "firebase_storage_url",
  language: "en" | "hi",
  category: "stress" | "anxiety" | "depression" | "relationships",
  tags: ["exam", "stress", "coping"],
  views: 150,
  likes: 23,
  createdAt: timestamp
}
```

## 🚀 Development Roadmap (6 Weeks)

### Week 1: Setup & Authentication
**Goals**: Project setup and user authentication
- [ ] Initialize React project with Vite + Tailwind
- [ ] Setup Django project with DRF
- [ ] Configure Firebase (Auth, Firestore, Storage)
- [ ] Implement user registration/login
- [ ] Basic responsive UI with Tailwind

**Deliverables**: Users can register and login with Firebase Auth

### Week 2: Mental Health Assessment
**Goals**: Core assessment and basic chatbot
- [ ] Create PHQ-9 and GAD-7 forms in React
- [ ] Django models for assessment data
- [ ] Firebase Firestore integration
- [ ] Basic AI chatbot with OpenAI API
- [ ] Responsive assessment UI

**Deliverables**: Students can take mental health assessments

### Week 3: Booking System
**Goals**: Appointment scheduling system
- [ ] Counsellor availability management
- [ ] Real-time appointment booking
- [ ] Email notifications via Django
- [ ] Calendar integration
- [ ] Booking management UI

**Deliverables**: Complete appointment booking workflow

### Week 4: Resources & Peer Support
**Goals**: Content library and peer platform
- [ ] File upload to Firebase Storage
- [ ] Resource management system
- [ ] Real-time peer chat (Firebase Realtime DB)
- [ ] Moderation tools
- [ ] Content browsing UI

**Deliverables**: Resource library and peer support functional

### Week 5: Admin Dashboard
**Goals**: Analytics and administration
- [ ] Django admin customization
- [ ] Firebase Analytics integration
- [ ] Data visualization with Chart.js
- [ ] Alert system for high-risk users
- [ ] Admin dashboard UI

**Deliverables**: Complete admin functionality

### Week 6: Testing & Deployment
**Goals**: Final testing and deployment
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing
- [ ] Security testing
- [ ] Performance optimization
- [ ] Deploy to Vercel + Railway

**Final Deliverable**: Fully deployed application

## ⚙️ Quick Setup Guide

### Prerequisites
```bash
Python 3.9+
Node.js 18+
Firebase CLI
Git
```

### Backend Setup (Django)
```bash
# Clone and setup backend
git clone https://github.com/your-team/mindcare-campus.git
cd mindcare-campus/backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Environment setup
cp .env.example .env
# Add Firebase service account key, OpenAI API key, etc.

# Run migrations
python manage.py migrate

# Start development server
python manage.py runserver
```

### Frontend Setup (React + Tailwind)
```bash
# Setup frontend
cd ../frontend

# Install dependencies
npm install

# Environment setup
cp .env.example .env
# Add Firebase config

# Start development server
npm run dev
```

### Firebase Setup
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in project
firebase init
```

## 🎨 Frontend with Tailwind CSS

### Component Examples

#### Mental Health Assessment Card
```jsx
const AssessmentCard = ({ title, description, onStart }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          {/* Icon */}
        </svg>
      </div>
      <h3 className="ml-4 text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <button 
      onClick={onStart}
      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
    >
      Start Assessment
    </button>
  </div>
);
```

#### Chat Interface
```jsx
const ChatMessage = ({ message, sender, timestamp }) => (
  <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
      sender === 'user' 
        ? 'bg-blue-600 text-white' 
        : 'bg-gray-200 text-gray-800'
    }`}>
      <p className="text-sm">{message}</p>
      <span className="text-xs opacity-75">{timestamp}</span>
    </div>
  </div>
);
```

### Tailwind Color Scheme
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8'
        },
        mental: {
          calm: '#10b981',     // Green for positive
          warning: '#f59e0b',  // Yellow for moderate
          danger: '#ef4444'    // Red for high risk
        }
      }
    }
  }
}
```

## 🔧 Django Backend Structure

### Models Example
```python
# models.py
from django.db import models
from django.contrib.auth.models import User

class MentalHealthAssessment(models.Model):
    RISK_LEVELS = [
        ('low', 'Low Risk'),
        ('medium', 'Medium Risk'), 
        ('high', 'High Risk')
    ]
    
    user_id = models.CharField(max_length=255)  # Firebase UID
    phq9_score = models.IntegerField()
    gad7_score = models.IntegerField()
    risk_level = models.CharField(max_length=10, choices=RISK_LEVELS)
    assessment_date = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'mental_health_assessments'

class ChatSession(models.Model):
    user_id = models.CharField(max_length=255)
    session_summary = models.TextField()
    risk_flags = models.JSONField(default=list)
    sentiment_score = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
```

### API Views Example
```python
# views.py
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import AssessmentSerializer

@api_view(['POST'])
def submit_assessment(request):
    serializer = AssessmentSerializer(data=request.data)
    if serializer.is_valid():
        # Calculate risk level
        phq9 = serializer.validated_data['phq9_score']
        gad7 = serializer.validated_data['gad7_score']
        
        risk_level = calculate_risk_level(phq9, gad7)
        serializer.validated_data['risk_level'] = risk_level
        
        # Save to Firebase via Django
        assessment = serializer.save()
        
        # Trigger alerts if high risk
        if risk_level == 'high':
            send_alert_to_counsellors(assessment)
            
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
```

## 🔥 Firebase Integration

### Firebase Config (React)
```javascript
// src/services/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const realtimeDb = getDatabase(app);
```

### Firebase Service Functions
```javascript
// src/services/firestore.js
import { doc, setDoc, getDoc, collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

export const saveUserProfile = async (uid, profileData) => {
  try {
    await setDoc(doc(db, 'users', uid), {
      ...profileData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return true;
  } catch (error) {
    console.error('Error saving profile:', error);
    return false;
  }
};

export const bookAppointment = async (appointmentData) => {
  try {
    const docRef = await addDoc(collection(db, 'appointments'), {
      ...appointmentData,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error booking appointment:', error);
    return null;
  }
};
```

## 📱 Key Pages & Components

### Student Dashboard
```jsx
const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to MindCare Campus
          </h1>
        </div>
      </header>
      
      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <QuickActionCard 
            title="Chat with AI" 
            icon="🤖" 
            bgColor="bg-blue-500" 
          />
          <QuickActionCard 
            title="Book Appointment" 
            icon="📅" 
            bgColor="bg-green-500" 
          />
          <QuickActionCard 
            title="Resources" 
            icon="📚" 
            bgColor="bg-purple-500" 
          />
          <QuickActionCard 
            title="Peer Support" 
            icon="👥" 
            bgColor="bg-orange-500" 
          />
        </div>
      </div>
    </div>
  );
};
```

## 🧪 Testing Strategy

### Frontend Testing (React)
```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest

# Run tests
npm run test
```

### Backend Testing (Django)
```python
# tests.py
from django.test import TestCase
from rest_framework.test import APITestCase
from .models import MentalHealthAssessment

class AssessmentAPITest(APITestCase):
    def test_submit_assessment(self):
        data = {
            'user_id': 'test_uid',
            'phq9_score': 8,
            'gad7_score': 6
        }
        response = self.client.post('/api/assessments/', data)
        self.assertEqual(response.status_code, 201)
```

## 🚀 Deployment

### Frontend (Vercel)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd frontend
vercel --prod
```

### Backend (Railway)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Deploy
cd backend  
railway login
railway deploy
```

### Firebase Deployment
```bash
# Deploy Firestore rules and cloud functions
firebase deploy
```

## 📊 Expected Outcomes

### Technical Achievements
- ✅ Modern, responsive web application
- ✅ Real-time chat and notifications
- ✅ Scalable Firebase infrastructure
- ✅ AI-powered mental health support
- ✅ Anonymous and secure system

### Social Impact
- ✅ 24/7 mental health support access
- ✅ Reduced stigma through anonymity
- ✅ Early intervention capabilities
- ✅ Data-driven college policies
- ✅ Peer community building

## 🏆 SIH Presentation Highlights

### Innovation Points
- **Modern Tech Stack**: Django + Firebase + React + Tailwind
- **Real-time Features**: Live chat and notifications
- **AI Integration**: Smart chatbot with crisis detection
- **Mobile-First Design**: Responsive across all devices
- **Scalable Architecture**: Can handle thousands of users

### Problem-Solution Fit
- ✅ **AI-guided first-aid**: Smart chatbot with sentiment analysis
- ✅ **Confidential booking**: Firebase-powered anonymous appointments
- ✅ **Educational resources**: Multi-media content library
- ✅ **Peer support**: Real-time moderated chat platform
- ✅ **Admin analytics**: Comprehensive dashboard with insights

## 🤝 Team Allocation

1. **Team Lead**: Project coordination + Django backend
2. **Frontend Developer**: React + Tailwind UI/UX
3. **Firebase Developer**: Database design + real-time features
4. **AI/ML Developer**: Chatbot + sentiment analysis
5. **Mobile Developer**: PWA optimization + responsive design
6. **Testing & DevOps**: Quality assurance + deployment

## 📞 Resources & Links

### Documentation
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### APIs & Services
- [OpenAI API](https://platform.openai.com/docs)
- [Google Gemini API](https://ai.google.dev/)
- [EmailJS](https://www.emailjs.com/) for notifications

---

## 🎯 Success Metrics

- **User Engagement**: 80%+ students complete assessment
- **Response Time**: <2 seconds for all API calls
- **Availability**: 99.9% uptime for critical features
- **Privacy**: Zero data breaches or privacy violations
- **Impact**: Measurable improvement in student mental health

**Ready to revolutionize college mental health support! 🚀**

**#SIH2024 #MentalHealth #Django #Firebase #React #TailwindCSS**
