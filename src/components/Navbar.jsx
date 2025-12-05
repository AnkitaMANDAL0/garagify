import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { X, Menu } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState(null);

  // Function to get live location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          alert(`📍 Your Location: ${position.coords.latitude}, ${position.coords.longitude}`);
        },
        () => {
          alert("❌ Location access denied!");
        }
      );
    } else {
      alert("❌ Geolocation is not supported by this browser.");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center ">
            <Link to="/" className="text-2xl font-bold text-blue-500 "> Garagify</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-indigo-300 font-medium">Home</Link>
            <Link to="/about" className="text-white hover:text-indigo-300 font-medium">About</Link>
            <Link to="/Contact" className="text-white hover:text-indigo-300 font-medium">Contact</Link>
            <Link to="/Contact" className="text-white hover:text-indigo-300 font-medium">Track</Link>
          
          
          
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-indigo-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 pt-2 pb-4 px-4">
          <Link to="/" className="block py-2 text-white hover:text-indigo-300 font-medium">Home</Link>
          <Link to="/about" className="block py-2 text-white hover:text-indigo-300 font-medium">About</Link>
          <Link to="/Contact" className="block py-2 text-white hover:text-indigo-300 font-medium">Contact</Link>
          <Link to="/Track" className="block py-2 text-white hover:text-indigo-300 font-medium">Track</Link>
        
         
        
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
