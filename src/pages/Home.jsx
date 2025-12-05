import React, { useState } from 'react';
import { MapPin, Droplet, Battery, Info, ChevronRight, Menu, X } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFuelForm, setShowFuelForm] = useState(false);
  const [showBatteryForm, setShowBatteryForm] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
    

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            className="absolute w-full h-full object-cover"
          >
            <source src="/api/placeholder/400/320" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-20">
          <div className="text-center md:text-left md:w-2/3">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
          <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">Your Car's Best Friend,</span> 
              <br />One Click Away
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200">
              Connect with nearby garages, order fuel, and get battery services - all from one place.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6">
              <button
                className="group bg-white text-indigo-900 px-8 py-4 rounded-full font-medium flex items-center justify-center transition-all duration-300 hover:bg-indigo-600 hover:text-white"
                onClick={() => navigate("/shownearbygarages")}
              >
                <MapPin className="mr-2 transition-all group-hover:scale-110" size={20} />
                Find Nearby Garages
              </button>
             
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
              <p className="text-sm mb-2">Scroll Down</p>
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Modern Card Design */}
      <section className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            We provide top-quality automobile services at your location, ensuring convenience and reliability.
          </p>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Fuel Delivery Section */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-4 rounded-xl w-16 h-16 flex items-center justify-center">
                  <Droplet className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Fuel Delivery</h3>
              </div>
              <button 
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                onClick={() => setShowFuelForm(!showFuelForm)}
              >
                Book
              </button>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-600">
              Ran out of fuel? No worries! We deliver high-quality fuel directly to your location, 
              ensuring you’re never stranded on the road. Choose from regular, premium, or diesel options.
            </p>

            {/* Fuel Form - Hidden Until Click */}
            {showFuelForm && (
              <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-inner">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold">Book Fuel Delivery</h4>
                  <X className="cursor-pointer text-gray-500 hover:text-gray-700" onClick={() => setShowFuelForm(false)} />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 mb-2">Fuel Type</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500">
                    <option>Regular Unleaded</option>
                    <option>Premium Unleaded</option>
                    <option>Diesel</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 mb-2">Quantity (Liters)</label>
                  <input type="number" placeholder="Enter quantity" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 mb-2">Delivery Address</label>
                  <input type="text" placeholder="Enter your address" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
                  Order Now
                </button>
              </div>
            )}
          </div>

          {/* Battery Services Section */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-4 rounded-xl w-16 h-16 flex items-center justify-center">
                  <Battery className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Battery Services</h3>
              </div>
              <button 
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                onClick={() => setShowBatteryForm(!showBatteryForm)}
              >
                Book
              </button>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-600">
              Facing battery issues? Whether you need a jump-start, battery replacement, or testing, 
              our experts will get your vehicle running smoothly in no time.
            </p>

            {/* Battery Form - Hidden Until Click */}
            {showBatteryForm && (
              <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-inner">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold">Request Battery Service</h4>
                  <X className="cursor-pointer text-gray-500 hover:text-gray-700" onClick={() => setShowBatteryForm(false)} />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 mb-2">Service Type</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500">
                    <option>Battery Replacement</option>
                    <option>Jump Start</option>
                    <option>Battery Testing</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 mb-2">Vehicle Make & Model</label>
                  <input type="text" placeholder="E.g., Toyota Camry 2020" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 mb-2">Your Location</label>
                  <input type="text" placeholder="Enter your address" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
                  Request Service
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
     
      {/* About Section with Modern Design */}
      <section id="about" className="py-24 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">About GarageConnect</span>
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">We bridge the gap between vehicle owners and service providers. Our platform makes it easy to find and connect with garages and get essential services like fuel delivery and battery replacement.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-4">
                  <Info className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">Our Mission</h3>
              <p className="text-gray-600 text-center">To simplify vehicle maintenance and emergency services by connecting users with the right service providers instantly.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-4">
                  <Info className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">Our Network</h3>
              <p className="text-gray-600 text-center">We've partnered with hundreds of qualified garages and service providers across the country to ensure reliable service.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-4">
                  <Info className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">Our Promise</h3>
              <p className="text-gray-600 text-center">Quality service, transparent pricing, and customer satisfaction are at the heart of everything we do.</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a href="#contact" className="inline-flex items-center text-white bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-full font-medium transition-all duration-300">
              Contact Us <ChevronRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer with Modern Design */}
      <footer id="contact" className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">GarageConnect</h3>
              <p className="text-gray-300">Connecting you with the best garage services, fuel delivery, and battery services.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-xl mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-300">Home</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-all duration-300">Services</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-all duration-300">About Us</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-all duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-xl mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="text-gray-300">Email: anamikarawat2601@gmail.com</li>
                <li className="text-gray-300">Phone: (123) 456-7890</li>
                <li className="text-gray-300">Address: 123 Service St, Auto City</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-xl mb-6">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </a>
                <a href="#" className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.34.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.087-.745.084-.73.084-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.833 2.806 1.304 3.49.997.108-.775.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.905-.015 3.3 0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white border-opacity-20 text-center text-gray-300">
            <p>&copy; 2025 GarageConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;