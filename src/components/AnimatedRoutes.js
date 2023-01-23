import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProductDisplay from "../pages/Product";
import Home from "../pages/Home";
import Collection from "../pages/Collection";
import Checkout from "../pages/Checkout";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route exact path="/collection/:id" element={<ProductDisplay />} />
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
