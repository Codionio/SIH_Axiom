import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/hooks/useAuth';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { LoginForm } from '@/components/auth/LoginForm';
import { RegisterForm } from '@/components/auth/RegisterForm';
import Index from './pages/Index';
import Dashboard from './pages/Dashboard';
import Assessment from './pages/Assessment';
import Chat from './pages/Chat';
import Appointments from './pages/Appointments';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import Admin from './pages/Admin';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ErrorBoundary>
        <AuthProvider>
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Index />} />
                  <Route path="/login" element={<LoginForm />} />
                  <Route path="/register" element={<RegisterForm />} />
                  
                  {/* Protected Routes */}
                  <Route 
                    path="/dashboard" 
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/assessment" 
                    element={
                      <ProtectedRoute>
                        <Assessment />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/chat" 
                    element={
                      <ProtectedRoute>
                        <Chat />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/appointments" 
                    element={
                      <ProtectedRoute>
                        <Appointments />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/resources" 
                    element={
                      <ProtectedRoute>
                        <Resources />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/profile" 
                    element={
                      <ProtectedRoute>
                        <Profile />
                      </ProtectedRoute>
                    } 
                  />
                  
                  {/* Admin Routes */}
                  <Route 
                    path="/admin" 
                    element={
                      <ProtectedRoute requiredRole="admin">
                        <Admin />
                      </ProtectedRoute>
                    } 
                  />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Footer />
            </div>
            <Toaster />
          </BrowserRouter>
        </AuthProvider>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;