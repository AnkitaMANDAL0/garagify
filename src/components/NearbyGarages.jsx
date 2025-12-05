import { useState, useEffect } from "react";
import axios from "axios";

const NearbyGarages = () => {
  const [location, setLocation] = useState(null);
  const [garages, setGarages] = useState([]); // Ensure it's initialized as an empty array
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
        (error) => {
          setError("Location access denied!");
        }
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
              console.log(response.data);
              
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
    <div>
      <h2>Nearby Garages</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {garages && garages.length > 0 ? (
        <ul>
          {garages.map((garage, index) => (
            <li key={garage.place_id || index}>
              <strong>{garage.tags.name || "Unnamed Garage"}</strong> - {garage.lat + garage.lon}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading nearby garages...</p>
      )}
    </div>
  );
};

export default NearbyGarages;
