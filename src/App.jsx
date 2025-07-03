import React from "react";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetail";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import MensClothing from "./pages/MensClothingPage";
import WomensClothing from "./pages/WomensClothingPage";
import Jewellery from "./pages/JeweleryPage";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginForm from "./components/login";
import RegisterPage from "./components/register";
import "./App.css";
function UserLayout() {
  return (
    <>
      <Header />
      <div className="min-h-[83dvh] pt-20">
        <Outlet />
      </div>

      <Sidebar />
      <Footer />
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route index element={<Home />} />
          <Route path="/MensClothing" element={<MensClothing />} />
          <Route path="/WomensClothing" element={<WomensClothing />} />
          <Route path="/Jewellery" element={<Jewellery />} />
          <Route path="/contact-info" element={<LoginForm />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Add more routes if needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
