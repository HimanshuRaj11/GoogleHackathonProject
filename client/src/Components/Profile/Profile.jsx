import React, { useEffect } from "react";
import { Outlet } from "react-router";
import "./Profile.css";
import { useGlobalContext } from "../../Context/Context";
import { NavLink } from "react-router-dom";
export default function Profile() {
  const { getUser, user } = useGlobalContext();
  useEffect(() => {
    getUser();
  },[]);

  const profilemage =
    "https://cdn4.vectorstock.com/i/1000x1000/08/38/avatar-icon-male-user-person-profile-symbol-vector-20910838.jpg";
  return (
    <div className="ProfileContainer">
      <div className="userInfoSide">
        <div className="user">
          <img className="img" src={profilemage} alt="" />
          <div className="userDetail">
            {user ? (
              <>
                <NavLink to ={`/profile/user/${user._id}`} className="name">{user.username}</NavLink>
                <NavLink to ={`/profile/user/${user._id}`} className="email">{user.email}</NavLink>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <hr />
        <div className="userControll">
          <NavLink to ={`/profile/property/${user._id}`} className="span" >My Property</NavLink>
        </div>
      </div>
      <div className="content">
              <Outlet />
      </div>
    </div>
  );
}
