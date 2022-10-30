import React from "react";
import { Link } from "react-router-dom";

const Repo = ({ repos }) => {

  return (
    <>
      {repos.map((repo) => {
        return (
            <div className="repo bg-white text-center p-2 mb-3 rounded-md shadow-lg">
              <h3 className="font-semibold text-lg">{repo.name}</h3>
          <Link key={repo.id} to={`/repos/${repo.id}`}>
              <p className="text-blue-500 mt-1 underline">View details</p>
          </Link>
            </div>
        );
      })}
    </>
  );
};

export default Repo;
