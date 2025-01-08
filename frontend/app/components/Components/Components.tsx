import React from 'react';

export default function Components() {

  return (
    <div className="grid grid-cols-2 gap-6 p-10 min-h-screen">
      {/* Left Container */}
      <div className="rounded-lg p-5 flex flex-col items-end gap-20 justify-center min-h-64">
        <div className="bg-gray-600 rounded-3xl shadow-lg p-5 flex items-center justify-center h-56 w-4/6">
        </div>
        <div className="bg-gray-600 rounded-3xl shadow-lg p-5 flex items-center justify-center h-96 w-4/6">
        </div>
      </div>

      {/* Right Container */}
      <div className="rounded-3xl p-5 flex flex-col items-start gap-20 justify-center min-h-64">
        <div className="bg-gray-600 rounded-3xl shadow-lg p-5 flex items-center justify-center h-96 w-4/6">
        </div>
        <div className="bg-gray-600 rounded-3xl shadow-lg p-5 flex items-center justify-center h-56 w-4/6">
        </div>
      </div>
    </div>
  );
}