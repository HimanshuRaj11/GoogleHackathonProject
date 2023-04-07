import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import axios from 'axios'
export default function Navbar(props) {
  console.log(props);
  const  logout = async()=>{
      const res = await axios.post('http://localhost:8000/auth/logout',{ withCredentials: true })
      console.log(res.data);
    }

  return (
    <div className="navbar">
      <NavLink to="/" className="logo">
        LOGO
      </NavLink>
      <div className="links">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/about" className="link">
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
        {!props.cookie? (
          (
            <NavLink to="/login">
              <IoMdLogIn className="icon" />
            </NavLink>
          )
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
    </div>
  );
}
