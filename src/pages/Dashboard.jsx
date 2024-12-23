import React from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import RepositorySection from '../Components/RepositorySection';

const Dashboard = () => {
  return (
	<div className='flex'>
    <Sidebar />
    <div className="bg-zinc-50 w-full p-4 rounded-md divide-y ml-60">
     <div className="bg-white border border-neutral-200 rounded-lg ">
      <Header />
      <RepositorySection />
     </div>
    </div>
  </div>
  )
}

export default Dashboard