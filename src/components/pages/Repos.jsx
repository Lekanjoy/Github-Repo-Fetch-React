import React, { useEffect, useState, useContext } from "react";
import Pagination from "../Pagination";
import Repo from "./Repo";
import {RepoContext} from '../../App'

const Repos = () => {
  const { repos, isLoading } = useContext(RepoContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [repoPerPage] = useState(5);

  // Get current userPage
  const indexOfLastRepo = currentPage * repoPerPage;
  const indexOfFirstRepo = indexOfLastRepo - repoPerPage;
  const currentRepo = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // console.log("paginate");
  };

  return (

      <section className="p-4 md:px-12">
        <h2 className="text-center font-bold text-2xl my-4 italic">
          My Github Repositories
        </h2>
        <div className="mt-8 mb-3">
          {isLoading ? "Loading..." : <Repo repos={currentRepo} />}
        </div>
        <Pagination
          reposPerPage={repoPerPage}
          totalRepos={repos.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </section>
  );
};

export default Repos;
