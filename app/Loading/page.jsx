import React from 'react';

const Loading = ({ progress }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 dark:bg-gray-900">
      <div className="text-center relative">
        {/* Outer container for the loader */}
        <div className="relative h-32 w-32 mb-4">
          {/* The spinning loader */}
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 absolute top-0 left-0"></div>
          {/* Fixed progress text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-white dark:text-gray-200">{progress}%</span>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-white dark:text-gray-200">Loading...</h2>
        <p className="text-gray-200 dark:text-gray-400">Please wait a moment</p>
      </div>
    </div>
  );
};

export default Loading;
