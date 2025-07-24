import React, { useState } from 'react';
import { Phone, Mail, MapPin, User, X, Menu } from 'lucide-react';

interface Car {
  id: number;
  name: string;
  image: string;
  price: string;
  specs: {
    engine: string;
    power: string;
    acceleration: string;
    topSpeed: string;
    fuelType: string;
    transmission: string;
    seating: string;
    features: string[];
  };
}

const cars: Car[] = [
  {
    id: 1,
    name: "BMW 3 Series",
    image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "$150/day",
    specs: {
      engine: "2.0L TwinPower Turbo",
      power: "255 HP",
      acceleration: "0-60 mph in 5.6s",
      topSpeed: "155 mph",
      fuelType: "Premium Gasoline",
      transmission: "8-Speed Automatic",
      seating: "5 Passengers",
      features: ["Leather Seats", "Navigation System", "Premium Audio", "Bluetooth", "Climate Control"]
    }
  },
  {
    id: 2,
    name: "Mercedes-Benz C-Class",
    image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "$180/day",
    specs: {
      engine: "2.0L Turbocharged",
      power: "255 HP",
      acceleration: "0-60 mph in 5.9s",
      topSpeed: "130 mph",
      fuelType: "Premium Gasoline",
      transmission: "9G-TRONIC Automatic",
      seating: "5 Passengers",
      features: ["MBUX Infotainment", "LED Headlights", "Heated Seats", "Wireless Charging", "Active Brake Assist"]
    }
  },
  {
    id: 3,
    name: "Audi A4",
    image: "https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=800",
    price: "$165/day",
    specs: {
      engine: "2.0L TFSI Turbocharged",
      power: "248 HP",
      acceleration: "0-60 mph in 5.7s",
      topSpeed: "155 mph",
      fuelType: "Premium Gasoline",
      transmission: "CVT Automatic",
      seating: "5 Passengers",
      features: ["Virtual Cockpit", "MMI Touch", "Bang & Olufsen Audio", "Quattro AWD", "Adaptive Cruise Control"]
    }
  }
];

function CarCard({ car }: { car: Car }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full h-96 perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="relative h-64 overflow-hidden">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold">{car.name}</h3>
              <p className="text-lg font-semibold text-yellow-400">{car.price}</p>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 text-center font-medium">Click to view specifications</p>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl shadow-lg text-white p-6">
          <div className="h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-center text-yellow-400">{car.name}</h3>
            <div className="flex-1 space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="font-semibold">Engine:</span>
                  <p className="text-blue-200">{car.specs.engine}</p>
                </div>
                <div>
                  <span className="font-semibold">Power:</span>
                  <p className="text-blue-200">{car.specs.power}</p>
                </div>
                <div>
                  <span className="font-semibold">0-60 mph:</span>
                  <p className="text-blue-200">{car.specs.acceleration}</p>
                </div>
                <div>
                  <span className="font-semibold">Top Speed:</span>
                  <p className="text-blue-200">{car.specs.topSpeed}</p>
                </div>
                <div>
                  <span className="font-semibold">Fuel:</span>
                  <p className="text-blue-200">{car.specs.fuelType}</p>
                </div>
                <div>
                  <span className="font-semibold">Seating:</span>
                  <p className="text-blue-200">{car.specs.seating}</p>
                </div>
              </div>
              <div>
                <span className="font-semibold">Key Features:</span>
                <div className="mt-2 flex flex-wrap gap-1">
                  {car.specs.features.slice(0, 4).map((feature, index) => (
                    <span key={index} className="bg-blue-800 px-2 py-1 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-center text-blue-200 text-sm mt-4">Click to return</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <User size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
          <p className="text-gray-600">DivTrek Car Booking Service</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <User size={20} className="text-blue-900" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Michael Thompson</p>
              <p className="text-gray-600 text-sm">Chief Executive Officer</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Phone size={20} className="text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">+1 (555) 123-4567</p>
              <p className="text-gray-600 text-sm">24/7 Customer Support</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <Mail size={20} className="text-red-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">contact@divtrek.com</p>
              <p className="text-gray-600 text-sm">Business Inquiries</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <MapPin size={20} className="text-purple-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">123 Business District</p>
              <p className="text-gray-600 text-sm">New York, NY 10001</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            Professional car booking services since 2018
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">DivTrek</h1>
              <span className="ml-2 text-sm text-gray-600 hidden sm:inline">Premium Car Booking</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Home</a>
              <a href="#fleet" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Our Fleet</a>
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium"
              >
                Contact
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors">Home</a>
                <a href="#fleet" className="text-gray-700 hover:text-blue-900 transition-colors">Our Fleet</a>
                <button
                  onClick={() => {
                    setIsContactOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Premium Car Booking Experience</h2>
          <p className="text-xl mb-8 text-blue-200 max-w-3xl mx-auto">
            Discover luxury and performance with our curated selection of premium vehicles.
            Professional service, competitive rates, and unforgettable driving experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Book Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              View Fleet
            </button>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Fleet</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully selected collection of luxury vehicles. Click on any car to explore detailed specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">DivTrek</h3>
            <p className="text-gray-400 mb-6">Premium Car Booking Service</p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Get in Touch
            </button>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
              © 2024 DivTrek. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;
