import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import { Outlet } from 'react-router';
import MobileViewSidebar from '../Components/MobileViewSidebar';

const Dashboard = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
	  <div className="flex flex-col lg:flex-row">
    {isDesktop ? (
      <div className="hidden lg:block">
        <Sidebar />
      </div>
    ) : (
      <div className="z-10 block lg:hidden">
        <MobileViewSidebar />
      </div>
    )}
    <div className="bg-zinc-50 w-full h-screen lg:p-4 rounded-md divide-y lg:ml-[16rem] max-sm:p-0">
     <div className="bg-white border border-neutral-200 rounded-lg h-full max-lg:pt-4 ">
      <Outlet />
     </div>
    </div>
  </div>
  )
}

export default Dashboard