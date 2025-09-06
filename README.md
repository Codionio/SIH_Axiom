# MindCare Campus - Mental Health Support Platform

A comprehensive mental health support platform designed specifically for students, featuring AI-powered assessments, counselor chat, crisis detection, and educational resources.

## 🌟 Features

### Core Functionality
- **Mental Health Assessments**: PHQ-9 and GAD-7 screening tools
- **Real-time Counselor Chat**: Direct messaging with mental health professionals
- **Appointment Booking**: Schedule sessions with counselors
- **Educational Resources**: Access to mental health information and tools
- **Crisis Detection**: AI-powered risk assessment and intervention
- **Anonymous Mode**: Privacy-focused anonymous interactions
- **Multi-language Support**: Available in multiple languages

### Technical Features
- **Modern React Architecture**: Built with React 19, TypeScript, and Vite
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Authentication System**: Firebase integration with mock fallback
- **Real-time Updates**: Live chat and notifications
- **Progressive Web App**: Offline capabilities and mobile optimization
- **Accessibility**: WCAG 2.1 compliant design

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mindcare-campus.git
   cd mindcare-campus
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── common/         # Common components (Header, Footer, etc.)
│   └── ui/             # Shadcn/ui components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
├── services/           # API and external services
├── types/              # TypeScript type definitions
└── main.tsx           # Application entry point
```

### Technology Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn/ui
- **State Management**: React Query, Zustand
- **Authentication**: Firebase Auth (with mock fallback)
- **Database**: Firebase Firestore
- **Routing**: React Router v6
- **Forms**: React Hook Form, Zod validation
- **Charts**: Recharts
- **Icons**: Lucide React

## 🔐 Authentication

The app supports two authentication modes:

### 1. Firebase Authentication (Production)
Configure your Firebase project and add the credentials to `.env.local`

### 2. Mock Authentication (Development)
When Firebase is not configured, the app automatically uses mock authentication with these test accounts:

- **Student**: `test@mindcare.com` / `password123`
- **Admin**: `admin@mindcare.com` / `password123`
- **Anonymous**: Available for privacy-focused users

## 🎨 UI Components

Built with Shadcn/ui components for a modern, accessible design:

- **Forms**: Input, Select, Checkbox, Radio Group
- **Navigation**: Tabs, Breadcrumb, Navigation Menu
- **Feedback**: Alert, Toast, Progress, Skeleton
- **Layout**: Card, Sheet, Dialog, Accordion
- **Data Display**: Table, Badge, Avatar, Calendar

## 📱 Responsive Design

The app is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔒 Privacy & Security

- **Data Encryption**: All sensitive data is encrypted
- **Anonymous Mode**: Users can interact without revealing identity
- **Privacy Settings**: Granular control over data sharing
- **Secure Authentication**: Firebase Auth with additional security measures
- **Crisis Intervention**: Automatic flagging of high-risk situations

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Add environment variables in Netlify dashboard

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Deploy: `firebase deploy`

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Wiki](https://github.com/yourusername/mindcare-campus/wiki)
- **Issues**: [GitHub Issues](https://github.com/yourusername/mindcare-campus/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/mindcare-campus/discussions)

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Firebase](https://firebase.google.com/) for authentication and database services
- [React](https://reactjs.org/) for the amazing frontend framework

## 📊 Project Status

![GitHub last commit](https://img.shields.io/github/last-commit/yourusername/mindcare-campus)
![GitHub issues](https://img.shields.io/github/issues/yourusername/mindcare-campus)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/mindcare-campus)
![GitHub stars](https://img.shields.io/github/stars/yourusername/mindcare-campus)

---

**Made with ❤️ for student mental health and wellness**