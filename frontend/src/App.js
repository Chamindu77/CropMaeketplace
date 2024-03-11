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
import PopupRegisterPage from "./components/PopupComponents/PopupRegisterPage";
import VegetablePage from "./components/CatogeryPages/VegetablePage/VegetablePage";
import FruitPage from "./components/CatogeryPages/FruitPage/FruitPage";
import GrainsPage from "./components/CatogeryPages/GrainsPage/GrainsPage";
import SpicesPage from "./components/CatogeryPages/SpicesPage/SpicesPage";
import OtherPage from "./components/CatogeryPages/OtherPage/OtherPage";

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
        <Route path="/register" element={<PopupRegisterPage />} />
        <Route path="/vegetable" element={<VegetablePage />} />
        <Route path="/fruit" element={<FruitPage />} />
        <Route path="/grain" element={<GrainsPage />} />
        <Route path="/spices" element={<SpicesPage />} />
        <Route path="/other" element={<OtherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
