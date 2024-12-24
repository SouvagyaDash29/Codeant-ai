import React from "react";
import Plus from "../../Assets/Plus";
import Refresh from "../../Assets/Refresh";

const Header = () => {

  return (
    <>
      {/* sidebar for mobile View */}
     
      

      <div className="p-6 ">
        <div className="flex justify-between max-sm:flex-col ">
          <div className="">
            <h1 className="text-xl font-inter font-semibold">Repositories</h1>
            <h5 className="text-sm text-gray-700 ">33 total repositories</h5>
          </div>
          {/* <div className="drop-shadow-sm flex gap-3.5 text-sm max-sm:mt-4"> */}
          <div className="flex gap-3.5 text-sm max-sm:mt-4">
            <button
              type="button"
              className="inline-flex items-center gap-x-1.5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-inter font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 "
            >
              <Refresh />
              Refresh
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-x-1.5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium font-inter rounded-lg text-xs px-5 py-2.5  mb-2 "
            >
              <Plus />
              Add Repository
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Header;

