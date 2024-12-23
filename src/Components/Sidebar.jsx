import React from "react";
import Ant from "../Assets/Ant";
import Home from "../Assets/Home";
import Code from "../Assets/Code";
import Cloud from "../Assets/Cloud";
import Book from "../Assets/Book";
import Settings from "../Assets/Setting";
import Logout from "../Assets/Logout";
import Phone from "../Assets/phone";

import { NavLink } from "react-router";

const Sidebar = () => {
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
    <sidebar className="w-60 fixed min-h-screen bg-white space-y-5 p-4">
      <div className="flex justify-center  gap-3">
        <Ant className="size-7" />
        {/* <img src={Ant} alt="" className="size-7" /> */}
        <h1 className="text-black font-Roboto font-light text-2xl tracking-wide">
          CodeAnt AI
        </h1>
      </div>
      <div className="flex justify-center">
        <select className="border border-zinc-300 rounded px-5 py-1 focus:border-zinc-300 active:border-zinc-300">
          <option selected>Souvagy Ranjan Dash</option>
          <option value="Monkey D. Luffy">Monkey D. Luffy </option>
        </select>
      </div>
      <div className="flex flex-col gap-3 relative">
        {Menus.map((menu, i) => (
          <NavLink
            to={menu.link}
            className={({ isActive }) =>
              `flex items-center text-sm gap-3.5 font-medium p-2 rounded ${
                menu.margin ? "mt-64" : ""
              } ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`
            }
            key={menu.name}
          >
            {menu.icon}
            <h2>{menu.name}</h2>
          </NavLink>
        ))}
      </div>
    </sidebar>
  );
};

export default Sidebar;
