import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
export const GaragesContext = createContext();

export const GaragesProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [garages, setGarages] = useState([]);
  const [error, setError] = useState(null);

  // Function to get the user's current location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          fetchNearbyGarages(latitude, longitude);
          console.log("User Location:", latitude, longitude);
        },
        () => setError("Location access denied!")
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  // Function to fetch nearby garages from the backend
  const fetchNearbyGarages = async (lat, lng) => {
    try {
      console.log("Fetching garages for:", lat, lng);
      const response = await axios.get(`http://localhost:5000/nearby-garages?lat=${lat}&lng=${lng}`);
      
      if (response.data && Array.isArray(response.data)) {
        setGarages(response.data);
      } else {
        throw new Error("Invalid API response format");
      }
    } catch (err) {
      console.error("Fetch Error:", err.message);
      setError("Failed to load nearby garages.");
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <GaragesContext.Provider value={{ location, garages, error, getUserLocation }}>


      {children}
    </GaragesContext.Provider>
  );
};
