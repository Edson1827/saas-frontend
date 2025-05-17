import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PublicRifa from "./pages/PublicRifa";
import ProfileEdit from "./pages/ProfileEdit";
import LandingPage from "./pages/LandingPage";

const isAuthenticated = () => !!localStorage.getItem("token");

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/rifa/:id" element={<PublicRifa />} />
        <Route path="/perfil" element={isAuthenticated() ? <ProfileEdit /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
