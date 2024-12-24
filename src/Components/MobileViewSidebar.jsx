import React, { useState } from 'react'

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


const MobileViewSidebar = () => {

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
	<div>
		<div className="">
				<div className=" px-6 mt-4">
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
	</div>
  )
}

export default MobileViewSidebar