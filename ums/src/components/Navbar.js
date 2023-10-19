import React, { useState } from "react";
import "../index.css";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-new-blue p-4 flex justify-between items-center">
      <ul className="flex space-x-4 font-bold">
        <li>
          <a
            href="/"
            className="text-white hover:text-new-orange transition duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="text-white hover:text-new-orange transition duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/services"
            className="text-white hover:text-new-orange transition duration-300"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-white hover:text-new-orange transition duration-300"
          >
            Contact
          </a>
        </li>
        <li>
          <svg
            className="svg-icon"
            width="33"
            height="33"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="m14.5 18.717-2.5 2.88-2.5-2.88h5zM8.5 13v3h-3v-3h3zm5 0v3h-3v-3h3zm5 0v3h-3v-3h3zm-10-5v3h-3V8h3zm5 0v3h-3V8h3zm5 0v3h-3V8h3zm-10-5v3h-3V3h3zm5 0v3h-3V3h3zm5 0v3h-3V3h3z"
              fill="currentColor"
              fillRule="nonzero"
            ></path>
          </svg>
        </li>
      </ul>
      <div className="relative flex items-center">
        <div
          className={`search-icon ${searchOpen ? "open" : ""}`}
          onClick={() => setSearchOpen(!searchOpen)}
        >
          <AiOutlineSearch className="text-white" />
        </div>
        {searchOpen && (
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white rounded-full py-1 px-4 font-bold focus:outline-none focus:ring focus:border-new-orange ml-2"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
