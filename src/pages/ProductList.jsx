// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ProductList = ({ category }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let url = "https://fakestoreapi.com/products";
//     if (category) {
//       url += `/category/${category}`;
//     }
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       });
//   }, [category]);

//   if (loading) return <h1>Loading products...</h1>;

//   const filteredProducts = products.filter((product) => {
//     if (category === "electronics") return /laptop|monitor|tablet/i.test(product.title);
//     if (category === "jewelery") return /ring|bracelet|necklace/i.test(product.title);
//     if (category === "men's clothing") return /shirt|jacket|pants/i.test(product.title);
//     if (category === "women's clothing") return /dress|skirt|blouse/i.test(product.title);
//     return true;
//   });

//   return (
//     <div>
//       <h1>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : "Product List"}</h1>
//       {filteredProducts.length > 0 ? (
//         <ul>
//           {filteredProducts.map((product) => (
//             <li key={product.id}>
//               <img src={product.image} alt={product.title} width="50" />
//               {product.title} - ${product.price}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <h2>No products available</h2>
//       )}
//     </div>
//   );
// };

// export default ProductList;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ProductList = () => {
//   const { category } = useParams(); // Use useParams to get the category from the URL
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let url = "https://fakestoreapi.com/products";
//     if (category) {
//       url += `/category/${category}`;
//     }
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       });
//   }, [category]);

//   if (loading) return <h1>Loading products...</h1>;

//   const filteredProducts = products.filter((product) => {
//     if (category === "electronics")
//       return /laptop|monitor|tablet/i.test(product.title);
//     if (category === "jewelery")
//       return /ring|bracelet|necklace/i.test(product.title);
//     if (category === "men's clothing")
//       return /shirt|jacket|pants/i.test(product.title);
//     if (category === "women's clothing")
//       return /dress|skirt|blouse/i.test(product.title);
//     return true;
//   });

//   return (
//     <div>
//       <h1>
//         {category
//           ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products`
//           : "Product List"}
//       </h1>
//       {filteredProducts.length > 0 ? (
//         <ul>
//           {filteredProducts.map((product) => (
//             <li key={product.id}>
//               <img src={product.image} alt={product.title} width="50" />
//               {product.title} - ${product.price}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <h2>No products available</h2>
//       )}
//     </div>
//   );
// };

// export default ProductList;

//123456789
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import LoadingSpinner from "../components/LoadSpinner";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const url = category
          ? `https://fakestoreapi.com/products/category/${category}`
          : "https://fakestoreapi.com/products";
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="product-list-container">
      <h1 className="page-title">
        {category
          ? category.replace(/\b\w/g, (l) => l.toUpperCase())
          : "All Products"}
      </h1>
      <CategoryFilter currentCategory={category} />
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
