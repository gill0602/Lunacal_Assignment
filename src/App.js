import React from "react";
import TabSection from "./components/TabSection";
import Gallery from "./components/Gallery";
import bg from "./bg.png"; // Ensure this is a dark image or solid color

function App() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`, // Ensure this image is dark or a dark solid color
      }}
    >
      {/* Overlay to make the text and content stand out */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 opacity-75"></div>

      <header className="relative z-10 text-center text-white mb-8">
        <h1 className="text-4xl font-bold pt-12">Sample Webpage</h1>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-4">
        {/* TabSection */}
        <TabSection />

        {/* Gallery with reduced space below */}
        <div className="mt-4">
          <Gallery />
        </div>
      </main>

      {/* Parallax Section with less height */}
      <div className="relative h-24 mt-4 bg-fixed bg-gradient-to-t from-gray-900 to-gray-700"></div>
    </div>
  );
}

export default App;
