import React from 'react';
import { Building2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Building2 className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">hostelGo</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Making your hostel living easier. Find comfortable, affordable, and safe accommodations 
              near top colleges and universities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Bookings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              About
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 hostelGo. All rights reserved.Crafted with care by Anshuman
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-sm">
                Support: <a href="tel:+919263730260" className="text-indigo-600 hover:text-indigo-700">+91 09263730260</a> | 
                <a href="mailto:support@hostelGo.in" className="text-indigo-600 hover:text-indigo-700 ml-1">support@hostelGo.in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;