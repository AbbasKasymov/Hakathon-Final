import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Accessories from "./pages/Accessories";
import AddproductPage from "./pages/AddproductPage";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import CellPhones from "./pages/CellPhones";
import EditPage from "./pages/EditPage";
import FiveG from "./pages/FiveG";
import Hotspots from "./pages/Hotspots";
import MainPage from "./pages/MainPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Smartwatches from "./pages/Smartwatches";
import Tablets from "./pages/Tablets";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/admin-panel" element={<AdminPage />} />
        <Route path="/admin-panel/add" element={<AddproductPage />} />
        <Route path="/admin-panel/edit/:id" element={<EditPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/category/accessories" element={<Accessories />} />
        <Route path="/category/cellphones" element={<CellPhones />} />
        <Route path="/category/fiveG" element={<FiveG />} />
        <Route path="/category/tablets" element={<Tablets />} />
        <Route path="/category/hotspots" element={<Hotspots />} />
        <Route path="/category/smartwatches" element={<Smartwatches />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/details/:id" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
