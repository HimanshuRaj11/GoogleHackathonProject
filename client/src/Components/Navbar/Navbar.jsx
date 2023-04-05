import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
export default function Navbar(props) {
  console.log("jkhjh===" + props.cookie);
  return (
    <div className="navbar">
      <NavLink to="" className="logo">
        LOGO
      </NavLink>
      <div className="links">
        <NavLink to="" className="link">
          Home
        </NavLink>
        <NavLink to="" className="link">
          About
        </NavLink>
        <NavLink to="" className="link">
          Services
        </NavLink>
        <NavLink to="" className="link">
          Galary
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
            <NavLink to="#">
              <AiOutlineLogout className="icon" />
            </NavLink>
            <NavLink to="">
              <MdAccountCircle className="icon" />
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
