import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProductDisplay from "../pages/Product";
import Home from "../pages/Home";
import Collection from "../pages/Collection";
import Checkout from "../pages/Checkout";
import { AnimatePresence } from "framer-motion";
import LoginPage  from "../Auth/LoginPage";
import RegistrationPage from "../Auth/RegistrationPage";
import Orders from "../pages/Orders";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route exact path="/collection/:id" element={<ProductDisplay />} />
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
