import React, { useState } from "react";
import "./Register.css";
import { NavLink,useNavigate } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import axios from "axios";
import Cookie from "js-cookie";
import { useGlobalContext } from "../../Context/Context";
export default function Register() {
  const siteUrl = process.env.REACT_APP_siteUrl;
  const {getUser,user }= useGlobalContext()
  const navigate = useNavigate();
  const [Inputuser, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });
  const handelInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...Inputuser, [name]: value });
  };
  const Register = async () => {
    try {
      const res = await axios.post(
        `${siteUrl}/auth/register`,
        Inputuser,
        { withCredentials: true }
      );
      alert(res.data.msg)
      Cookie.set("realEstate", res.data.token, {
        // secure: true,
        sameSite: "strict",
        path: "/",
      });
      getUser()
      navigate(`/profile`);
      return 0
    } catch (error) {
      const message = error.response.data
      alert(message.msg)
    }
  };
  return (
    <div className="register">
      <div className="form">
        <input
          type="text"
          value={Inputuser.name}
          name="name"
          onChange={handelInputs}
          placeholder="Name"
        />
        <input
          type="text"
          value={Inputuser.username}
          name="username"
          onChange={handelInputs}
          placeholder="Username"
        />
        <input
          type="email"
          value={Inputuser.email}
          name="email"
          onChange={handelInputs}
          placeholder="Email"
        />
        <input
          type="password"
          value={Inputuser.password}
          name="password"
          onChange={handelInputs}
          placeholder="Password"
        />
        <input
          type="password"
          value={Inputuser.ConfirmPassword}
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
