import React, { useState } from "react";
import Plus from "../Assets/Plus";
import Refresh from "../Assets/Refresh";
import Ant from "../Assets/Ant";
import Bars from "../Assets/Bars";
import Home from "../Assets/Home";
import Code from "../Assets/Code";
import Cloud from "../Assets/Cloud";
import Book from "../Assets/Book";
import Settings from "../Assets/Setting";
import Logout from "../Assets/Logout";
import Phone from "../Assets/phone";

import { NavLink } from "react-router";
import Search from "../Assets/Search";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const Menus = [
    {
      name: "Repositories",
      link: "/",
      icon: <Home />,
    },
    {
      name: "AI Code Review",
      link: "/code",
      icon: <Code />,
    },
    {
      name: "Cloud Security",
      link: "/cloud",
      icon: <Cloud />,
    },
    {
      name: "How to Use",
      link: "/How-to-Use",
      icon: <Book />,
    },
    {
      name: "Settings",
      link: "/setting",
      icon: <Settings />,
    },
    {
      name: "Logout",
      link: "/logout",
      icon: <Logout />,
      margin: true,
    },
    {
      name: "Support",
      link: "/support",
      icon: <Phone />,
    },
  ];

  return (
    <div className="">
      {/* movbil View */}
      <div className="lg:hidden">
        <div className=" px-6 mt-6">
          <div className="flex sticky justify-between bg-white z-50">
          <div className="flex gap-3 ">
            <Ant className="size-7" />
            <h1 className="text-black font-Roboto font-light text-2xl tracking-wide">
              CodeAnt AI
            </h1>
          </div>
          <button className="" onClick={toggleSidebar} aria-label="Toggle Menu">
            <Bars />
          </button>
          </div>
         <div className={`z-10  absolute top-16 right-0 w-full h-full p-2 transform
         
         ${isNavbarOpen ? "translate-y-0" : "-translate-y-[130%]"} transition-transform duration-700 
         `}>
           <nav className="flex flex-col gap-3 bg-white border border-gray-300 rounded-lg p-2 ">
                  {Menus.map((menu, i) => (
                    <NavLink
                      to={menu.link}
                      className={({ isActive }) =>
                        `flex items-center text-sm gap-3.5 font-medium p-2 rounded
                       ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`
                      }
                      key={menu.name}
                    >
                      {menu.icon}
                      <h2>{menu.name}</h2>
                    </NavLink>
                  ))}
                </nav>
         </div>
        </div>
      </div>

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
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
              <Search />
            </div>
            <input
              type="search"
              id="search"
              className="block py-2 ps-10 text-sm mt-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-96 max-sm:w-full"
              placeholder="Search Repositories"
              required
            />
          </div>

      </div>
    </div>
  );
};

export default Header;
        // <form>
        //   <div className="relative">
        //     <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        //       <svg
        //         className="w-4 h-4 text-gray-500 "
        //         aria-hidden="true"
        //         xmlns="http://www.w3.org/2000/svg"
        //         fill="none"
        //         viewBox="0 0 20 20"
        //       >
        //         <path
        //           stroke="currentColor"
        //           strokeLinecap="round"
        //           strokeLinejoin="round"
        //           strokeWidth="2"
        //           d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        //         />
        //       </svg>
        //     </div>
        //     <input
        //       type="search"
        //       id="search"
        //       className="block py-2 ps-10 text-sm mt-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-96 max-sm:w-full"
        //       placeholder="Search Repositories"
        //       required
        //     />
        //   </div>
        // </form>
