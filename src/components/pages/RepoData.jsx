import React, {useContext} from 'react'
import { useParams} from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import {RepoContext} from '../../App'
import github  from '../../assets/github_icon.svg'


const RepoData = () => {
 const { details } = useParams();
  const { repos } = useContext(RepoContext);
  const repoDetails = repos.find((repo) => repo.id === parseInt(details));





  return (
    <section className="p-4 w-full bg-white  flex justify-center items-center min-h-[90vh]">
      <Helmet>
        <title>Repository Fetch Details</title>
        <meta
          name="description"
          content="GitHub Repository Fetch Details."
        />
      </Helmet>
      <div className="w-full rounded-md border-t-2  shadow-xl bg-white flex justify-center items-center flex-col  px-4 py-8 max-w-lg">
        <h1 className="font-bold text-xl tracking-widest mb-1 text-center text-blue-500 ">
          {" "}
          {repoDetails?.name}
        </h1>
        <p className="text-center mb-5 text-gray-500 text-sm">
          {repoDetails?.description}
        </p>
        <div className="flex gap-x-2">
          <p>
            <span className="font-bold">Forks: </span>
            {repoDetails?.forks_count}
          </p>
          <p>
            <span className="font-bold ">Stars: </span>
            {repoDetails?.stargazers_count}
          </p>
          <p>
            <span className="font-bold ">Branch: </span>
            {repoDetails?.default_branch}
          </p>
        </div>
        <p className="">
          <span className="font-bold">Primary Language: </span>
          {repoDetails?.language}
        </p>
        <p>
          <span className="font-bold">Date Created: </span>
          {repoDetails?.created_at}
        </p>
        <a
          href={repoDetails?.html_url}
          className="bg-green-600  flex items-center justify-center gap-x-2
         text-white font-semibold mt-8 text-center rounded-md p-3 w-full hover:bg-green-500"
        >
          <img src={github} alt="Github icon" className="w-[20px] h-[20px]" />{" "}
          View Code
        </a>
      </div>
    </section>
  );
}

export default RepoData