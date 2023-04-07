import React from "react";
import "./Profile.css";
import { NavLink } from "react-router-dom";
import {MdDelete,MdEdit} from 'react-icons/md'
import {BiPlusCircle} from 'react-icons/bi'
export default function Profile() {
  const profilemage =
    "https://cdn4.vectorstock.com/i/1000x1000/08/38/avatar-icon-male-user-person-profile-symbol-vector-20910838.jpg";
  return (
    <div className="ProfileContainer">
      <div className="userInfoSide">
        <div className="user">
          <img className="img" src={profilemage} alt="" />
          <div className="userDetail">
            <span className="name">Himanshu</span>
            <span className="email">Himanshu@gmail.com</span>
          </div>
        </div>
        <hr />
        <div className="userControll"></div>
      </div>
      <div className="userDataSide">
        <div className="heading"> <h1> My Properties</h1></div>
        <hr />
        <div className="properties">

            <div className="card">
               <NavLink to=''>
                 <img  className="img" src={require('../../assets/estate.jpg')} alt="" />
                <div className="propDetail">
                    <div className="propinfo">
                        <span className="name">Honted House</span>
                        <span className="price">&#x20B9; 549999</span>
                    </div>
                    <div className="propSpecification">
                        <span>Type: <p>Banglo</p></span>
                        <span>Area : <p>458 Sqm</p></span>
                        <span>City : <p>shimla</p></span>
                    </div>
                    <div className="button">
                        <NavLink className="btn" to=""><MdEdit className="icon"  /> </NavLink>
                        <span className="btn">< MdDelete className="icon" /></span>
                    </div>
                </div>
                </NavLink>
            </div>
           
            <div className="card">
               <NavLink to=''>
                 <img  className="img" src={require('../../assets/estate.jpg')} alt="" />
                <div className="propDetail">
                    <div className="propinfo">
                        <span className="name">Honted House</span>
                        <span className="price">&#x20B9; 549999</span>
                    </div>
                    <div className="propSpecification">
                        <span>Type: <p>Banglo</p></span>
                        <span>Area : <p>458 Sqm</p></span>
                        <span>City : <p>shimla</p></span>
                    </div>
                    <div className="button">
                        <NavLink className="btn" to=""><MdEdit className="icon"  /> </NavLink>
                        <span className="btn">< MdDelete className="icon" /></span>
                    </div>
                </div>
                </NavLink>
            </div>
           
            <div className="Addcard">
               <NavLink to='/add-property' className="add-Link">
                 <BiPlusCircle className="AddIcon" />
                 <h1>Add Property</h1>
                </NavLink>
            </div>
           
        </div>
      </div>
    </div>
  );
}
