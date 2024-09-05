import React, { useState } from "react";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("AboutMe");

  const tabs = [
    { name: "About Me", value: "AboutMe" },
    { name: "Experiences", value: "Experiences" },
    { name: "Recommended", value: "Recommended" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "AboutMe":
        return (
          <p className="transition-opacity duration-500 ease-in-out opacity-100">
            Hello! I'm Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            <br />
            <br />
            I was born and raised in Albany, NY and have been living in Santa Clara for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella.
            <br />
            <br />
            Both of them are just starting school, so my calendar is usually blocked between 9–10 AM.
            <br />
            <br />
            This is a sample bio section, and you can keep adding more text here to see how the scrollbar works as the content grows...
          </p>
        );
      case "Experiences":
        return <p className="transition-opacity duration-500 ease-in-out opacity-100">Here are my experiences over the years...</p>;
      case "Recommended":
        return <p className="transition-opacity duration-500 ease-in-out opacity-100">Recommended products or services...</p>;
      default:
        return null;
    }
  };

  return (
    <div className="mt-8 p-4 rounded-lg shadow-lg bg-gray-900 bg-opacity-80 text-white w-full max-w-4xl mx-auto sm:px-6 px-4">
      {/* Darker Background Box for the Tab Buttons */}
      <div className="flex flex-col sm:flex-row justify-between p-4 bg-gray-800 bg-opacity-90 rounded-lg mb-4 shadow-inner">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 text-center w-full sm:mx-4 mx-0 mb-2 sm:mb-0 rounded-lg text-sm sm:text-base ${
              activeTab === tab.value
                ? "bg-blue-700 text-white shadow-md transform scale-105"
                : "bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white"
            } transition-all duration-300 ease-in-out`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Scrollable content container */}
      <div
        className="overflow-y-auto sm:h-72 h-48 p-4 border border-gray-600 rounded-md bg-gray-800 bg-opacity-60"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#4A5568 #2D3748" }}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default TabSection;
