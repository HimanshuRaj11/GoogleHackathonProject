import React, { useEffect, useState } from "react";
import "./DetailProperty.css";
import { useParams } from "react-router";
import axios from "axios";
import { MdLocationPin } from "react-icons/md";
import Description from "./Description";
import Reviews from "./Reviews";
import Feature from "./Feature";
import { useGlobalContext } from "../../Context/Context";
export default function DetailProperty() {
  const siteUrl = process.env.REACT_APP_siteUrl;
  const {SingleProperty, setSingleProperty} = useGlobalContext()
  const { id } = useParams();
  const getDetailProperty = async () => {
    const res = await axios.get(`${siteUrl}/property/find/` + id, {
      withCredentials: true,
    });
    setSingleProperty(res.data);
  };
  // toggle -----
  const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);

  const handleComponent1Click = () => {
    setShowComponent1(true);
    setShowComponent2(false);
    setShowComponent3(false);
  };

  const handleComponent2Click = () => {
    setShowComponent1(false);
    setShowComponent2(true);
    setShowComponent3(false);
  };

  const handleComponent3Click = () => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(true);
  };

  useEffect(() => {
    getDetailProperty();
  }, []);
  return (
    <div>
      {SingleProperty ? (
        <>
          <div className="propertyDetail d-f-fd-c">
            <div className="imgDiv">
              <img
                src={`${siteUrl}/images/${SingleProperty.image}`}
                alt=""
              />
            </div>
            <div className="details d-f-fd-c">
              <div className="head d-f-fd-c">
                <div className="title">{SingleProperty.title} </div>
                <div className="location">
                  {" "}
                  <MdLocationPin /> {SingleProperty.country} , {SingleProperty.location}
                </div>
              </div>
              <div className="mainDetail">
                <div className="navigate">
                  <span className="Nbtn" onClick={handleComponent1Click}>
                    Features
                  </span>
                  <span className="Nbtn" onClick={handleComponent2Click}>
                    Description
                  </span>
                  <span className="Nbtn" onClick={handleComponent3Click}>
                    Review
                  </span>
                </div>
                <hr />
                <div className="ExtraDetails">
                  <div>

                  {showComponent1 && <Feature />}
                  {showComponent2 && <Description />}
                  {showComponent3 && <Reviews />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
