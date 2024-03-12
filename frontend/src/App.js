import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FarmerPage from "./components/FarmerPage/FarmerPage";
import ProductPage from "./components/ProductPage/ProductPage";
import HomePage from "./components/HomePage/HomePage";
import SellerPage from "./components/SellerPage/SellerPage";
import FarmerSellerPage from "./components/FarmerSellerPage/FarmerSellerPage";
import SellerOrderPage from "./components/Orders/SellerOrders/SellerOrderPage";
import FarmerOrderPage from "./components/Orders/FarmerOrders/FarmerOrderPage";
import DeliveryPostPage from "./components/Orders/DeliveryPosts/DeliveryPosts";
import DeliverymanPage from "./components/DeliverymanPage/DeliverymanPage";
//import Register from "./components/Register/RegisterPage";
import RegisterPage from "./components/Register/RegisterPage";
import VegetablePage from "./components/CatogeryPages/VegetablePage/VegetablePage";
import FruitPage from "./components/CatogeryPages/FruitPage/FruitPage";
import GrainsPage from "./components/CatogeryPages/GrainsPage/GrainsPage";
import SpicesPage from "./components/CatogeryPages/SpicesPage/SpicesPage";
import OtherPage from "./components/CatogeryPages/OtherPage/OtherPage";
import RegUserHomePage from "./components/AfterRegistered/RegUserHomePage/RegUserHomePage";
import Login from "./components/Login/Login";
import OrderPage from "./components/OrderPage/OrderPage";
//import CatogeryPage from "./components/CatogeryPages/CatogeryPage";
import RegFarmer from "./components/AfterRegistered/RegFarmerPage/RegFarmerPage";
import RegVegetablePage from "./components/AfterRegistered/RegVegetablePage/RegVegetablePage";
import RegFruitPage from "./components/AfterRegistered/RegFruitPage/RegFruitPage";
import RegOtherPage from "./components/AfterRegistered/RegOtherPage/RegOtherPage";
import RegSpicesPage from "./components/AfterRegistered/RegSpicesPage/RegSpicesPage";
import RegGrainsPage from "./components/AfterRegistered/RegGrainsPage/RegGrainsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/farmer" element={<FarmerPage />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/both" element={<FarmerSellerPage />} />
        <Route path="/deliveryman" element={<DeliverymanPage />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/sellerorder" element={<SellerOrderPage />} />
        <Route path="/farmerorder" element={<FarmerOrderPage />} />
        <Route path="/deliverypost" element={<DeliveryPostPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/vegetable" element={<VegetablePage />} />
        <Route path="/fruit" element={<FruitPage />} />
        <Route path="/grain" element={<GrainsPage />} />
        <Route path="/spices" element={<SpicesPage />} />
        <Route path="/other" element={<OtherPage />} />
        <Route path="/homepage-registeredusers" element={<RegUserHomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/regfarmer" element={<RegFarmer />} />
        <Route path="/regvegetable" element={<RegVegetablePage />} />
        <Route path="/regfruit" element={<RegFruitPage />} />
        <Route path="/reggrain" element={<RegGrainsPage />} />
        <Route path="/regspices" element={<RegSpicesPage />} />
        <Route path="/regother" element={<RegOtherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
