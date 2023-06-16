// Router.tsx
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import City from "../pages/City.tsx";
import Home from "../pages/Home.tsx";
import Country from "../pages/Country.tsx";
import Sidebar from "./Sidebar.tsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/city" element={<City />} />
        <Route path="/country" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
