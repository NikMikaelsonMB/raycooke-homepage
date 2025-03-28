import React, { useState } from 'react';
import {
  Home,
  Search,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Bed,
  Bath,
  Square,
  ChevronDown,
  Building,
  Key,
  Calculator,
  Calendar,
  Youtube,
} from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Modern City Apartment',
    price: '€2,200 per month',
    location: 'Dublin 2',
    bedrooms: 2,
    bathrooms: 2,
    size: '75 m²',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: 'Available Now',
    term: 'Minimum 12 months',
    features: ['Fully Furnished', 'All Bills Included', 'Parking Space'],
  },
  {
    id: 2,
    title: 'Luxury Docklands Rental',
    price: '€3,500 per month',
    location: 'Dublin 1',
    bedrooms: 3,
    bathrooms: 2,
    size: '110 m²',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: 'Available from March 1st',
    term: 'Minimum 12 months',
    features: ['Water View', 'Concierge', 'Gym Access'],
  },
  {
    id: 3,
    title: 'Cozy Studio Apartment',
    price: '€1,800 per month',
    location: 'Dublin 4',
    bedrooms: 1,
    bathrooms: 1,
    size: '45 m²',
    image:
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: 'Available Now',
    term: 'Flexible Terms',
    features: ['Recently Renovated', 'Pet Friendly', 'Private Balcony'],
  },
];

const services = [
  {
    title: 'Residential Sales',
    icon: <Home className="w-12 h-12 text-primary" />,
    description: 'Expert guidance through your property sale journey',
  },
  {
    title: 'Property Lettings',
    icon: <Key className="w-12 h-12 text-primary" />,
    description: 'Professional rental and property management services',
  },
  {
    title: 'Valuations',
    icon: <Calculator className="w-12 h-12 text-primary" />,
    description: 'Accurate and detailed property valuations',
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDMtMTlUMTY6MzM6NDcrMDA6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDMtMTlUMTY6MzM6NDcrMDA6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTAzLTE5VDE2OjMzOjQ3KzAwOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZjM0ZjM5LTY2ZDAtNDI4ZC1hZjY5LTNmZjFiMzA3ZjVhZiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjY5ZjM0ZjM5LTY2ZDAtNDI4ZC1h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"
                alt="RC Logo"
                className="w-12 h-12"
              />
              <span className="ml-2 text-2xl font-bold text-gray-800">
                Raycooke Lettings
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Home
              </a>
              <a
                href="https://raycooke.ie/properties/?jsf=jet-engine-maps:main_map&tax=property-enquiry:2017"
                className="text-gray-600 hover:text-blue-600"
              >
                Properties
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Services
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-gray-600">+353 1 234 5678</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Find Your Perfect Rental
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Dublin's premier letting agency, offering exceptional service and
            expertise in residential and commercial rentals.
          </p>

          {/* Search Bar */}
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <div className="mt-1 relative">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Enter location"
                  />
                  <MapPin className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Monthly Rent
                </label>
                <select className="w-full px-4 py-2 border rounded-md mt-1">
                  <option>Any</option>
                  <option>Up to €1,500</option>
                  <option>€1,500 - €2,000</option>
                  <option>€2,000 - €3,000</option>
                  <option>€3,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Property Type
                </label>
                <select className="w-full px-4 py-2 border rounded-md mt-1">
                  <option>Any</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Studio</option>
                  <option>Share</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Rental Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    {property.available}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {property.title}
                  </h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">
                    {property.price}
                  </p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {property.location}
                  </div>
                  <div className="flex justify-between text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      <span>{property.size}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{property.term}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {property.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Schedule Viewing
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B1F3B] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-x-8">
            {/* Column 1 - Main Links */}
            <div>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white hover:text-blue-300">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-300">
                    Property Valuation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-300">
                    Report a Repair
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-300">
                    Mortgages
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 - About Links */}
            <div>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white hover:text-blue-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-300">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-300">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-300">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Social Links */}
            <div className="col-span-2 flex justify-end space-x-6">
              <a href="#" className="text-white hover:text-blue-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-300">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">Raycooke Lettings</div>
              <div className="text-sm text-gray-400">
                PSRA Licence Number 002307
              </div>
            </div>
            <div className="mt-6 flex space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;