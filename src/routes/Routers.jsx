import React from "react";
import { Routes, Route } from "react-router-dom";
import Example from "../components/Example";
import Home from "../pages/Home";
import ListSections from "../components/ListSections";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Example" element={<ListSections />} />
    </Routes>
  );
};

export default Routers;
