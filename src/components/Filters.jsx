import React, { useState } from 'react';

const Filters = ({ filters, onFilterChange }) => {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-5 space-y-6 transition-all duration-500 ease-in-out">
        {/* Toggle Button - Aligned inside the card */}
        <div className="flex justify-end">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md transition"
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="space-y-6">
            {/* Shape */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3 tracking-wide">Shape</h3>
              <div className="space-y-2">
                {["Round", "Square", "Cat-Eye", "Rectangle"].map((shape) => (
                  <label
                    key={shape}
                    className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer hover:text-indigo-600 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={filters.shape.includes(shape)}
                      onChange={() => onFilterChange("shape", shape)}
                      className="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-2 focus:ring-indigo-500 rounded-md"
                    />
                    <span>{shape}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Gender */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3 tracking-wide">Gender</h3>
              <div className="space-y-2">
                {["Women", "Men", "Kids"].map((gender) => (
                  <label
                    key={gender}
                    className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer hover:text-indigo-600 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={filters.gender.includes(gender)}
                      onChange={() => onFilterChange("gender", gender)}
                      className="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-2 focus:ring-indigo-500 rounded-md"
                    />
                    <span>{gender}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
