import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";

const Repo = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [repoPerPage] = useState(5);

  //   Fetch Lekanjoy Github Repositories
  useEffect(() => {
    setIsLoading(true);
    fetch("")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRepos(data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  // Get current userPage
  const indexOfLastUser = currentPage * repoPerPage;
  const indexOfFirstUser = indexOfLastUser - repoPerPage;
  const currentUser = repos.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log("paginate");
  };

  return (
    <section className="p-4">
      <h2 className="text-center font-semibold text-lg underline">
        Olalekan Alabi Github Repositories
      </h2>
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

export default Repo;
