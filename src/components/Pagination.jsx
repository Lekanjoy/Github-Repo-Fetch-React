import React from "react";
import prev from '../assets/3994376_arrow_back_left_navigation_previous_icon.svg'
import next from '../assets/3994400_arrow_forward_navigation_next_right_icon.svg'

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
    <div className="pagination mt-4 w-full ">
      <p className="">Page {currentPage} of {pageNumber.length}</p> <br />
      <div className="lg:flex lg:items-center lg:justify-center">
        <button
          className="btn flex items-center"
          disabled={currentPage === 1}
          onClick={prevPage}
        >
          <img src={prev} alt="" />
        </button>
        {pageNumber.map((num) => {
          return (
            <button  className={currentPage === num ? `btn bg-blue-500 text-white`: 'btn'} key={num} onClick={() => paginate(num)}>
              {num}
            </button>
          );
        })}
        <button
          className="btn flex items-center"
          disabled={currentPage === pageNumber.length}
          onClick={nextPage}
        >
          <img src={next} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
