import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Star, 
  MapPin, 
  Wifi, 
  Shield, 
  Car, 
  Utensils,
  Users,
  CheckCircle,
  ArrowLeft,
  Calendar,
  CreditCard
} from 'lucide-react';

const HostelDetailsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in a real app, this would come from an API
  const hostel = {
    id: '1',
    name: 'Comfort Stay Hostel',
    location: 'Greater Noida',
    price: 105000,
    rating: 4.2,
    reviews: 34,
    images: [
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Experience comfortable living in our well-maintained hostel with modern amenities. Located in the heart of Greater Noida with easy access to major colleges and universities.',
    amenities: [
      { icon: Car, name: 'Transport', description: 'Daily shuttle service to colleges' },
      { icon: Shield, name: '24/7 Security', description: 'Round-the-clock security with CCTV surveillance' },
      { icon: Wifi, name: 'Free WiFi', description: 'High-speed internet throughout the premises' },
      { icon: Utensils, name: 'All Meals', description: 'Breakfast, lunch, snacks & dinner included' },
      { icon: Users, name: 'Laundry', description: 'Professional laundry service available' },
      { icon: CheckCircle, name: 'Housekeeping', description: 'Daily room cleaning service' }
    ],
    roomTypes: [
      {
        type: '2 Seater AC',
        price: 125000,
        features: ['Air Conditioning', 'Attached Bathroom', 'Study Table', 'Wardrobe']
      },
      {
        type: '3 Seater AC',
        price: 105000,
        features: ['Air Conditioning', 'Attached Bathroom', 'Study Tables', 'Individual Wardrobes']
      },
      {
        type: '2 Seater Non-AC',
        price: 95000,
        features: ['Cooler', 'Attached Bathroom', 'Study Table', 'Wardrobe']
      },
      {
        type: '3 Seater Non-AC',
        price: 85000,
        features: ['Cooler', 'Attached Bathroom', 'Study Tables', 'Individual Wardrobes']
      }
    ],
    rules: [
      'No smoking or alcohol consumption',
      'Visitors allowed only during specified hours',
      'Maintain cleanliness in common areas',
      'No loud music after 10 PM',
      'ID proof required for entry'
    ]
  };

  const [selectedRoomType, setSelectedRoomType] = React.useState(hostel.roomTypes[1]);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleBookNow = () => {
    navigate('/booking/details', { 
      state: { 
        hostel: hostel.name,
        roomType: selectedRoomType.type,
        price: selectedRoomType.price
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Hostels
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-96">
                <img
                  src={hostel.images[currentImageIndex]}
                  alt={hostel.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {hostel.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Hostel Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{hostel.name}</h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{hostel.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(hostel.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">
                      {hostel.rating} ({hostel.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">{hostel.description}</p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hostel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-indigo-100 rounded-lg p-3">
                      <amenity.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{amenity.name}</h3>
                      <p className="text-gray-600 text-sm">{amenity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Types */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Room Types</h2>
              <div className="space-y-4">
                {hostel.roomTypes.map((room, index) => (
                  <div
                    key={index}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedRoomType.type === room.type
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedRoomType(room)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{room.type}</h3>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-gray-900">₹{room.price.toLocaleString()}</span>
                        <span className="text-gray-600 text-sm ml-1">/ year</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hostel Rules</h2>
              <ul className="space-y-3">
                {hostel.rules.map((rule, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Book Your Stay</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Selected Room:</span>
                  <span className="font-semibold">{selectedRoomType.type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Annual Fee:</span>
                  <span className="text-2xl font-bold text-gray-900">₹{selectedRoomType.price.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Booking Amount:</span>
                  <span className="font-semibold">₹10,000</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Convenience Fee:</span>
                  <span className="font-semibold">₹500</span>
                </div>
                <hr />
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Pay Now:</span>
                  <span className="text-xl font-bold text-indigo-600">₹10,500</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Instant confirmation</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CreditCard className="h-4 w-4 mr-2" />
                  <span>Secure payment</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>24/7 support</span>
                </div>
              </div>

              <button
                onClick={handleBookNow}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Book Now
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                By booking, you agree to our terms and conditions
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HostelDetailsPage;