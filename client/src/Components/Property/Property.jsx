import React,{useEffect} from "react";
import "./Property.css";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import { MdLocationPin } from "react-icons/md";
import { useGlobalContext } from "../../Context/Context";
export default function Property() {

 const {getProperty,Properties} =useGlobalContext()

useEffect(()=>{
  getProperty()
},[])

  return (
    <div className="PropertyContainer">
<Search />

      <div className="properties">

        {
         Properties.map((Property, i)=>{
          return(
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
          )
         })
        }
       

      </div>
    </div>
  );
}
