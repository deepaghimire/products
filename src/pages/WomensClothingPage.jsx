// // src/pages/WomensClothingPage.jsx
// import CategoryPage from "./CategoryPage";

// const WomensClothingPage = () => {
//   return <CategoryPage category="womens_clothing" />;
// };

// export default WomensClothingPage;
import React, { useEffect, useState } from "react";

const WomensClothing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((item) => (
        <div key={item.id} className="border p-4 rounded shadow">
          <img src={item.image} alt={item.title} className="h-40 mx-auto" />
          <h2 className="text-md font-semibold mt-2">{item.title}</h2>
          <p className="text-sm text-gray-600">${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default WomensClothing;
