import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ListSections from "../components/ListSections";
import CarouselHome from "../components/CarouselHome";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Example" element={<ListSections />} />
      <Route path="/prueba" element={<CarouselHome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routers;
