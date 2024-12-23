import React from "react";
import Database from "../Assets/Database";
import Data from "../Data/RepositoriesData"

const RepositorySection = () => {
  return (
	<div className="">
		{Data.map((data, i)=> (
			
		<div className="pl-6 font-inter py-4 border-t-2">
			<div className="flex items-center gap-5 mb-3">
				<h1 className="text-lg font-medium">
					{data.name}
				</h1>
				<span class=" bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                	{data.access}
            	</span>
			</div>
			<div className="flex gap-12 text-sm font-normal">
			<span class="inline-flex items-center ">
                {data.language}
                <span class="size-1.5 ml-3 bg-sky-600 rounded-full"></span>
            </span>
				<div className="inline-flex items-center gap-4">
					<Database />
					{data.size}
				</div>
				<span className="">{data.update}</span>
			</div>
		</div>

		))}

	</div>
  );
};

export default RepositorySection;

// <>
// <div className="border-spacing-5">
// <div className="flex items-center gap-3 font-inter">
//   <h1 className="text-lg font-semibold">design-system</h1>
//   {/* <span className='text-xs bg-blue-200 text-blue-600 px-2.5 py-0.5 rounded-2xl'>Public</span> */}
//   <span className="rounded-full border border-sky-100 bg-sky-100 px-2 py-0.5 text-blue-600 text-xs font-normal">
// 	Public
//   </span>
// </div>
// <div className="flex gap-12 text-sm text-gray-900">
//   <span className="flex items-center gap-2  text-gray-900 dark:text-white me-3">
// 	<span>React</span>
// 	<span className="size-2 me-1 bg-blue-600 rounded-full"></span>
//   </span>
//   <span className="flex items-center gap-3 ">
// 	<Database />
// 	7320 KB
//   </span>
//   <span>Updated 1 days ago</span>
// </div>
// </div>
// </>
