import React, {useContext} from 'react'
import { useParams} from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { FaCodeBranch, FaStar, FaGithub } from "react-icons/fa";
import {RepoContext} from '../../App'
import fork from '../../assets/9026808_git_fork_thin_icon.png'


const RepoData = () => {
 const { details } = useParams();
  const { repos } = useContext(RepoContext);
  const repoDetails = repos.find((repo) => repo.id === parseInt(details));





  return (
    <section className="p-4 w-full bg-[#0d1017]  flex justify-center items-center min-h-[90vh]">
      <Helmet>
        <title>Repository Fetch Details</title>
        <meta name="description" content="GitHub Repository Fetch Details." />
      </Helmet>
      <div className="w-full rounded-2xl border-2  flex justify-center text-[#c0c3ca] items-center flex-col  px-4 py-8 max-w-lg">
        <h1 className="font-bold text-2xl tracking-widest mb-1 text-center ">
          {repoDetails?.name}
        </h1>
        <p className="text-center mb-5 text-gray-500 text-sm">
          {repoDetails?.description}
        </p>
        <div className="flex gap-x-8">
          <p className="flex items-center gap-x-1">
            <img className='w-[20px]' src={fork} alt="GitHub fork icon" />
           : {repoDetails?.forks_count}
          </p>
          <p className="flex items-center gap-x-1">
            <FaStar className="text-[#c0c3ca]" />:{" "}
            {repoDetails?.stargazers_count}
          </p>
          <p className="flex items-center gap-x-1">
            <FaCodeBranch />: {repoDetails?.default_branch}
          </p>
        </div>
        <p className="mt-4">
          <span className="font-bold">Primary Language: </span>
          {repoDetails?.language}
        </p>
        <p className="font-bold text-sm mt-6 md:text-base">
          <span>Date Created: </span>
          {repoDetails?.created_at}
        </p>
        <a
          href={repoDetails?.html_url}
          className="bg-[#1F6FEA]  flex items-center justify-center gap-x-2
         text-white font-semibold mt-1 text-center rounded-md p-3 w-full hover:bg-blue-500"
        >
          <FaGithub /> View Code
        </a>
      </div>
    </section>
  );
}

export default RepoData