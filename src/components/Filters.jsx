import React, { useState } from 'react';

const Filters = ({ filters, onFilterChange }) => {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="w-full lg:w-1/2">
      {/* Toggle Button */}
      <div className="mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="text-gray-600 text-sm font-medium border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition"
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="space-y-6 border border-gray-200 rounded-xl p-5 shadow-sm transition-opacity duration-300">
          {/* Shape */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-3 tracking-wide">Shape</h3>
            <div className="space-y-2">
              {["Round", "Square", "Cat-Eye", "Rectangle"].map((shape) => (
                <label key={shape} className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.shape.includes(shape)}
                    onChange={() => onFilterChange("shape", shape)}
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 rounded-md"
                  />
                  {shape}
                </label>
              ))}
            </div>
          </div>

          {/* Gender */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-3 tracking-wide">Gender</h3>
            <div className="space-y-2">
              {["Women", "Men", "Kids"].map((gender) => (
                <label key={gender} className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.gender.includes(gender)}
                    onChange={() => onFilterChange("gender", gender)}
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 rounded-md"
                  />
                  {gender}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
