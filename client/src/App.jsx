import { useEffect, useState } from "react";
import "./App.css";
import Cookie from "js-cookie";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home/Home';
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
function App() {
const [cookie, setCookie] = useState("")
  useEffect(()=>{
    const token = Cookie.get("realEstate");
    setCookie(token)
  },[])
  return (
    <div>
      <Navbar cookie={cookie} />
      <div className="container">
        <Routes>
          <Route excat path="/" element={<Home />} />
          <Route excat path="/register" element={<Register />} />
          <Route excat path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
