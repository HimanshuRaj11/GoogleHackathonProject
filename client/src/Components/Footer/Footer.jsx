import React from "react";
import { NavLink } from "react-router-dom";
import {AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="topFooter">
        <div className="row">
          <NavLink to="#" className="footerMainLink">
            Services
          </NavLink>
          <NavLink to="#" className="footerLink">
            Sell Property
          </NavLink>
          <NavLink to="#" className="footerLink">
            buy Property
          </NavLink>
        </div>
        <div className="row">
          <NavLink to="#" className="footerMainLink">
            About
          </NavLink>
          <NavLink to="#" className="footerLink">
            Company
          </NavLink>
          <NavLink to="#" className="footerLink">
            Team
          </NavLink>
        </div>
      </div>
      <hr />
      <div className="lower">
        <div className="links">
            <NavLink to="" className="link">Home</NavLink>
            <NavLink to="" className="link">About</NavLink>
            <NavLink to="" className="link">Services</NavLink>
            <NavLink to="" className="link">Profile</NavLink>
        </div>
        <div className="text">
        Copyright @2017 | Designed With by <NavLink to='#'>Company</NavLink>
        </div>
        <div className="socialMedia">
            <NavLink to="#"><AiFillInstagram className="icon" /></NavLink>
            <NavLink to="#"><AiFillLinkedin className="icon" /></NavLink>
            <NavLink to="#"><AiFillInstagram className="icon" /></NavLink>
        </div>
      </div>
    </div>
  );
}
