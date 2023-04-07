import React from "react";
import "./Property.css";
import { MdDelete, MdEdit } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search";

export default function Property() {
  return (
    <div className="PropertyContainer">
<Search />

      <div className="properties">
        <div className="card">
          <NavLink to="">
            <img
              className="img"
              src={require("../../assets/estate.jpg")}
              alt=""
            />
            <div className="propDetail">
              <div className="propinfo">
                <span className="name">Honted House</span>
                <span className="price">&#x20B9; 549999</span>
              </div>
              <div className="propSpecification">
                <span>
                  Type: <p>Banglo</p>
                </span>
                <span>
                  Area : <p>458 Sqm</p>
                </span>
                <span>
                  City : <p>shimla</p>
                </span>
              </div>
            </div>
          </NavLink>
        </div>

      </div>
    </div>
  );
}
