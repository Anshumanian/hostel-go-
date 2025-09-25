import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchFilters from '../components/SearchFilters';
import { useSearch } from '../hooks/useSearch';
import { 
  Star, 
  MapPin, 
  Wifi, 
  Shield, 
  Car, 
  Utensils, 
  Search
} from 'lucide-react';

interface Hostel {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  roomTypes: string[];
  amenities: string[];
  description: string;
  isNew?: boolean;
}

const ViewHostelsPage: React.FC = () => {
  const navigate = useNavigate();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const hostels: Hostel[] = [
    {
      id: '1',
      name: 'Comfort Stay Hostel',
      location: 'Greater Noida',
      price: 105000,
      rating: 4.2,
      reviews: 34,
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      roomTypes: ['2 Seater AC', '3 Seater AC', '2 Seater Non-AC', '3 Seater Non-AC'],
      amenities: ['Transport', 'Laundry', '24/7 Security', 'Free WiFi', 'All Meals'],
      description: 'Available in AC 3 seaters and 2 seaters, Non AC (with cooler) 3 seaters and 2 seaters.',
      isNew: true
    },
    {
      id: '2',
      name: 'Elite Student Residence',
      location: 'Greater Noida',
      price: 125000,
      rating: 4.5,
      reviews: 67,
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      roomTypes: ['Single AC', '2 Seater AC', '3 Seater AC'],
      amenities: ['Transport', 'Laundry', '24/7 Security', 'Free WiFi', 'All Meals', 'Gym'],
      description: 'Premium accommodation with modern facilities and excellent connectivity to colleges.'
    },
    {
      id: '3',
      name: 'Budget Friendly Hostel',
      location: 'Greater Noida',
      price: 85000,
      rating: 4.0,
      reviews: 28,
      image: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800',
      roomTypes: ['4 Seater Non-AC', '3 Seater Non-AC', '2 Seater Non-AC'],
      amenities: ['Transport', '24/7 Security', 'Free WiFi', 'All Meals'],
      description: 'Affordable accommodation without compromising on essential amenities and safety.'
    }
  ];

  const {
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    priceRange,
    setPriceRange,
    selectedAmenities,
    setSelectedAmenities,
    filteredHostels,
    resultsCount
  } = useSearch(hostels);

  const handleViewDetails = (hostelId: string) => {
    navigate(`/hostel/${hostelId}`);
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'transport':
        return <Car className="h-4 w-4" />;
      case '24/7 security':
        return <Shield className="h-4 w-4" />;
      case 'free wifi':
        return <Wifi className="h-4 w-4" />;
      case 'all meals':
      case 'breakfast,lunch,snack & dinner':
        return <Utensils className="h-4 w-4" />;
      default:
        return <span className="h-4 w-4 bg-gray-300 rounded-full" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={setSearchTerm} searchTerm={searchTerm} />
      
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Hostels in Greater Noida
            </h1>
            <p className="mt-2 text-gray-600">
              {resultsCount} {resultsCount === 1 ? 'hostel' : 'hostels'} found
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search hostels by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          
          <SearchFilters
            sortBy={sortBy}
            setSortBy={setSortBy}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedAmenities={selectedAmenities}
            setSelectedAmenities={setSelectedAmenities}
            isOpen={isFiltersOpen}
            onToggle={() => setIsFiltersOpen(!isFiltersOpen)}
          />
        </div>

        {/* Active Filters Display */}
        {(searchTerm || selectedAmenities.length > 0 || sortBy !== 'all' || priceRange[0] > 0 || priceRange[1] < 200000) && (
          <div className="flex flex-wrap gap-2 mt-4">
            {searchTerm && (
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm flex items-center">
                Search: "{searchTerm}"
                <button
                  onClick={() => setSearchTerm('')}
                  className="ml-2 text-indigo-600 hover:text-indigo-800"
                >
                  ×
                </button>
              </span>
            )}
            {selectedAmenities.map(amenity => (
              <span key={amenity} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center">
                {amenity}
                <button
                  onClick={() => setSelectedAmenities(selectedAmenities.filter(a => a !== amenity))}
                  className="ml-2 text-green-600 hover:text-green-800"
                >
                  ×
                </button>
              </span>
            ))}
            {sortBy !== 'all' && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                Sort: {sortBy.replace('-', ' ')}
                <button
                  onClick={() => setSortBy('all')}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Hostels Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHostels.map((hostel) => (
            <div
              key={hostel.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48">
                <img
                  src={hostel.image}
                  alt={hostel.name}
                  className="w-full h-full object-cover"
                />
                {hostel.isNew && (
                  <span className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    New
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Room Types */}
                <div className="flex items-center mb-3">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {hostel.roomTypes.slice(0, 2).join(' • ')}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{hostel.name}</h3>

                {/* Location */}
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{hostel.location}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {hostel.description}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">₹{hostel.price.toLocaleString()}</span>
                  <span className="text-gray-600 text-sm ml-1">/ year</span>
                </div>

                {/* Amenities */}
                <div className="space-y-2 mb-4">
                  {hostel.amenities.slice(0, 2).map((amenity, index) => (
                    <div key={index} className="flex items-center text-gray-600 text-sm">
                      {getAmenityIcon(amenity)}
                      <span className="ml-2">{amenity}</span>
                    </div>
                  ))}
                  {hostel.amenities.length > 2 && (
                    <p className="text-xs text-gray-500">
                      +{hostel.amenities.length - 2} more amenities
                    </p>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(hostel.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {hostel.rating} ({hostel.reviews} reviews)
                  </span>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleViewDetails(hostel.id)}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredHostels.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500">
              <Search className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg mb-2">No hostels found</p>
              <p className="text-sm">Try adjusting your search criteria or filters</p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ViewHostelsPage;