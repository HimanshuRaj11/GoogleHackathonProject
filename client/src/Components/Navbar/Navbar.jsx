import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineLogout } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import axios from "axios";
import Message from "../Message/Message";
import { useGlobalContext } from "../../Context/Context";

export default function Navbar() {
  const siteUrl = process.env.REACT_APP_siteUrl;
  const { user, setUser } = useGlobalContext();

  const {ToggelM , setToggel} = useState(true)

  const [success, setSuccess] = useState();
  const navigate = useNavigate();
  const logout = async () => {
    const res = await axios.get(`${siteUrl}/auth/logout`, {
      withCredentials: true,
    });
    setSuccess(res.data.success);
    setUser("");
    navigate("/login");
  };
  const toggel = ()=>{
    setToggel(!ToggelM)
  }
  useEffect(() => {
    // getUser()
  }, []);
  return (
    <div className="navbar">
      <div className="navControl">
        {
          ToggelM ? <GiHamburgerMenu onClick={toggel} className="hamberger"/> 
          :
          <ImCross onClick={toggel} className="cross"/>
        }
      </div>
      <NavLink to="/" className="logo">
        Real Estate
      </NavLink>
      <div className="links">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/about-us" className="link">
          About
        </NavLink>
        <NavLink to="/services" className="link">
          Services
        </NavLink>
        <NavLink to="/property" className="link">
          Property
        </NavLink>
      </div>
      <div className="authLink">
        {!user ? (
          <NavLink to="/login">
            <IoMdLogIn className="icon" />
          </NavLink>
        ) : (
          <>
            <span onClick={logout}>
              <AiOutlineLogout className="icon" />
            </span>
            <NavLink to="/profile">
              <MdAccountCircle className="icon" />
            </NavLink>
          </>
        )}
      </div>
      {success ? <Message msg={success} Mtype="success" /> : ""}
    </div>
  );
}
