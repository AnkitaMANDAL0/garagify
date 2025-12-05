import React from 'react';
import { ArrowRight, MapPin, Calendar, MessageCircle, Star, Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mt-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mb-48"></div>
        </div>
        <div className="container mx-auto text-center px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">GarageConnect</h1>
          <p className="text-xl font-light max-w-2xl mx-auto">The ultimate interface between you and professional garage services</p>
          <div className="mt-8">
            <button className="bg-white text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 -mt-16">
        {/* About Card */}
        <section className="bg-white rounded-xl shadow-xl p-8 mb-16 transform hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Simplifying Garage Services</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            GarageConnect revolutionizes how you interact with automotive services. Our platform creates a seamless interface between drivers and professional garages, making vehicle maintenance and repair more accessible than ever before.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Star className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Top-Rated Garages</h3>
              <p className="text-gray-600">Access only verified and highly-rated garage services in your area.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                
              </div>
              <h3 className="font-bold text-lg mb-2">Expert Service</h3>
              <p className="text-gray-600">Connect with skilled mechanics who specialize in your vehicle type.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Guaranteed Quality</h3>
              <p className="text-gray-600">All services backed by our satisfaction guarantee policy.</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:translate-y-[-8px] transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center mb-6 mx-auto">1</div>
              <h3 className="font-bold text-xl mb-4 text-center">Enter Your Location</h3>
              <p className="text-gray-600 text-center">
                Simply provide your current location or the area where you need service.
              </p>
              <div className="mt-6 flex justify-center">
                <MapPin className="text-blue-600 w-10 h-10" />
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:translate-y-[-8px] transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center mb-6 mx-auto">2</div>
              <h3 className="font-bold text-xl mb-4 text-center">Find Nearest Garages</h3>
              <p className="text-gray-600 text-center">
                Browse through nearby garages sorted by distance, ratings, and specialties.
              </p>
              <div className="mt-6 flex justify-center">
                <Calendar className="text-blue-600 w-10 h-10" />
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:translate-y-[-8px] transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center mb-6 mx-auto">3</div>
              <h3 className="font-bold text-xl mb-4 text-center">Apply & Connect</h3>
              <p className="text-gray-600 text-center">
                Submit your service request directly to your preferred garage and get connected.
              </p>
              <div className="mt-6 flex justify-center">
                <MessageCircle className="text-blue-600 w-10 h-10" />
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <button className="bg-blue-800 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg flex items-center">
              Find a Garage Now <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">What Our Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-800 font-bold">JM</span>
                </div>
                <div>
                  <h3 className="font-bold">James Miller</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-300" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic">"Found a great garage just 5 minutes from my home that I didn't even know existed. The whole process was so smooth!"</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-800 font-bold">SK</span>
                </div>
                <div>
                  <h3 className="font-bold">Sarah Kim</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-300" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic">"As someone who knows nothing about cars, this app made finding a trustworthy mechanic so much easier!"</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-800 font-bold">DP</span>
                </div>
                <div>
                  <h3 className="font-bold">David Parker</h3>
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-300" />
                    ))}
                    <Star className="w-4 h-4 text-yellow-300 opacity-40" />
                  </div>
                </div>
              </div>
              <p className="italic">"Quick responses from garages and the ability to compare prices saved me both time and money."</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who have simplified their garage experience with GarageConnect.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-800 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg">
              Download App
            </button>
            <button className="bg-white text-blue-800 border-2 border-blue-800 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 shadow-lg">
              Learn More
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">GarageConnect</h3>
              <p className="text-blue-200">Bridging the gap between drivers and professional garage services.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition">Home</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition">About</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition">Services</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-blue-200">support@garageconnect.com</li>
                <li className="text-blue-200">(555) 123-4567</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Download</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-white text-blue-900 px-3 py-2 rounded-lg hover:bg-blue-100 transition">
                  App Store
                </a>
                <a href="#" className="bg-white text-blue-900 px-3 py-2 rounded-lg hover:bg-blue-100 transition">
                  Google Play
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>© 2025 GarageConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;