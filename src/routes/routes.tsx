// import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../pages/Auth/RegisterPage";
import Home from "../pages/HomePage";
import Login from "../pages/Auth/LoginPage";
import { useState, useEffect } from "react";
import ProtectedRoute from "./protectionRoute";

const Routeur = () => {
  // Gestion de l'authentification
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem("auth") === "true"
  );

  // Simulation de la perte de session après un certain temps (ou token invalide)
  useEffect(() => {
    const token = localStorage.getItem("auth");
    if (!token) setIsAuthenticated(false);
  }, []);

  // const handleLogin = () => {
  //   localStorage.setItem("auth", "true");
  //   setIsAuthenticated(true);
  // };

  // const handleLogout = () => {
  //   localStorage.removeItem("auth");
  //   setIsAuthenticated(false);
  // };

  return (
    <>
      <Routes>
        {/* Routes d'authentification */}
        <Route path="/auth">
          <Route index element={<Navigate to="/auth/login" />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="login" element={<Login onLogin={handleLogin} />} /> */}
          <Route path="register" element={<Register />} />
          {/* <Route path="reset" element={<ResetPassword />} />
          <Route path="validate" element={<ValidateAccount />} /> */}
        </Route>

        {/* Routes protégées */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Home onLogout={handleLogout} />} /> */}
        </Route>

        {/* Redirection pour les routes inconnues */}
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes> */}
    </>
  );
};

export default Routeur;
