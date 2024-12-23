import React from "react";
import Plus from "../Assets/Plus";
import Refresh from "../Assets/Refresh";

const Header = () => {
  return (
    <div className="p-6 ">
      <div className="flex justify-between">
        <div className="">
          <h1 className="text-xl font-inter font-semibold">Repositories</h1>
          <h5 className="text-sm text-gray-700 ">33 total repositories</h5>
        </div>
        <div className="drop-shadow-sm flex gap-3.5 text-sm">
          <button className="border border-zinc-300 size-fit px-10 py-1.5 text-base flex items-center gap-3 rounded-md">
            <Refresh />
            Refresh
          </button>
          <button className="border-none bg-blue-600 size-fit px-10 py-1.5 text-base text-white flex items-center gap-3 rounded-md">
            <Plus />
            Add Repository
          </button>
        </div>
      </div>
      <form>
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block py-2 pr-48 ps-10 text-sm mt-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Repositories"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Header;
