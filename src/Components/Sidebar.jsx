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
      link: "/AiCodeReview",
      icon: <Code />,
    },
    {
      name: "Cloud Security",
      link: "/CloudSecurity",
      icon: <Cloud />,
    },
    {
      name: "How to Use",
      link: "/How-to-Use",
      icon: <Book />,
    },
    {
      name: "Settings",
      link: "/Settings",
      icon: <Settings />,
    },
    {
      name: "Support",
      link: "/Support",
      icon: <Phone />,
      margin: true,
    },
    {
      name: "Logout",
      link: "/Logout",
      icon: <Logout />,
    },
  ];

  return (
    <aside className="w-60 fixed min-h-full bg-white space-y-5 p-3 max-sm:hidden">
      <div className="flex justify-center  gap-3">
        <Ant className="size-7" />
        {/* <img src={Ant} alt="" className="size-7" /> */}
        <h1 className="text-black font-Roboto font-light text-2xl tracking-wide">
          CodeAnt AI
        </h1>
      </div>
      <div className="flex justify-center">
        <select className="border border-zinc-300 rounded px-5 py-1 focus:border-zinc-300 active:border-zinc-300">
          <option defaultValue>Souvagy Ranjan Dash</option>
          <option value="Monkey D. Luffy">Choose another account </option>
        </select>
      </div>
      <nav className="flex flex-col gap-3 relative">
        {Menus.map((menu, i) => (
          <NavLink
            to={menu.link}
            className={({ isActive }) =>
              `flex items-center text-sm gap-3.5 font-medium p-2 rounded-lg ${
                menu.margin ? "mt-64" : ""
              } ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`
            }
            key={menu.name}
          >
            {menu.icon}
            <h2>{menu.name}</h2>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
