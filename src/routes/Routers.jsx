import React from "react";
import { Routes, Route } from "react-router-dom";
import Prueba from "../pages/Prueba";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Prueba />} />
    </Routes>
  );
};

export default Routers;
