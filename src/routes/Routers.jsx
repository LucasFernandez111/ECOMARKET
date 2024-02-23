import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ListSections from "../components/ListSections";
import Component from "../components/CarouselHome";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Example" element={<ListSections />} />
      <Route path="/prueba" element={<Component />} />
    </Routes>
  );
};

export default Routers;
