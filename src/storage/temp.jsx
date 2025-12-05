import { useState } from "react";
import { X } from "lucide-react";

export default function Navbarr() {
  const [showBatteryForm, setShowBatteryForm] = useState(false);
  const [showParkingForm, setShowParkingForm] = useState(false);

  return (
    <section className="p-6">
      {/* Battery Service Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Battery Services</h3>
        <button
          onClick={() => setShowBatteryForm(true)}
          className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Request Battery Service
        </button>
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

      {/* Parking Space Section */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Nearby Parking Spaces</h3>
        <button
          onClick={() => setShowParkingForm(true)}
          className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
        >
          Check Nearby Parking
        </button>
        {showParkingForm && (
          <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-inner">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">Find Parking</h4>
              <X className="cursor-pointer text-gray-500 hover:text-gray-700" onClick={() => setShowParkingForm(false)} />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 mb-2">Enter Your Location</label>
              <input type="text" placeholder="Enter your address" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
              Search Parking
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
