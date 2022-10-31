import React, {useContext} from 'react'
import { useParams} from "react-router-dom";
import {RepoContext} from '../../App'


const RepoData = () => {
 const { details } = useParams();
  const { repos } = useContext(RepoContext);
  const repoDetails = repos.find((repo) => repo.id === parseInt(details));
  console.log(repoDetails);




  return (
    <section className="p-4 w-full   flex justify-center items-center min-h-[90vh]">
      <div className="w-full rounded-md shadow-lg bg-white flex justify-center items-center flex-col border border-red-500 px-4 py-8 max-w-lg">
        <h1 className="font-bold tracking-widest mb-3 underline"> {repoDetails?.name}
        </h1>
        <p>
          {repoDetails?.description}
        </p>
        <div className="flex gap-x-2">
          <p><span className='font-bold'>Forks: </span>{repoDetails?.forks_count}</p>
          <p><span className='font-bold'>Stars: </span>{repoDetails?.stargazers_count}</p>
        </div>
        <p><span className='font-bold'>Primary Language: </span>{repoDetails?.language}</p>
        <p><span className='font-bold'>Date Created: </span>{repoDetails?.created_at}</p>
        <a href={repoDetails?.html_url} className="bg-green-600 text-white font-semibold mt-4 text-center rounded-md p-3 w-full">Go to Code</a>
      </div>
    </section>
  );
}

export default RepoData