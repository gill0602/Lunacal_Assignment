import { useState } from 'react';
import { Menu, User, Image, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('About Me');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const tabs = ['About Me', 'Experiences', 'Recommended'];
  const images = ['/api/placeholder/300/200', '/api/placeholder/300/200', '/api/placeholder/300/200'];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="flex justify-between items-center p-4 bg-gray-800">
        <Menu className="w-6 h-6" />
        <h1 className="text-xl font-bold">Sample</h1>
        <User className="w-6 h-6" />
      </header>

      <main className="p-4 space-y-6">
        <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
          <div className="flex space-x-2 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-full ${
                  activeTab === tab ? 'bg-blue-600' : 'bg-gray-700'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="text-sm">
            {activeTab === 'About Me' && (
              <p>
                Hello! I'm Dave, your sales rep here from Salesforce. I've been
                working at this awesome company for 3 years now.
                <br /><br />
                I was born and raised in Albany, NY & have been living in Santa
                Carla for the past 10 years my wife Tiffany and my 4 year old twin
                daughters- Emma and Ella. Both of them are just starting school,
                so my calendar is usually blocked between 9-10 AM.
              </p>
            )}
            {/* Add content for other tabs as needed */}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Gallery</h2>
          <div className="relative">
            <img
              src={images[currentImageIndex]}
              alt={`Gallery image ${currentImageIndex + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-1"
              onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-1"
              onClick={() => setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            + Add Image
          </button>
        </div>
      </main>
    </div>
  );
}