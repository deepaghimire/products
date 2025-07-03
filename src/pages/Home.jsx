import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const { products } = useContext(ProductContext);
  const [searchKeyword, setSearchKeyword] = useState("");

  // Categories dekhaune
  const filteredByCategory = products.filter((item) => {
    return (
      item.category === "men's clothing" ||
      item.category === "women's clothing" ||
      item.category === "jewelery"
    );
  });

  // dynamic search add gareko filtered categories ma
  const finalFilteredProducts = filteredByCategory.filter((item) =>
    item.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="bg-gray-50 bg-gradient-to-r from-fuchsia-400 to-yellow-500">
      <Hero />

      {/* search bar rakheko   */}
      <div className="container mx-auto mt-10 relative bg-white rounded-full ">
        <div>
          <input
            type="text"
            placeholder=" Search products (e.g. gold, t-shirts, jackets...)"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-300 text-gray-700 placeholder-gray-400"
          />
          <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
            🔍
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Explore Our Products
          </h1>

          {/* Filtered Products display gareko */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {finalFilteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
