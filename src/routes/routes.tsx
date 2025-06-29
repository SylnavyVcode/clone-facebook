// import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Register from "../pages/Auth/Register";
import Home from "../pages/home/Home";
import Login from "../pages/Auth/Login";
import User from "../pages/user/ProfilePage";
import Reset from "../pages/Auth/Reset";
import ResetPassword from "../pages/Auth/ResetPassword";
import ValidatePassword from "../pages/Auth/Validate";

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
      { path: "reset", element: <Reset /> },
      { path: "reset-password", element: <ResetPassword /> },
      { path: "validate", element: <ValidatePassword /> },
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
