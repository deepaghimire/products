import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Jewellery = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="mx-auto px-30 py-30 relative w-full  h-full  bg-gradient-to-r from-fuchsia-400 to-yellow-500">
      <h1 className="text-3xl font-bold mb-8 text-center">
        💎Jewellery collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4  shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
          >
            <div className="border border-[#030303] h-[200px] mb-4 relative overflow-hidden group">
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-[160px] group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Action buttons */}
              <div className="absolute top-4 -right-11 group-hover:right-4 p-2 flex flex-col gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button
                  onClick={() => addToCart(product, product.id)}
                  className="w-10 h-10 bg-teal-500 text-white flex justify-center items-center  hover:bg-teal-600 transition"
                  aria-label={`Add ${product.title} to cart`}
                >
                  <BsPlus className="text-xl" />
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="w-10 h-10 bg-white flex justify-center items-center text-primary  shadow hover:bg-gray-100 transition"
                  aria-label={`View details of ${product.title}`}
                >
                  <BsEyeFill />
                </Link>
              </div>
            </div>

            {/* Product info */}
            <div>
              <div className="text-sm capitalize text-gray-500 mb-1">
                {product.category}
              </div>
              <Link to={`/product/${product.id}`}>
                <h2 className="font-semibold mb-1 line-clamp-2 hover:text-blue-600 transition">
                  {product.title}
                </h2>
              </Link>
              <div className="font-semibold">${product.price.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jewellery;
