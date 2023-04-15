import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import Cookie from "js-cookie";
import Message from "../Message/Message";
import { useGlobalContext } from "../../Context/Context";
export default function Login() {
  const siteUrl = process.env.REACT_APP_siteUrl;
  const { getUser } = useGlobalContext();
  const navigate = useNavigate();
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handelInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const Login = async () => {
    const res = await axios.post(`${siteUrl}/auth/login`, user, {
      withCredentials: true,
    });
    setError(res.data.error);
    setSuccess(res.data.success);
    Cookie.set("realEstate", res.data.token, {
      // secure: true,
      sameSite: "strict",
      path: "/",
    });
    getUser();
    navigate("/");
  };

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
      {success ? <Message msg={success} Mtype="success" /> : ""}
      {error ? <Message msg={error} Mtype="error" /> : ""}
    </div>
  );
}
