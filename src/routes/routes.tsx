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

// import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
// import Home from "./pages/Home";
// import HomeChild1 from "./pages/HomeChild1";
// import HomeChild2 from "./pages/HomeChild2";
// import About from "./pages/About";
// import ErrorPage from "./pages/ErrorPage";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />, // Layout principal
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "home", // Route parent
//         element: <Home />,
//         children: [
//           { path: "child1", element: <HomeChild1 /> }, // Enfant 1
//           { path: "child2", element: <HomeChild2 /> }, // Enfant 2
//         ],
//       },
//       { path: "about", element: <About /> },
//     ],
//   },
// ]);
