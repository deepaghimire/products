import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { BsPlus, BsEyeFill } from "react-icons/bs";

import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // destructure product
  const { id, image, category, title, price } = product;

  return (
    <div className="bg-pink-100 p-4 rounded-lg">
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition  ">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-teal-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category, title & price */}
      <div>
        <div className="tex-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>

        <h2 className="font-semibbold">$ {price}</h2>
      </div>
    </div>
  );
};

export default Product;

// // src/components/ProductCard.jsx
// const Productcard = ({ product }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//       <div className="p-4 bg-gray-100 flex justify-center">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="h-48 object-contain"
//         />
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-semibold mb-2 line-clamp-2">
//           {product.title}
//         </h3>
//         <p className="text-blue-600 font-bold">${product.price}</p>
//         <p className="text-sm text-gray-500 mt-1">
//           Rating: {product.rating?.rate || "N/A"} ({product.rating?.count || 0})
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Productcard;

//naya add garekko

// import { Link } from "react-router-dom";

// const ProductCard = ({ product }) => {
//   return (
//     <article className="product-card">
//       <Link to={`/product/${product.id}`} className="product-link">
//         <div className="product-image-container">
//           <img
//             src={product.image}
//             alt={product.title}
//             className="product-image"
//             loading="lazy"
//           />
//         </div>
//         <div className="product-info">
//           <h3 className="product-title">{product.title}</h3>
//           <p className="product-price">${product.price.toFixed(2)}</p>
//           <div className="product-rating">
//             <span className="rating-stars">
//               {"★".repeat(Math.round(product.rating.rate))}
//               {"☆".repeat(5 - Math.round(product.rating.rate))}
//             </span>
//             <span className="rating-count">({product.rating.count})</span>
//           </div>
//         </div>
//       </Link>
//     </article>
//   );
// };

// export default ProductCard;

//123456789
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// const ProductCard = ({ product }) => {
//   const { addToCart } = useCart();

//   return (
//     <div className="product-card">
//       <Link to={`/products/${product.id}`}>
//         <img
//           src={product.image}
//           alt={product.title}
//           className="product-image"
//         />
//         <div className="product-info">
//           <h3 className="product-title">{product.title}</h3>
//           <p className="product-price">${product.price.toFixed(2)}</p>
//           <div className="product-rating">
//             {Array(Math.round(product.rating.rate))
//               .fill()
//               .map((_, i) => (
//                 <span key={i}>★</span>
//               ))}
//             <span>({product.rating.count})</span>
//           </div>
//         </div>
//       </Link>
//       <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductCard;
