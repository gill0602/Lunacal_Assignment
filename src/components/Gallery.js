import React, { useState } from "react";
import { FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([
    { id: 1, url: `${process.env.PUBLIC_URL}/img1.jpg` },
    { id: 2, url: `${process.env.PUBLIC_URL}/img2.jpg` },
    { id: 3, url: `${process.env.PUBLIC_URL}/img3.jpg` },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => [
          ...prevImages,
          { id: prevImages.length + 1, url: reader.result },
        ]);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to go to the previous image
  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  // Function to go to the next image
  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="p-4 bg-gray-900 bg-opacity-90 rounded-lg shadow-xl mt-8 max-w-4xl mx-auto">
      {/* Title and Upload Section */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl text-white font-semibold">Gallery</h3>
        <label
          htmlFor="imageUpload"
          className="flex items-center cursor-pointer text-blue-400 hover:text-blue-500"
        >
          <span className="mr-2">Add Image</span>
          <FaPlus />
        </label>
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </div>

      {/* Image Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={goToPreviousImage}
          className="text-blue-400 hover:text-blue-500 p-2 rounded-md focus:outline-none"
        >
          <FaChevronLeft size={24} />
        </button>
        <div className="transition-transform duration-500 ease-in-out w-72 h-72 flex justify-center items-center relative">
          {/* Main Image with Sliding Transition */}
          {images.map((img, index) => (
            <img
              key={img.id}
              src={img.url}
              alt={`Gallery ${img.id}`}
              className={`absolute w-full h-full object-cover rounded-md shadow-md transition-opacity duration-500 ease-in-out ${
                index === currentIndex
                  ? "opacity-100"
                  : "opacity-0" // Hide the non-active images
              }`}
            />
          ))}
        </div>
        <button
          onClick={goToNextImage}
          className="text-blue-400 hover:text-blue-500 p-2 rounded-md focus:outline-none"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Thumbnails Section */}
      <div className="flex justify-center items-center space-x-4">
        {/* Previous Thumbnail */}
        <div className="w-16 h-16">
          <img
            src={images[(currentIndex - 1 + images.length) % images.length]?.url}
            alt={`Gallery Thumbnail ${currentIndex - 1}`}
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>

        {/* Current Thumbnail (Highlighted) */}
        <div className="w-16 h-16 border-2 border-blue-500">
          <img
            src={images[currentIndex]?.url}
            alt={`Gallery Thumbnail ${currentIndex}`}
            className="w-full h-full object-cover rounded-md shadow-lg"
          />
        </div>

        {/* Next Thumbnail */}
        <div className="w-16 h-16">
          <img
            src={images[(currentIndex + 1) % images.length]?.url}
            alt={`Gallery Thumbnail ${currentIndex + 1}`}
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
