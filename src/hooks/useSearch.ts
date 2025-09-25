import { useState, useMemo } from 'react';

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

export const useSearch = (hostels: Hostel[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const filteredHostels = useMemo(() => {
    let filtered = hostels.filter(hostel => {
      // Text search
      const matchesSearch = searchTerm === '' || 
        hostel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hostel.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hostel.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hostel.amenities.some(amenity => 
          amenity.toLowerCase().includes(searchTerm.toLowerCase())
        );

      // Price range filter
      const matchesPrice = hostel.price >= priceRange[0] && hostel.price <= priceRange[1];

      // Amenities filter
      const matchesAmenities = selectedAmenities.length === 0 || 
        selectedAmenities.every(amenity => 
          hostel.amenities.some(hostelAmenity => 
            hostelAmenity.toLowerCase().includes(amenity.toLowerCase())
          )
        );

      return matchesSearch && matchesPrice && matchesAmenities;
    });

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep original order for 'all'
        break;
    }

    return filtered;
  }, [hostels, searchTerm, sortBy, priceRange, selectedAmenities]);

  return {
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    priceRange,
    setPriceRange,
    selectedAmenities,
    setSelectedAmenities,
    filteredHostels,
    resultsCount: filteredHostels.length
  };
};