import React from "react";
import { Routes, Route } from "react-router-dom";
import Example from "../components/Example";
import Home from "../pages/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/Example" element={<Example />} />
    </Routes>
  );
};

export default Routers;
