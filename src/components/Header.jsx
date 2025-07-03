import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router";
import { BsBag } from "react-icons/bs";
import logo from "../img/shoplogo.png";
import LoginPage from "../components/login";
import MensClothing from "../pages/MensClothingPage";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // state for search bar
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header
      className={`${
        isActive ? "bg-blue-300 py-4 shadow-md" : "bg-green-200 py-6"
      } fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div className=" mx-auto px-2 py-2 relative w-full  h-full  flex items-center justify-between ">
        <Link to={"/"}>
          <div className="text-3xl text-blue-950 shadow-black font-bold mr-120 ">
            <div className="w-[100px] h-[25px] mr-6 ">
              <img className="in" src={logo} alt="Deepa Store Logo" />
            </div>
            {/* Deepa-store{" "} */}
          </div>
        </Link>

        {/* links rakhera navigate gareko  */}
        <div className="hidden md:flex gap-6 text-blue-950 font-semibold mr-6">
          <Link
            to="/MensClothing"
            className="hover:text-blue-700 transition mr-4"
          >
            👨‍🦰Men
          </Link>
          <Link
            to="/WomensClothing"
            className="hover:text-blue-700 transition mr-4"
          >
            👩‍🦰Women
          </Link>
          <Link to="/jewellery" className="hover:text-blue-700 transition mr-4">
            💎 Jewellery
          </Link>
          <Link to="/contact-info" className="nav-link">
            login
          </Link>
        </div>
        {/* <LoginPopup /> */}

        {/* Cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
