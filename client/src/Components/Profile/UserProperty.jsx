import React,{useEffect} from "react";
import './Profile.css'
import { NavLink, useNavigate,useParams } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { BiPlusCircle } from "react-icons/bi";
import axios from "axios";
import { MdLocationPin } from "react-icons/md";
import { useGlobalContext } from "../../Context/Context";
export default function UserProperty() {

  const siteUrl = process.env.REACT_APP_siteUrl;  const {id} = useParams()
    const { UserProperty, getUserProperty} = useGlobalContext()
  const navigate = useNavigate();
  const deleteProperty = async (id) => {
    const res = await axios.get(`${siteUrl}/property/delete/` + id, {
      withCredentials: true,
    });
    console.log(res.data);
    navigate("/profile");
  };
  useEffect(()=>{
    getUserProperty(id);
  },[])
  return (
    <div>
      <div className="userDataSide">
        <div className="heading">
          {" "}
          <h1> My Properties</h1>
        </div>
        <hr />
        {UserProperty ? (
          <>
            <div className="properties">
              {UserProperty.map((Property, i) => {
                return (
                  <div className="card" key={i + 1}>
                    <NavLink to={`/property_Detail/${Property._id}`}>
                      <img
                        className="img"
                        src={`http://localhost:8000/images/${Property.image}`}
                        alt=""
                      />
                    </NavLink>
                    <div className="details">
                    <div className="button">
                        <NavLink className="btn" to={`/${Property._id}`}>
                          <MdEdit className="icon edit" />
                        </NavLink>
                        <span
                          className="btn "
                          onClick={() => deleteProperty(Property._id)}
                        >
                          <MdDelete className="icon delete" />
                        </span>
                      </div>
                      <div className="head">
                        <NavLink
                          to={`/property_Detail/${Property._id}`}
                          className="title"
                        >
                          {Property.title}
                        </NavLink>
                        <h3>
                          <MdLocationPin /> {Property.country} ,{" "}
                          {Property.location}
                        </h3>
                      </div>
                      <div className="m-detail">
                        <span className="price">{Property.price}</span>
                        <span className="area">{Property.area}</span>
                        <span className="price"></span>
                      </div>
                     
                    </div>
                  </div>
                );
              })}

              <div className="Addcard">
                <NavLink to="/add-property" className="add-Link">
                  <BiPlusCircle className="AddIcon" />
                  <h1>Add Property</h1>
                </NavLink>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
