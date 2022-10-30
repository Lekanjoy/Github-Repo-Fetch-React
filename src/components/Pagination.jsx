import React from "react";

const Pagination = ({
  reposPerPage,
  totalRepos,
  currentPage,
  setCurrentPage,
  paginate,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumber.push(i);
  }

  // Next Page
  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  // Previous Page
  function prevPage() {
    setCurrentPage(currentPage - 1);
  }
  // console.log(pageNumber);
  return (
    <div className="pagination mt-4 w-full">
      <p className="">Page {currentPage} of {pageNumber.length}</p> <br />
      <button
        className="bg-red-400 btn"
        disabled={currentPage === 1}
        onClick={prevPage}
      >
        Prev
      </button>

      {pageNumber.map((num) => {
        return (
          <button className="btn" key={num} onClick={() => paginate(num)}>
            {num}
          </button>
        );
      })}
      <button
        className="bg-green-600 btn"
        disabled={currentPage === pageNumber.length}
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
