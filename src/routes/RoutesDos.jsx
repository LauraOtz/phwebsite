import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Fifteen from "../pages/Fifteen";
import Family from "../pages/Family";
import Concerts from "../pages/Concerts";
import Advertising from "../pages/Advertising";
import Weddings from "../pages/Weddings";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

const RoutesDos = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/fifteen" element={<Fifteen />} />
      <Route path="/family" element={<Family />} />
      <Route path="/concerts" element={<Concerts />} />
      <Route path="/advertising" element={<Advertising />} />
      <Route path="/weddings" element={<Weddings />} />
    </Routes>
  );
};

export default RoutesDos;
