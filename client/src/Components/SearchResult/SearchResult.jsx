import React from "react";
import "./SearchResult.css";
import Search from "../Search/Search";
import { MdLocationPin } from "react-icons/md";
import { useGlobalContext } from "../../Context/Context";
import { NavLink } from "react-router-dom";
export default function SearchResult() {
  const { searchProperty } = useGlobalContext();
  return (
    <div className="searchResultContainer">
      <Search />
      <div className="container">
        {searchProperty ? (
          <>
            <div className="searchResult">
              {searchProperty.map((property, i) => {
                return (
                  <>
                    <div className="card" key={i + 1}>
                      <img
                        className="img"
                        src={`http://localhost:8000/images/${property.image}`}
                        alt=""
                      />
                      <div className="details">
                        <div className="head">
                          <NavLink className='title'>{property.title}</NavLink>
                          <h3>
                            <MdLocationPin /> {property.country} ,{" "}
                            {property.location}
                          </h3>
                        </div>
                        <div className="m-detail">
                          <span className="price">{property.currency} {property.price}</span>
                          <span className="area">{property.areaUnit} {property.area}</span>
                          <span className="price"></span>
                        </div>
                        <div className="contact">
                        <NavLink to={`broker/${property.currentOwner}`} className='button'>Connect To Broker</NavLink>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
