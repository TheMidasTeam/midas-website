import React from 'react';

export default function Components() {

  return (
    <div className="grid grid-cols-2 gap-6 p-10 min-h-screen">
      {/* Left Container */}
      <div className="rounded-lg p-5 flex flex-col items-end gap-10 justify-center min-h-64">
        <div className="bg-[#191E23] rounded-3xl shadow-lg p-6 h-56 w-96 grid-cols-1 ">{/*Small Comp 1*/}
          <div className="flex items-start text-3xl font-bold text-white right-72 font-montserrat">
            Grow
          </div>
          <div>
          </div>
        </div>
        <div className="bg-[#191E23] rounded-3xl shadow-lg p-6 grid-cols-1 h-96 w-96">{/*Large Comp 1*/}
          <div className="flex items-start text-3xl font-bold text-white right-72 font-montserrat">
            Integrate
          </div>
          <div>
          </div>
        </div>
      </div>

      {/* Right Container */}
      <div className="rounded-3xl p-5 flex flex-col items-start gap-10 justify-center min-h-64">
        <div className="bg-[#191E23] rounded-3xl shadow-lg p-6 grid-cols-1 h-96 w-96">{/*Large Comp 2*/}
          <div className="flex items-start text-3xl font-bold text-white right-72 font-montserrat">
            Connect
          </div>
          <div>
          </div>
        </div>
        <div className="bg-[#191E23] rounded-3xl shadow-lg p-6 grid-cols-1 h-56 w-96">{/*Small Comp 2*/}
          <div className="flex items-start text-3xl font-bold text-white right-72 font-montserrat">
            Stand Out
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}