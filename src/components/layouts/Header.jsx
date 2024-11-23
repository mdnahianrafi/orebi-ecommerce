import React, { useRef, useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "../../assets/logo.png";
import Menu from "../Menu";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Heading from "../Heading";
import { FaSearch, FaUser } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import { FaCartShopping } from "react-icons/fa6";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const Header = () => {
  const categoryDropRef = useRef(null); // Ref for category dropdown
  const userDropRef = useRef(null); // Ref for user dropdown
  const categoryButtonRef = useRef(null); // Ref for category button
  const userButtonRef = useRef(null); // Ref for user button
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // Category dropdown open state
  const [isUserOpen, setIsUserOpen] = useState(false); // User dropdown open state

  // Handle toggle for category dropdown
  const handleCategoryDrop = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  // Handle toggle for user dropdown
  const handleUserDrop = () => {
    setIsUserOpen(!isUserOpen);
  };

  // Close dropdowns when clicking outside
  const handleClickOutside = (event) => {
    if (
      (categoryDropRef.current && !categoryDropRef.current.contains(event.target) && categoryButtonRef.current && !categoryButtonRef.current.contains(event.target)) ||
      (userDropRef.current && !userDropRef.current.contains(event.target) && userButtonRef.current && !userButtonRef.current.contains(event.target))
    ) {
      setIsCategoryOpen(false);
      setIsUserOpen(false);
    }
  };

  // Set up event listener to detect clicks outside the dropdowns
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
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
              <Flex className={"gap-x-10"}>
                <Menu menuName={"Home"} />
                <Menu menuName={"Shop"} />
                <Menu menuName={"About"} />
                <Menu menuName={"Contacts"} />
              </Flex>
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
                      <li className="py-2 transition-all duration-300 ease-in-out border-white hover:text-base hover:font-bold">Category 1</li>
                      <li className="py-2 transition-all duration-300 ease-in-out border-white hover:text-base hover:font-bold">Category 2</li>
                      <li className="py-2 transition-all duration-300 ease-in-out border-white hover:text-base hover:font-bold">Category 3</li>
                      <li className="py-2 transition-all duration-300 ease-in-out border-white hover:text-base hover:font-bold">Category 4</li>
                      <li className="py-2 transition-all duration-300 ease-in-out border-white hover:text-base hover:font-bold">Category 5</li>
                    </ul>
                  </div>
                )}
              </SlideDown>
            </div>

            {/* Search Bar */}
            <div className="relative w-7/12 ">
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
                          <li className="py-2 cursor-pointer hover:bg-gray-100">Profile</li>
                          <li className="py-2 cursor-pointer hover:bg-gray-100">Sign Up</li>
                          <li className="py-2 cursor-pointer hover:bg-gray-100">Login</li>
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
