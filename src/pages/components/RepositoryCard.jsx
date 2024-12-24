import React from "react";
import Database from "../../Assets/Database";


const RepositoryCard = ({repo}) => {
  return (
	<div className="">
		{repo.map((data, i)=> (
			
		<div key={i} className="pl-6 font-inter py-4 border-t-2">
			<div className="flex items-center gap-5 mb-3">
				<h1 className="text-lg font-medium">
					{data.name}
				</h1>
				<span className=" bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                	{data.accessType}
            	</span>
			</div>
			<div className="flex gap-10 max-sm:gap-5 text-sm font-normal">
			<span className="inline-flex items-center ">
                {data.language}
                <span className="size-1.5 ml-1 bg-sky-600 rounded-full"></span>
            </span>
				<div className="inline-flex items-center gap-1">
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

export default RepositoryCard;
