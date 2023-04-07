import React from "react";
import "./Home.css";
import Search from "../Search/Search";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div className="Home">
      <Search />

      <div className="heading">
        {" "}
        <h1> Top Rated Properties</h1>
      </div>
      <hr />
      {/* Prorperties  */}
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
      {/* Work Flow Component */}

      <div className="workFlowContainer">
        <div className="workflow">
          <div className="textSide">
            <div className="topdiv">
              <p>
                <span></span> WORK FLOW <span></span>
              </p>
              <h1>How its Work</h1>
            </div>
            <div className="detailDiv">


              <div className="card">
                <span className="number">01</span>
                <div className="cardText">
                  <h2>Evaluate Property</h2>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
              <div className="card">
                <span className="number">02</span>
                <div className="cardText">
                  <h2>Meet Your Agent</h2>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
              <div className="card">
                <span className="number">03</span>
                <div className="cardText">
                  <h2>Close the Deal</h2>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
              <div className="card">
                <span className="number">04</span>
                <div className="cardText">
                  <h2>Have Your Property</h2>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
