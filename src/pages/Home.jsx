import React, { useState } from 'react'
import Header from './components/Header'
import Search from '../Assets/search.svg'
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
	<div className=''>
		<Header />
		<form className="relative ml-6">
			<img src={Search} alt=""  className='absolute top-2.5 left-3'/>
            <input
              type="search"
              id="search"
			  onChange={(e) => setQuery(e.target.value)}
              className="block py-2 ps-10 text-sm mt-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-96 max-sm:w-full"
              placeholder="Search Repositories"
              required
			  />
		</form>

		<div className="mt-5">
			<RepositoryCard repo={filter(Data)} />
		</div>

	</div>
  )
}

export default Home