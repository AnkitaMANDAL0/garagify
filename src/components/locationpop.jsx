
import { useState } from "react";

const LocationPopup = () => {
    console.log("inlocationpop");
  const [showPopup, setShowPopup] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setShowPopup(false); // Close the popup after getting location
        },
        (error) => {
          setError("Location access denied!");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="relative">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-4">Enable Location</h2>
            <p className="mb-4">We need your location to show nearby stores.</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={getLocation}
            >
              Allow Location
            </button>
          </div>
        </div>
      )}

      {location && (
        <p className="text-green-600">
          Your Location: {location.latitude}, {location.longitude}
        </p>
      )}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default LocationPopup;
