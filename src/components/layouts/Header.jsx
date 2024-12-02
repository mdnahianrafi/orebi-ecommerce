import React, { useRef, useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "../../assets/logo.png";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Heading from "../Heading";
import { FaSearch, FaUser } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import { FaCartShopping } from "react-icons/fa6";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { Link } from "react-router-dom";

const Header = () => {
  // State for dropdowns
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  // Refs for dropdowns and buttons
  const categoryButtonRef = useRef(null);
  const categoryDropRef = useRef(null);
  const userButtonRef = useRef(null);
  const userDropRef = useRef(null);

  // Handle category dropdown toggle
  const handleCategoryDrop = () => {
    setIsCategoryOpen((prev) => !prev);
    setIsUserOpen(false); // Close user dropdown if open
  };

  // Handle user dropdown toggle
  const handleUserDrop = () => {
    setIsUserOpen((prev) => !prev);
    setIsCategoryOpen(false); // Close category dropdown if open
  };

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoryDropRef.current &&
        !categoryDropRef.current.contains(event.target) &&
        categoryButtonRef.current &&
        !categoryButtonRef.current.contains(event.target)
      ) {
        setIsCategoryOpen(false);
      }
      if (
        userDropRef.current &&
        !userDropRef.current.contains(event.target) &&
        userButtonRef.current &&
        !userButtonRef.current.contains(event.target)
      ) {
        setIsUserOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

   <Link to="/" className="text-sm duration-300 font-dm text-menuText hover:font-bold hover:text-menuTextHover hover:ease-in-out ">Home</Link>
   <Link to="/about" className="text-sm duration-300 font-dm text-menuText hover:font-bold hover:text-menuTextHover hover:ease-in-out ">About</Link>
   <Link to="/shop" className="text-sm duration-300 font-dm text-menuText hover:font-bold hover:text-menuTextHover hover:ease-in-out ">Shop</Link>
   <Link to="/contacts" className="text-sm duration-300 font-dm text-menuText hover:font-bold hover:text-menuTextHover hover:ease-in-out ">Contacts</Link>
   
  


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
              <SlideDown className="absolute left-0 z-10 w-8/12 bg-white rounded-md shadow-lg">
                {isCategoryOpen && (
                  <div ref={categoryDropRef}>
                    <ul className="p-4">
                      {["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"].map(
                        (category, index) => (
                          <li
                            key={index}
                            className="py-2 transition-all duration-300 ease-in-out border-white hover:text-base hover:font-bold"
                          >
                            {category}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </SlideDown>
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
                  <SlideDown className="absolute right-0 z-10 w-40 bg-white rounded-md shadow-lg">
                    {isUserOpen && (
                      <div ref={userDropRef}>
                        <ul className="p-2">
                          {["Profile", "Sign Up", "Login"].map((item, index) => (
                            <li
                              key={index}
                              className="py-2 cursor-pointer hover:bg-gray-100"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </SlideDown>
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
