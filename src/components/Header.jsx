// import React, { useContext, useEffect, useState } from "react";
// import { SidebarContext } from "../contexts/SidebarContext";
// import { CartContext } from "../contexts/CartContext";
// import { Link } from "react-router";
// import Logo from "../img/logo.svg";
// import { BsBag } from "react-icons/bs";
// import MensClothing from "../pages/MensClothingPage";

// const Header = () => {
//   // header state
//   const [isActive, setIsActive] = useState(false);
//   const { isOpen, setIsOpen } = useContext(SidebarContext);
//   const { itemAmount } = useContext(CartContext);

//   // event listener
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
//     });
//   });

//   return (
//     <header
//       className={`${
//         isActive ? "bg-gray-100 py-4 shadow-md" : "bg-none py-6"
//       } fixed w-full z-10 lg:px-8 transition-all`}
//     >
//       <div className="container mx-auto flex items-center justify-between h-full">
//         <Link to={"/"}>
//           <div className="text-3xl text-blue-950 shadow-black font-bold">
//             Deepa-Store{" "}
//           </div>
//           {/* <div className="w-[40px]">
//             <img src={Logo} alt="" />
//           </div> */}
//         </Link>

//         {/* Add here */}
//         <div className="hidden md:flex gap-6 text-blue-950 font-semibold">
//           <Link to="/MensClothing" className="hover:text-blue-700 transition">
//             Men
//           </Link>
//           <Link to="/WomensClothing" className="hover:text-blue-700 transition">
//             Women
//           </Link>
//           <Link to="/jewellery" className="hover:text-blue-700 transition">
//             Jewellery
//           </Link>
//           {/* Search bar
//           <div className="relative flex items-center">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//               className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div> */}
//         </div>

//         {/* cart */}
//         <div
//           onClick={() => setIsOpen(!isOpen)}
//           className="cursor-pointer flex relative"
//         >
//           <BsBag className="text-2xl" />
//           <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
//             {itemAmount}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router";
import { BsBag } from "react-icons/bs";
import logo from "../img/shoplogo.jpg";

import MensClothing from "../pages/MensClothingPage";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // state for search bar
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  // handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header
      className={`${
        isActive ? "bg-gray-100 py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div className="text-3xl text-blue-950 shadow-black font-bold mr-120 ">
            {/* <div className="w-[100px] mr-4">
              <img className="in" src={logo} alt="Deepa Store Logo" />
            </div> */}
            Deepa-Store{" "}
          </div>
          {/* <div className="w-[40px]">
            <img src={shop} alt="" />
          </div> */}
        </Link>

        {/* Navigation links */}
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
        </div>

        {/* Search bar
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
        </div> */}

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
