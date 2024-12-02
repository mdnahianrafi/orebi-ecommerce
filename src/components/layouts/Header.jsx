import React, { useRef, useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "../../assets/logo.png";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Heading from "../Heading";
import { FaSearch, FaUser } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import { FaCartShopping  } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
// State variables to manage the open/close status of the dropdowns
const [isCategoryOpen, setIsCategoryOpen] = useState(false); // Category dropdown open/close state
const [isUserOpen, setIsUserOpen] = useState(false); // User dropdown open/close state

// Refs to directly access the DOM elements for the dropdowns and buttons
const categoryButtonRef = useRef(null); // Ref for the category dropdown button
const categoryDropRef = useRef(null); // Ref for the category dropdown menu
const userButtonRef = useRef(null); // Ref for the user dropdown button
const userDropRef = useRef(null); // Ref for the user dropdown menu

// Function to toggle the visibility of the category dropdown
const handleCategoryDrop = () => {
  setIsCategoryOpen((prev) => !prev); // Toggle category dropdown state
  setIsUserOpen(false); // Close user dropdown if it was open
};

// Function to toggle the visibility of the user dropdown
const handleUserDrop = () => {
  setIsUserOpen((prev) => !prev); // Toggle user dropdown state
  setIsCategoryOpen(false); // Close category dropdown if it was open
};

// Effect hook to close dropdowns when a click happens outside the dropdown or its button
useEffect(() => {
  // Function to handle clicks outside the dropdowns and close them
  const handleClickOutside = (event) => {
    // Check if the click was outside the category dropdown and its button
    if (
      categoryDropRef.current &&
      !categoryDropRef.current.contains(event.target) &&
      categoryButtonRef.current &&
      !categoryButtonRef.current.contains(event.target)
    ) {
      setIsCategoryOpen(false); // Close the category dropdown
    }

    // Check if the click was outside the user dropdown and its button
    if (
      userDropRef.current &&
      !userDropRef.current.contains(event.target) &&
      userButtonRef.current &&
      !userButtonRef.current.contains(event.target)
    ) {
      setIsUserOpen(false); // Close the user dropdown
    }
  };

  // Add event listener to detect clicks outside the dropdowns
  document.addEventListener("mousedown", handleClickOutside);

  // Cleanup function to remove the event listener when the component unmounts
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []); // Empty dependency array to run only once on mount and unmount


  return (
    <>
      {/* Header Part Start */}
      <div className="w-full">
        <Container className={"max-w-headerContainer py-[30px]"}>
          <Flex>
            <div className="w-logoW">
              <a href="#">
                <Image imgSrc={Logo} />
              </a>
            </div>
            <div className="w-menuW">
              <nav className="">
                <ul className="flex gap-x-10">
                  <Link
                    to="/"
                    className="text-sm duration-300 font-dm text-menuText hover:font-bold hover:text-menuTextHover hover:ease-in-out "
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="text-sm duration-300 font-dm text-menuText hover:font-bold hover:text-menuTextHover hover:ease-in-out "
                  >
                    About
                  </Link>
                  <Link
                    to="/shop"
                    className="text-sm duration-300 font-dm text-menuText hover:font-bold hover:text-menuTextHover hover:ease-in-out "
                  >
                    Shop
                  </Link>
                  <Link
                    to="/contacts"
                    className="text-sm duration-300 font-dm text-menuText hover:font-bold hover:text-menuTextHover hover:ease-in-out "
                  >
                    Contacts
                  </Link>
                </ul>
              </nav>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Header Part End */}

      {/* Category and Search Part Start */}
      <div className="w-full border bg-categoryColor py-11 border-menuText">
        <Container className={"max-w-headerContainer"}>
          <Flex>
            {/* Category Button and Dropdown */}
            <div className="relative w-1/4 pt-4">
              <button
                ref={categoryButtonRef}
                onClick={handleCategoryDrop}
                className="flex items-center p-2 transition-all duration-300 ease-in-out rounded-md gap-x-2 hover:font-bold"
              >
                <HiBars3BottomLeft className="text-xl text-menuTextHover" />
                <Heading
                  as="h1"
                  text="Shop by Category"
                  className="text-sm ease-out text-menuTextHover"
                />
              </button>
              {/* Category Dropdown Menu */}
              <div className="absolute left-0 z-10 w-8/12 bg-white rounded-md shadow-lg">
                {isCategoryOpen && (
                  <div ref={categoryDropRef}>
                    <motion.ul
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-1 z-50 bg-white w-auto text-[#767676] h-auto p-4 pb-6 rounded-lg"
                    >
                      <li className="px-4 py-1 text-black font-dm duration-300 border-b-[1px]  border-b-transparent hover:border-b-black cursor-pointer border-b-gray-400 hover:font-bold">
                        Accessories
                      </li>
                      <li className="px-4 py-1 text-black font-dm duration-300 border-b-[1px]  border-b-transparent hover:border-b-black  cursor-pointer border-b-gray-400 hover:font-bold">
                        Furniture
                      </li>
                      <li className="px-4 py-1 text-black duration-300 font-dm border-b-[1px]  border-b-transparent hover:border-b-black  cursor-pointer border-b-gray-400 hover:font-bold">
                        Electronics
                      </li>
                      <li className="px-4 py-1 text-black font-dm duration-300 border-b-[1px]  border-b-transparent hover:border-b-black  cursor-pointer border-b-gray-400 hover:font-bold">
                        Clothes
                      </li>
                      <li className="px-4 py-1 text-black font-dm duration-300 border-b-[1px]  border-b-transparent hover:border-b-black  cursor-pointer border-b-gray-400 hover:font-bold">
                        Bags
                      </li>
                    </motion.ul>
                  </div>
                )}
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative w-7/12">
              <input
                type="text"
                className="w-full p-4 bg-white rounded-lg text-menuText"
                placeholder="Search Products"
              />
              <FaSearch className="absolute text-2xl top-1/3 right-4" />
            </div>

            {/* User Profile and Cart */}
            <div className="w-1/6 pt-4">
              <Flex className={"justify-end gap-x-10"}>
                {/* User Button and Dropdown */}
                <div className="relative">
                  <button
                    ref={userButtonRef}
                    onClick={handleUserDrop}
                    className="flex items-center p-2 transition-all duration-300 ease-in-out rounded-md gap-x-2 hover:font-bold"
                  >
                    <FaUser className="text-lg" />
                    <VscTriangleDown className="text-lg" />
                  </button>
                  {/* User Dropdown Menu */}
                  <div className="absolute right-0 z-10 w-40 bg-white rounded-md shadow-lg">
                    {isUserOpen && (
                      <div ref={userDropRef}>
                        <motion.ul
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="absolute z-50 w-auto h-auto p-5 pb-6 text-black bg-white rounded-lg text top-1"
                        >
                          <li className="text-black font-dm px-4 py-1 border-b-[1px]  border-b-transparent hover:border-b-black hover:font-bold duration-300 cursor-pointer">
                            Login
                          </li>
                          <li className="text-black font-dm px-4 py-1 border-b-[1px] border-b-transparent  hover:border-b-black hover:font-bold duration-300 cursor-pointer">
                            Sign Up
                          </li>
                          <li className="text-black font-dm px-4 py-1 border-b-[1px] border-b-transparent hover:border-b-black hover:font-bold duration-300 cursor-pointer">
                            Profile
                          </li>
                        </motion.ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Cart Icon */}
                <div>
                  <FaCartShopping className="mt-2 text-lg" />
                </div>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Category and Search Part End */}
    </>
  );
};

export default Header;
