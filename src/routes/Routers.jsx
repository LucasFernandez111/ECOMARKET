import React from "react";
import { Routes, Route } from "react-router-dom";
import Prueba from "../pages/Prueba";
import Example from "../components/Cards";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Prueba />} />
      <Route path="/Example" element={<Example />} />
      
    </Routes>
  );
};

export default Routers;
