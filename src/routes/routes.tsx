// import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Register from "../pages/Auth/RegisterPage";
import Home from "../pages/home/HomePage";
import Login from "../pages/Auth/LoginPage";
import User from "../pages/user/UserPage";

export const routeur = createBrowserRouter([
  // Redirection par défaut vers la page de login
  {
    path: "/",
    element: <Navigate to="/auth/login" replace />,
  },

  // Routes d'authentification
  {
    path: "auth",
    children: [
      { index: true, element: <Navigate to="login" replace /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },

  {
    path: "home",
    element: <Home />,
  },
  {
    path: "user",
    element: <User />,
  },

  // Gestion des routes inconnues
  {
    path: "*",
    element: <Navigate to="/auth/login" replace />,
  },
]);
export default routeur;
