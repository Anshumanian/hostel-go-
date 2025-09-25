import React from 'react';
import { Filter, X, Sliders } from 'lucide-react';

interface SearchFiltersProps {
  sortBy: string;
  setSortBy: (value: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedAmenities: string[];
  setSelectedAmenities: (amenities: string[]) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  sortBy,
  setSortBy,
  priceRange,
  setPriceRange,
  selectedAmenities,
  setSelectedAmenities,
  isOpen,
  onToggle
}) => {
  const amenitiesList = [
    'Transport',
    '24/7 Security',
    'Free WiFi',
    'All Meals',
    'Laundry',
    'Gym',
    'AC',
    'Parking'
  ];

  const handleAmenityToggle = (amenity: string) => {
    setSelectedAmenities(
      selectedAmenities.includes(amenity)
        ? selectedAmenities.filter(a => a !== amenity)
        : [...selectedAmenities, amenity]
    );
  };

  const clearFilters = () => {
    setSortBy('all');
    setPriceRange([0, 200000]);
    setSelectedAmenities([]);
  };

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <Sliders className="h-4 w-4" />
        <span>Filters</span>
        {(sortBy !== 'all' || selectedAmenities.length > 0 || priceRange[0] > 0 || priceRange[1] < 200000) && (
          <span className="bg-indigo-600 text-white text-xs rounded-full px-2 py-1">
            {[
              sortBy !== 'all' ? 1 : 0,
              selectedAmenities.length,
              (priceRange[0] > 0 || priceRange[1] < 200000) ? 1 : 0
            ].reduce((a, b) => a + b, 0)}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={clearFilters}
                  className="text-sm text-indigo-600 hover:text-indigo-700"
                >
                  Clear all
                </button>
                <button
                  onClick={onToggle}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Sort By */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range (₹/year)
              </label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="w-full border border-gray-300 rounded px-3 py-1 text-sm"
                    placeholder="Min"
                  />
                  <span className="text-gray-500">to</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 200000])}
                    className="w-full border border-gray-300 rounded px-3 py-1 text-sm"
                    placeholder="Max"
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="5000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>

            {/* Amenities */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amenities
              </label>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {amenitiesList.map((amenity) => (
                  <label key={amenity} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedAmenities.includes(amenity)}
                      onChange={() => handleAmenityToggle(amenity)}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;