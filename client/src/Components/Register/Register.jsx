import React, { useState } from "react";
import "./Register.css";
import { NavLink } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import axios from "axios";
import Cookie from "js-cookie";
// import {SetCookie, GetCookie}  from '../auth/Cookie'
// import { useGlobalContext } from '../../Context/GlobalContext'
export default function Register() {
  // const {setCookie} = useGlobalContext();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });
  const handelInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const Register = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/auth/register",
        user,
        { withCredentials: true }
      );
      console.log(res.data.token);
      Cookie.set("realEstate", res.data.token, {
        expires: 1,
        // secure: true,
        sameSite: "strict",
        path: "/",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register">
      <div className="form">
        <input
          type="text"
          value={user.name}
          name="name"
          onChange={handelInputs}
          placeholder="Name"
        />
        <input
          type="text"
          value={user.username}
          name="username"
          onChange={handelInputs}
          placeholder="Username"
        />
        <input
          type="email"
          value={user.email}
          name="email"
          onChange={handelInputs}
          placeholder="Email"
        />
        <input
          type="password"
          value={user.password}
          name="password"
          onChange={handelInputs}
          placeholder="Password"
        />
        <input
          type="password"
          value={user.ConfirmPassword}
          name="ConfirmPassword"
          onChange={handelInputs}
          placeholder="Confirm Password"
        />
        <div className="loginbtn">
          <NavLink to="/login"> Already have an Account.</NavLink>
        </div>
        <button className="btn" onClick={Register}>
          Register <IoMdLogIn className="icon" />
        </button>
      </div>
    </div>
  );
}
