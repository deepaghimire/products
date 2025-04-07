// // Fetch all products
// export const getProducts = async () => {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     if (!response.ok) throw new Error("Failed to fetch products");
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// };

// // Fetch single product
// export const getProduct = async (id) => {
//   try {
//     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//     if (!response.ok) throw new Error("Failed to fetch product");
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     return null;
//   }
// };

// // Fetch categories
// export const getCategories = async () => {
//   try {
//     const response = await fetch(
//       "https://fakestoreapi.com/products/categories"
//     );
//     if (!response.ok) throw new Error("Failed to fetch categories");
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];
//   }
// };

// // Fetch products by category
// export const getProductsByCategory = async (category) => {
//   try {
//     const response = await fetch(
//       `https://fakestoreapi.com/products/category/${category}`
//     );
//     if (!response.ok) throw new Error("Failed to fetch category products");
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching category products:", error);
//     return [];
//   }
// };
