import React from "react";
import bg from "../img/background.jpg";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section
      className="h-[800px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>Hot Trend
          </div>
          <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">
            Fresh Fashion Finds
            <br />
            <span className="font-light">new collection</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import { Link } from "react-router";

// const categoryProducts = {

//   jewelery: [
//     { name: "Rings", image: "/images/jewelery/ring.jpg", link: "/rings" },
//     { name: "Necklaces",image: "/images/jewelery/necklace.jpg",link: "/necklaces"},
//     {name: "Earrings",image: "/images/jewelery/earrings.jpg",link: "/earrings"},
//     {name: "Bracelets",image: "/images/jewelery/bracelet.jpg",link: "/bracelets"},
//   ],
//   mens_clothing: [
//     { name: "T-Shirts", image: "/images/mens/tshirt.jpg", link: "/T-Shirts" },
//     { name: "Jeans", image: "/images/mens/jeans.jpg", link: "/jeans" },
//     { name: "Jackets", image: "/images/mens/jacket.jpg", link: "/jackets" },
//     { name: "Shoes", image: "/images/mens/shoes.jpg", link: "/shoes" },
//   ],
//   womens_clothing: [
//     { name: "Dresses", image: "/images/womens/dress.jpg", link: "/dresses" },
//     { name: "Blouses", image: "/images/womens/blouse.jpg", link: "/blouses" },
//     { name: "Skirts", image: "/images/womens/skirt.jpg", link: "/skirts" },
//     { name: "Handbags",image: "/images/womens/handbag.jpg",link: "/handbags",
//   ],
// };

// const HomePage = () => {
//   const categories = [
//     {
//       name: "jewelery",
//       displayName: "Jewelery",
//       items: categoryProducts.jewelery,
//     },
//     {
//       name: "mens_clothing",
//       displayName: "Men's Clothing",
//       items: categoryProducts.mens_clothing,
//     },
//     {
//       name: "womens_clothing",
//       displayName: "Women's Clothing",
//       items: categoryProducts.womens_clothing,
//     },
//   ];

//   return (
//     <div className=" bg-green-600 mx-auto px-8 py-2">
//       <h1 className="text-3xl font-bold mb-8">Welcome to Deepa Store</h1>

//       {categories.map((category, index) => (
//         <section key={index} className="mb-12">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-2xl font-semibold">
//               Shop {category.displayName}
//             </h2>
//             <Link
//               to={`/${category.name}`}
//               className="text-blue-600 hover:underline"
//             >
//               View all
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {category.items.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-1"
//               >
//                 <Link to={`${item?.link}`} className="block">
//                   <div className="h-48 overflow-hidden">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full h-full object-cover"
//                       loading="lazy"
//                     />
//                   </div>
//                   <div className="p-4">
//                     <h3 className="text-lg font-medium text-gray-800">
//                       {item.name}
//                     </h3>
//                     <p className="text-blue-600 mt-1">Shop now →</p>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default HomePage;
