// components/Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 dark:bg-gray-900">
      <div className="text-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
        <h2 className="text-xl font-semibold text-white dark:text-gray-200">Loading...</h2>
        <p className="text-gray-200 dark:text-gray-400">Please wait a moment</p>
      </div>
    </div>
  );
};

export default Loading;
