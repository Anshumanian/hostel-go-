import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  CheckCircle, 
  Shield, 
  Wifi, 
  Car, 
  Utensils, 
  Clock,
  Star,
  ArrowRight,
  MapPin,
  ChevronDown
} from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState('');

  const cities = [
    'Choose a city',
    'Delhi',
    'Ghaziabad',
    'Noida',
    'Greater Noida'
  ];

  const features = [
    { icon: CheckCircle, title: 'Convenience', description: 'Book anytime, anywhere with just a few clicks' },
    { icon: MapPin, title: 'Wide Range of Options', description: 'Access to hostels across different locations' },
    { icon: Star, title: 'User Reviews & Ratings', description: 'Read reviews from previous guests' },
    { icon: Shield, title: '24/7 Security', description: 'Safe and secure accommodations' },
    { icon: Wifi, title: 'Free WiFi', description: 'Stay connected with high-speed internet' },
    { icon: Utensils, title: 'Meals Included', description: 'Breakfast, lunch, snacks & dinner provided' }
  ];

  const steps = [
    {
      number: 1,
      title: 'Choose Your City',
      description: 'Select your preferred city and click Get Started'
    },
    {
      number: 2,
      title: 'Explore Options',
      description: 'Browse through available hostels and view details'
    },
    {
      number: 3,
      title: 'Select & Book',
      description: 'Choose your room type and proceed with booking'
    },
    {
      number: 4,
      title: 'Fill Details',
      description: 'Complete your information and proceed to payment'
    },
    {
      number: 5,
      title: 'Confirmation',
      description: 'Receive booking confirmation and enjoy your stay'
    }
  ];

  const handleGetStarted = () => {
    if (selectedCity && selectedCity !== 'Choose a city') {
      navigate('/hostels');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Find Your Perfect
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    {' '}Hostel Stay
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Looking for reliable and affordable accommodations? Our network of student-friendly 
                  hostels offers safe, comfortable, and budget-friendly stays near top colleges and universities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent min-w-[200px]"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
                <button
                  onClick={handleGetStarted}
                  disabled={!selectedCity || selectedCity === 'Choose a city'}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 disabled:cursor-not-allowed"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern hostel room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Verified Hostels</p>
                    <p className="text-sm text-gray-600">Safe & Secure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose hostelGo?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a seamless, efficient, and hassle-free experience when booking your hostel accommodation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-indigo-100 group-hover:bg-indigo-200 rounded-lg p-3 transition-colors">
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="steps" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to book your perfect hostel stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-6"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Customer support"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Still confused?
                <br />
                <span className="text-indigo-600">We've got you covered!</span>
              </h2>
              <p className="text-xl text-gray-600">
                Our dedicated support team is here to help you find the perfect accommodation. 
                Reach out to us anytime for assistance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-indigo-600" />
                  <span className="text-gray-700">24/7 Customer Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-semibold text-gray-900">📞 +91 09263730260</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg text-indigo-600 font-medium">✉️ support@hostelGo.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;