import React from "react";
import { Link } from "react-router-dom";

const Repo = ({ repos }) => {
  return (
    <>
      {repos.map((repo) => {
        return (
          <div
            key={repo.id}
            className="repo bg-white w-full  text-center flex gap-x-2 justify-between items-center flex-col p-3 mb-3 rounded-md cursor-pointer shadow-lg duration-700 ease-in-out md:flex-row md:px-8 md:hover:scale-105"
          >
            <h2 className="font-semibold text-lg">{repo.name}</h2>
            <Link to={`/repos/${repo.id}`} className="bg-blue-400 w-full p-2 rounded-md text-white font-semibold mt-3 hover:bg-blue-300 md:mt-0 md:w-auto">
              View Details
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Repo;
