import React, { useEffect } from "react";
import "./Home.css";
import Search from "../Search/Search";
import { NavLink } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { useGlobalContext } from "../../Context/Context";
export default function Home() {
  const { getProperty, Properties } = useGlobalContext();

  useEffect(() => {
    getProperty();
  }, []);

  return (
    <div className="Home">
      <Search />

      <div className="heading">
        <h1> Recent posted Properties</h1>
        <hr />
      </div>
      {/* Prorperties  */}
      <div className="properties">
        {Properties.slice(0, 6).map((Property, i) => {
          return (
            <>
              <div className="card" key={i + 1}>
                <NavLink to={`/property_Detail/${Property._id}`}>
                  <img
                    className="img"
                    src={`http://localhost:8000/images/${Property.image}`}
                    alt=""
                  />
                </NavLink>
                <div className="details">
                  <div className="head">
                    <NavLink
                      to={`/property_Detail/${Property._id}`}
                      className="title"
                    >
                      {Property.title}
                    </NavLink>
                    <h3>
                      <MdLocationPin /> {Property.country} , {Property.location}
                    </h3>
                  </div>
                  <div className="m-detail">
                    <span className="price">{Property.price}</span>
                    <span className="area">{Property.area}</span>
                    <span className="price"></span>
                  </div>
                  <div className="contact">
                    <button>Connect To Broker</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
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
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="card">
                <span className="number">02</span>
                <div className="cardText">
                  <h2>Meet Your Agent</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="card">
                <span className="number">03</span>
                <div className="cardText">
                  <h2>Close the Deal</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="card">
                <span className="number">04</span>
                <div className="cardText">
                  <h2>Have Your Property</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
