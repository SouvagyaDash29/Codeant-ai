import React, { useState } from 'react'
import Header from './components/Header'
import Search from '../Assets/Search'
import Data from "../Data/RepositoriesData"
import RepositoryCard from './components/RepositoryCard';

const Home = () => {

	const [query, setQuery] = useState("");

	const keys = ["name", "accessType", "language"]

    const filter = (repository) => {
        return Data.filter((item) =>
            keys.some((key) => item[key] && item[key].toLowerCase().includes(query.toLowerCase()))
        );
    };

  return (
	<div className='mt-10 lg:mt-6'>
		<Header />
		<div className="relative px-6 ">
            <div className="absolute inset-y-0 left-6 start-0 flex items-center ps-3 pointer-events-none ">
              <Search  />
            </div>
            <input
              type="text"
              id="search"
              onChange={(e)=>{setQuery(e.target.value)}}
              className="block py-2 ps-10 text-sm mt-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-96 max-sm:w-full"
              placeholder="Search Repositories"
              required
            />
          </div>

		<div className="mt-5">
			<RepositoryCard repo={filter(Data)} />
		</div>

	</div>
  )
}

export default Home