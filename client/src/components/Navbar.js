import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-neutral-900   px-2 sm:px-4 py-2.5 relative">
        <div className="container flex flex-wrap justify-between items-center ">
          <NavLink
            to="/signup"
            className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 border border-blue-700 rounded absolute right-3"
            type="button"
            data-modal-toggle="authentication-modal"
          >
            Login
          </NavLink>
          <span className=" text-4xl font-semibold whitespace-nowrap text-blue-500">
            FameVest
          </span>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="mobile-menu-3"
              aria-controls="mobile-menu-3"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="hidden relative md:block">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="">
                <input
                  type="text"
                  id="search-navbar"
                  className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
            </div>
            <button
              data-collapse-toggle="mobile-menu-3"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-3"
              aria-expanded="false"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-3"
          >
            <div className="relative mt-3 md:hidden">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <ul className="  flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium p-2 pl-10 w-full relative right-40">
              <li>
                <NavLink
                  to="/docs"
                  className="
						dropdown-toggle
				dropdown-toggle
				bg-transparent 
	text-white 
	font-semibold 
	hover:text-white 
	py-2 
	px-4 
	hover:border-transparent 
	rounded-lg
				transition
				duration-150
				ease-in-out
				flex
				items-center
				text-xl"
                  aria-current="page"
                >
                  Docs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/features"
                  className="block 
						dropdown-toggle
				dropdown-toggle
				

	bg-transparent 
	text-white 
	font-semibold 
	hover:text-white 
	py-2 
	px-4 
	hover:border-transparent 
	rounded-lg
				transition
				duration-150
				ease-in-out
				flex
				items-center
				text-xl"
                >
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/trends"
                  className="
						dropdown-toggle
				dropdown-toggle
				

	bg-transparent 
	text-white 
	font-semibold 
	hover:text-white 
	py-2 
	px-4 
	hover:border-transparent 
	rounded-lg
				transition
				duration-150
				ease-in-out
				flex
				items-center
				text-xl"
                >
                  Trends
                </NavLink>
              </li>
              <li>
                <div className="flex justify-center">
                  <div>
                    <div className="dropdown relative">
                      <a
                        className="
				dropdown-toggle
				dropdown-toggle
				

	bg-transparent 
	text-white 
	font-semibold 
	hover:text-white 
	py-2 
	px-4 
	hover:border-transparent 
	rounded-lg
				transition
				duration-150
				ease-in-out
				flex
				items-center
				text-xl
			      "
                        href="#"
                        type="button"
                        id="dropdownMenuButton2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Settings
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="caret-down"
                          className="w-2 ml-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                          ></path>
                        </svg>
                      </a>
                      <ul
                        className="
				dropdown-menu
				min-w-max
				absolute
				hidden
				bg-white
				text-base
				z-50
				float-left
				py-2
				list-none
				text-left
				rounded-lg
				shadow-lg
				mt-1
				hidden
				m-0
				bg-clip-padding
				border-none
			      "
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <li>
                          <a
                            className="
				    dropdown-item
				    text-sm
				    py-2
				    px-4
				    font-normal
				    block
				    w-full
				    whitespace-nowrap
				    bg-transparent
				    text-gray-700
				    hover:bg-gray-100
				  "
                            href="#"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            className="
				    dropdown-item
				    text-sm
				    py-2
				    px-4
				    font-normal
				    block
				    w-full
				    whitespace-nowrap
				    bg-transparent
				    text-gray-700
				    hover:bg-gray-100
				  "
                            href="#"
                          >
                            Dark Mode
                          </a>
                        </li>
                        <li>
                          <a
                            className="
				    dropdown-item
				    text-sm
				    py-2
				    px-4
				    font-normal
				    block
				    w-full
				    whitespace-nowrap
				    bg-transparent
				    text-gray-700
				    hover:bg-gray-100
				  "
                            href="#"
                          >
                            About
                          </a>
                        </li>
                        <li>
                          <a
                            className="
				    dropdown-item
				    text-sm
				    py-2
				    px-4
				    font-normal
				    block
				    w-full
				    whitespace-nowrap
				    bg-transparent
				    text-gray-700
				    hover:bg-gray-100
				  "
                            href="#"
                          >
                            Contact
                          </a>
                        </li>
                        <li>
                          <a
                            className="
				    dropdown-item
				    text-sm
				    py-2
				    px-4
				    font-normal
				    block
				    w-full
				    whitespace-nowrap
				    bg-transparent
				    text-gray-700
				    hover:bg-gray-100
				  "
                            href="#"
                          >
                            Invite Friends
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
