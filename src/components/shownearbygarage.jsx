import React, { useContext, useState, useEffect } from 'react';
import { Clock, DollarSign, Navigation, Star, Info, MapPin, Calendar, ChevronDown, ChevronUp, Heart, Filter, Search } from 'lucide-react';
import { GaragesContext } from '../../contexts/GaragesContext';

const GarageList = () => {
  const { garages, error, getUserLocation } = useContext(GaragesContext);
  const [selectedFilter, setSelectedFilter] = useState('distance');
  const [sortedGarages, setSortedGarages] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [searchTerm, setSearchTerm] = useState('');

  // Calculate exact distance in km
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    if (!lat1 || !lon1 || !lat2 || !lon2) return "Unknown";
    
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(2);
  };

  const toggleFavorite = (id) => {
    setFavoriteIds(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const toggleExpanded = (id) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  useEffect(() => {
    if (!garages || !garages.length) return;
    
    const processed = garages.map(garage => {
      const distanceValue = calculateDistance(30.7333, 76.7794, garage.lat, garage.lon);
      
      return {
        ...garage,
        name: garage.tags?.name || "Garagify Store", // Default name
        price: garage.price || "$10.00",
        priceValue: parseFloat((garage.price || "$10.00").replace(/[^0-9.]/g, '')),
        distanceValue: distanceValue === "Unknown" ? 9999 : parseFloat(distanceValue),
        distanceDisplay: distanceValue === "Unknown" ? "Unknown" : `${distanceValue} km`,
        rating: garage.rating || (Math.random() * 2 + 3).toFixed(1), // Random rating between 3 and 5
        address: garage.tags?.address || "123 Main Street",
        available: Math.floor(Math.random() * 10) + 1, // Random available spots
      };
    });

    // Apply filters
    let filtered = processed.filter(garage => {
      const matchesSearch = garage.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           garage.address.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = garage.priceValue >= priceRange[0] && garage.priceValue <= priceRange[1];
      
      return matchesSearch && matchesPrice;
    });

    // Sort filtered garages
    const sorted = [...filtered].sort((a, b) => {
      if (selectedFilter === 'distance') {
        return a.distanceValue - b.distanceValue;
      } else if (selectedFilter === 'price') {
        return a.priceValue - b.priceValue;
      } else {
        return parseFloat(b.rating) - parseFloat(a.rating);
      }
    });
    
    setSortedGarages(sorted);
  }, [garages, selectedFilter, searchTerm, priceRange]);

  if (error) {
    return <div className="text-red-600">Error loading garages: {error}</div>;
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-8 text-center py-6">
        <h1 className="text-4xl font-bold text-white mb-2">Garagify</h1>
        <p className="text-blue-400 text-lg">Find and book nearby Garages</p>
      </header>
      
      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden">
        {/* Main Content */}
        <div className="bg-black bg-opacity-70 backdrop-blur-sm border border-gray-800 rounded-xl shadow-2xl p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-white">Nearby Garages</h2>
            <div className="flex gap-2 items-center">
              <button className="text-xs md:text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md">
                My Location
              </button>
              <button className="text-xs md:text-sm bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded-md">
                Change Location
              </button>
            </div>
          </div>
          
          {/* Search and Filter Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by name or address..." 
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded-md pl-10 pr-4 py-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            {/* Filter toggle */}
            <div>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md w-full"
              >
                <Filter className="h-4 w-4" />
                Filters
                {showFilters ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
              </button>
            </div>
          </div>
          
          {/* Expanded Filter Panel */}
          {showFilters && (
            <div className="mt-3 p-4 mb-6 bg-gray-900 rounded-md">
              <h3 className="font-medium text-lg mb-3 text-blue-400">Refine Results</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                  <div className="flex gap-4">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full accent-blue-600"
                    />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-blue-600"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Opening Hours</label>
                  <div className="grid grid-cols-2 gap-2">
                    <select className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-2">
                      <option>Any time</option>
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Evening</option>
                    </select>
                    <select className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-2">
                      <option>Any day</option>
                      <option>Weekdays</option>
                      <option>Weekend</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Sort options */}
          <div className="grid grid-cols-3 gap-2 md:flex md:gap-3 mb-6">
            <button 
              onClick={() => setSelectedFilter('distance')} 
              className={`px-2 md:px-4 py-2 rounded-md text-xs md:text-sm ${selectedFilter === 'distance' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-white'}`}>
              <Navigation className="h-3 w-3 md:h-4 md:w-4 inline mr-1" /> Nearest
            </button>
            <button 
              onClick={() => setSelectedFilter('price')} 
              className={`px-2 md:px-4 py-2 rounded-md text-xs md:text-sm ${selectedFilter === 'price' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-white'}`}>
              <DollarSign className="h-3 w-3 md:h-4 md:w-4 inline mr-1" /> Cheapest
            </button>
            <button 
              onClick={() => setSelectedFilter('rating')} 
              className={`px-2 md:px-4 py-2 rounded-md text-xs md:text-sm ${selectedFilter === 'rating' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-white'}`}>
              <Star className="h-3 w-3 md:h-4 md:w-4 inline mr-1" /> Top Rated
            </button>
          </div>
          
          {/* Results section */}
          <div>
            <h3 className="text-xl font-medium text-white mb-4">Available Garages</h3>
            
            {sortedGarages.length === 0 ? (
              <div className="bg-gray-900 rounded-lg p-8 text-center">
                <p className="text-gray-400 mb-2">No garages found matching your criteria.</p>
                <button onClick={() => {setSearchTerm(''); setPriceRange([0, 100]);}} className="text-blue-400 hover:text-blue-300">
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedGarages.map(garage => (
                  <div key={garage.id} className="border border-gray-800 p-4 rounded-lg bg-gray-900 hover:border-blue-600 transition-all">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-lg text-white">{garage.name}</h4>
                        <div className="flex items-center text-sm">
                          <Star className="h-3 w-3 text-yellow-400 mr-1" fill="currentColor" />
                          <span className="text-yellow-400 mr-2">{garage.rating}</span>
                          <span className="text-blue-400">Available: {garage.available} spots</span>
                        </div>
                        <p className="text-green-500 text-xs font-medium mt-1">Open Now - Closes in 9 hours</p>
                      </div>
                      <button 
                        onClick={() => toggleFavorite(garage.id)}
                        className="p-2 rounded-full hover:bg-gray-800"
                      >
                        <Heart 
                          className={`h-5 w-5 ${favoriteIds.includes(garage.id) ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} 
                        />
                      </button>
                    </div>
                    
                    <div className="flex justify-between mt-3 text-sm">
                      <p className="text-gray-300 flex items-center"><MapPin className="h-3 w-3 mr-1" /> {garage.distanceDisplay}</p>
                      <p className="text-gray-300 flex items-center"><DollarSign className="h-3 w-3 mr-1" /> {garage.price}/hr</p>
                    </div>
                    
                    {expandedId === garage.id && (
                      <div className="mt-3 pt-3 border-t border-gray-800">
                        <p className="text-gray-300 text-sm mb-2"><MapPin className="h-3 w-3 inline mr-1" /> {garage.address}</p>
                        <p className="text-gray-300 text-sm">Covered parking with 24/7 security and easy access.</p>
                        
                        <div className="grid grid-cols-7 gap-1 mt-3">
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                            <div key={day} className="bg-gray-800 p-1 rounded text-center">
                              <p className="text-xs text-gray-400">{day}</p>
                              <p className="text-xs">8-5</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-4 flex gap-2">
                      <button className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-xs md:text-sm font-medium">Book Now</button>
                      <button 
                        onClick={() => toggleExpanded(garage.id)}
                        className="p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
                      >
                        {expandedId === garage.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      <button className="flex-1 bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 text-xs md:text-sm font-medium">View Details</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-12 max-w-6xl mx-auto text-center pb-8">
        <p className="text-gray-500 text-sm">© 2025 Garagify - Smart Parking Solutions</p>
      </footer>
    </div>
  );
};

export default GarageList;