import { Heart, Shield, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">MindCare Campus</span>
            </div>
            <p className="text-gray-600 max-w-md">
              Supporting student mental health and wellbeing through accessible, 
              confidential, and comprehensive mental health services.
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-500">
                <Shield className="h-4 w-4 mr-1" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/assessment" className="text-gray-600 hover:text-gray-900">
                  Mental Health Assessment
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="text-gray-600 hover:text-gray-900">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 hover:text-gray-900">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-gray-600 hover:text-gray-900">
                  Support Chat
                </Link>
              </li>
            </ul>
          </div>

          {/* Emergency Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Emergency Support
            </h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <span>Crisis Hotline: 988</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <span>Campus Security: 911</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@mindcare.edu</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-red-50 rounded-md">
              <p className="text-xs text-red-800">
                <strong>Crisis?</strong> If you're in immediate danger, 
                call 911 or go to your nearest emergency room.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2024 MindCare Campus. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-900">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-sm text-gray-500 hover:text-gray-900">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};