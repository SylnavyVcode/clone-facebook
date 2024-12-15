// import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/AuthPage";
import Home from "../pages/HomePage";

const Routeur = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default Routeur;
