import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import Cookie from "js-cookie";
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handelInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const Login = async()=>{
    const res = await axios.post("http://localhost:8000/auth/login",user,{ withCredentials: true })
    console.log(res.data.token);
    Cookie.set("realEstate", res.data.token, {
      expires: 1,
      // secure: true,
      sameSite: "strict",
      path: "/",
    });
  }

  return (
    <div className="login">
      <div className="form">
        <input
          type="email"
          name="email"
          onChange={handelInputs}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          onChange={handelInputs}
          id=""
          placeholder="Password"
        />
        <div className="registerbtn">
          <NavLink to="/register"> Don't have an Account.</NavLink>
        </div>
        <div className="registerbtn">
          <NavLink to="/forgotPassword"> Forgot Password</NavLink>
        </div>
        <button className="btn" onClick={Login}>
          Login <IoMdLogIn className="icon" />
        </button>
      </div>
    </div>
  );
}
