import React, { useState } from "react";
import hamburger from "../assets/icon-hamburger.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Handle sideBar Visibility
  function handleSideBar() {
    setShowMenu((prevState) => !prevState);
  }
  return (
    <header className="w-full h-full flex justify-between bg-[#333] p-4 items-center relative">
      <h1 className="font-bold text-lg text-white">
        GitHub<span className="text-blue-600">Repo</span>Fetch
      </h1>
      <div className="cursor-pointer md:hidden" onClick={handleSideBar}>
        <img src={hamburger} alt="hamburger icon" />
      </div>
      <nav className="hidden text-white md:block">
        <ul className="flex gap-x-4">
          <Link to="/">
            <li className="hover:text-purple-600">Home</li>
          </Link>
          <Link to="/repos">
            <li className="hover:text-purple-600">Repositories</li>
          </Link>
          <Link to="/errorboundary">
            <li className="hover:text-purple-600">Error Boundary</li>
          </Link>
        </ul>
      </nav>

      {/* Mobile Side Menu */}
      {showMenu && (
        <nav className="bg-gray-600 shadow-xl z-20 text-white pl-4 pr-20 rounded-br-md h-[70vh] pt-12 pb-28 absolute top-[60px] left-0 md:bg-transparent md:relative md:p-0 md:rounded-none md:top-0 md:h-auto">
          <ul className="cursor-pointer flex flex-col gap-y-8 md:flex-row  md:gap-x-4">
            <Link onClick={handleSideBar} to="/">
              <li>Home</li>
            </Link>
            <Link onClick={handleSideBar} to="/repos">
              <li>Repositories</li>
            </Link>
            <Link onClick={handleSideBar} to="/errorboundary">
              <li>Error Boundary</li>
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
