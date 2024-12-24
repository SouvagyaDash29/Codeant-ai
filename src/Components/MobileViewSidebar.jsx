import React, { useState } from "react";
import { NavLink } from "react-router";
import Ant from "../Assets/Ant";
import Bars from "../Assets/Bars";
import Home from "../Assets/Home";
import Code from "../Assets/Code";
import Cloud from "../Assets/Cloud";
import Book from "../Assets/Book";
import Settings from "../Assets/Setting";
import Logout from "../Assets/Logout";
import Phone from "../Assets/phone";
import Close from "../Assets/Close";
import ConfirmationDialog from "./ConfirmationDialog";

const MobileViewSidebar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleSidebar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const Menus = [
    { name: "Repositories", link: "/", icon: <Home /> },
    { name: "AI Code Review", link: "/AiCodeReview", icon: <Code /> },
    { name: "Cloud Security", link: "/CloudSecurity", icon: <Cloud /> },
    { name: "How to Use", link: "/How-to-Use", icon: <Book /> },
    { name: "Settings", link: "/Settings", icon: <Settings /> },
    { name: "Support", link: "/Support", icon: <Phone />, margin: true },
  
  ];

  return (
    <div>
      {/* Navbar container */}
      <div className="fixed top-0 left-0 w-full bg-white px-6 py-3 z-50 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Ant className="size-7" />
            <h1 className="text-black font-Roboto font-light text-2xl tracking-wide">
              CodeAnt AI
            </h1>
          </div>
          <button onClick={toggleSidebar} aria-label="Toggle Menu">
            {!isNavbarOpen ? <Bars /> : <Close />}
          </button>
        </div>
      </div>

      {/* Sidebar menu */}
      <div
        className={`absolute top-14 right-0 w-full h-fit p-2 transform ${
          isNavbarOpen ? "translate-y-0" : "-translate-y-[130%]"
        } transition-transform duration-700 bg-white border border-gray-300 rounded-lg`}
      >

        <div className="px-2">
          <select className="mt-3 w-full font-medium text-base border-2 border-zinc-300 rounded-md p-2 text-gray-700">
            <option defaultValue>Souvagya Ranjan Dash</option>
            <option value="Another Account">Choose Another Account</option>
          </select>
        </div>


        <nav className="flex flex-col gap-3 p-2">
          {Menus.map((menu, i) => (
            <NavLink
              to={menu.link}
              onClick={toggleSidebar} 
              className={({ isActive }) =>
                `flex items-center text-sm gap-3.5 font-medium p-2 rounded-lg ${
                  isActive ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                }`
              }
              key={menu.name}
            >
              {menu.icon}
              <h2>{menu.name}</h2>
            </NavLink>
          ))}
        </nav>


        {/* Logout Button */}
      <button
        onClick={() => setIsDialogOpen(true)}
        className=" w-full flex items-center text-sm gap-3.5 font-medium p-2 pl-4 rounded-l"
      >
        <Logout />
        Logout
      </button>
      </div>
      <ConfirmationDialog
        isOpen={isDialogOpen}
        title="Logout"
        message="Are you sure you want to Logout."
        onCancel={() => setIsDialogOpen(false)}
        />
    </div>
  );
};

export default MobileViewSidebar;
