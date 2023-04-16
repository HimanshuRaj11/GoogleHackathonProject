import React, { useEffect, useState } from "react";
import "./EditProperty.css";
import { useParams,useNavigate } from "react-router";
import axios from "axios";
import { useGlobalContext } from "../../Context/Context";
export default function EditProperty() {
  const {user} = useGlobalContext()
  const siteUrl = process.env.REACT_APP_siteUrl;
  const { id } = useParams();
  const navigate = useNavigate()
  const [property, setProperty] = useState([]);
  const getPropertyData = async () => {
    const res = await axios.get(`${siteUrl}/property/find/` + id, {
      withCredentials: true,
    });
    setProperty(res.data);
  };
  const [image, setImage] = useState('')

  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
   
    setProperty({ ...property, [name]: value});
  };

  const submit = async () => {
    const res = await axios.post(`${siteUrl}/property/update/` + id, property,{withCredentials: true});
    navigate(`/profile/property/${user._id}`)
    alert(res.data.msg);
  };
  useEffect(() => {
    getPropertyData();
  }, []);
  return (
    <div>
      <div className="form">
        <div className="detail">
          <label htmlFor="image">
            <input
                onChange={(e)=>setImage(e.target.files[0])}
              type="file"
              name="image"
            />
          </label>
          <label htmlFor="title">
            <input
              onChange={handelInput}
              value={property.title}
              type="text"
              name="title"
              placeholder="Title for Property"
            />
          </label>
          <label htmlFor="type">
            <select name="type" onChange={handelInput} value={property.type}>
              <option selected>Setect Property Type</option>
              <option value="Apartments">Apartments</option>
              <option value="House">House</option>
              <option value="Industrial">Industrial</option>
              <option value="vacant land">Vacant land</option>
              <option value="Villa">Villa</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label htmlFor="price">
          <select
              name="currency"
              onChange={handelInput}
              value={property.currency}
            >
              <option value="&#x20B9;" >
                &#x20B9;
              </option>
              <option value="&#x24;">&#x24;</option>
              <option value="&#xa3;">&#xa3;</option>
              <option value="&#x20AC;">&#x20AC;</option>
              <option value="&#x20BD;">&#x20BD;</option>
              <option value="&#xa5;">&#xa5;</option>
            </select>
            <input
              onChange={handelInput}
              value={property.price}
              type="text"
              name="price"
              placeholder="Price"
            />
          </label>
          <label htmlFor="area">
          <select
              name="areaUnit"
              onChange={handelInput}
              value={property.areaUnit}
            >
              <option value="sq ft">
                sq ft
              </option>
              <option value="sq yd">sq yd</option>
              <option value="sq m">sq m</option>
              <option value="Acres">Acres</option>
              <option value="BHK">BHK</option>
              <option value="Bigha">Bigha</option>
            </select>
          
            <input
              onChange={handelInput}
              value={property.area}
              type="text"
              name="area"
              placeholder="Area In Square meters"
            />
          </label>

          <label htmlFor="country">
            <input
              onChange={handelInput}
              value={property.country}
              type="text"
              name="country"
              placeholder="Country"
            />
          </label>
          <label htmlFor="location">
            <input
              onChange={handelInput}
              value={property.location}
              type="text"
              name="location"
              placeholder="Location of Property"
            />
          </label>

          <textarea
            onChange={handelInput}
            value={property.description}
            name="description"
            placeholder="Description of Property "
          ></textarea>
          <div>
            <button className="button" onClick={submit}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
