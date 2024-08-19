import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import Cricket from "./pages/Cricket";
import Badminton from "./pages/Badminton";
import Hockey from "./pages/Hockey";
import Boxing from "./pages/Boxing";
import Football from "./pages/Football";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";

import Logout from "./components/Logout";

import CricketProducts from "./pages/CricketProducts";
import BatProducts from "./pages/BatProducts";
import BasketballProducts from "./pages/BasketballProducts";
import CarromProducts from "./pages/CarromProducts";
import TennisRackets from "./pages/TennisRackets";
import ViewCart from "./components/cart";


const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/',
});

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('jwtToken'));

  axiosInstance.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';

  const handleSetToken = (token) => {
    setToken(token);
    localStorage.setItem('jwtToken', token);
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cricket" element={<Cricket />} />
        <Route path="/badminton" element={<Badminton />} />
        <Route path="/hockey" element={<Hockey />} />
        <Route path="/boxing" element={<Boxing />} />
        <Route path="/football" element={<Football />} />
        <Route path="/login" element={<Login setToken={handleSetToken} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/cricketproducts" element={<CricketProducts />} />
        <Route path="/batproducts" element={<BatProducts />} />
        <Route path="/basketballproducts" element={<BasketballProducts />} />
        <Route path="/carromproducts" element={<CarromProducts />} />
        <Route path="/tennisproducts" element={<TennisRackets />} />
        <Route path="/cart" element={<ViewCart/>}/>
      </Routes>
    </Router>
  );
};

export default App;
