import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Landing from "./Pages/Landing/landing.jsx";
import Login from "./Pages/Login/login.jsx";
import Register from "./Pages/Registration/register.jsx";
import Dashboard from "./Pages/Dashboard/dashboard.jsx";
import CreateBlog from "./Pages/Create-Edit_Blog/createBlog.jsx";
import NoPage from "./Pages/Errors/NoPage.jsx";
import Home from "./Pages/Home/Home.jsx";
import Explore from "./Pages/Explore/Explore.jsx";
import DetailedBlog from "./components/HomeComps/DetailedBlog.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/detailed-blog" element={<DetailedBlog />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
