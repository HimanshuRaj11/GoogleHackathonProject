import React, { useEffect, useState } from "react";
import "./EditProperty.css";
import { useParams,useNavigate } from "react-router";
import axios from "axios";
export default function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [property, setProperty] = useState([]);
  const getPropertyData = async () => {
    const res = await axios.get("http://localhost:8000/property/find/" + id, {
      withCredentials: true,
    });
    setProperty(res.data);
  };
  const [image, setImage] = useState('')
const [Input, setInput] = useState({
    title: "",
    type: "",
    price: "",
    area: "",
    country: "",
    location: "",
    description: "",
  });

  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
   
    setProperty({ ...property, [name]: value});
  };

  const submit = async () => {
    const res = await axios.post("http://localhost:8000/property/update/" + id, property,{withCredentials: true});
    console.log(res.data);
    navigate('/profile')
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
            <input
              onChange={handelInput}
              value={property.price}
              type="text"
              name="price"
              placeholder="Price"
            />
          </label>
          <label htmlFor="area">
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
