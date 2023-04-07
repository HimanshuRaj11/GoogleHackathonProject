import React, { useState } from "react";
import "./AddProperty.css";
import axios from 'axios'
export default function AddProperty() {
  const [Input, setInput] = useState({
    title: "",
    type: "",
    price: "",
    area: "",
    forSell: "",
    country: "",
    location: "",
    description: "",
  });

  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...Input, [name]: value });
  };
  const submit = async() => {
    console.log(Input);
      const res = await axios.post('http://localhost:8000/property/add-property', Input,{ withCredentials: true })
      console.log(res.data);

  };
  return (
    <div className="AddProperty">
      <div className="heading">
        <h1> ADD Your Properties</h1>
      </div>
      <div className="form">
        <div className="detail">
          <label htmlFor="image">
            <input
              onChange={handelInput}
              value={Input.image}
              type="file"
              name="image"
            />
          </label>
          <label htmlFor="title">
            <input
              onChange={handelInput}
              value={Input.title}
              type="text"
              name="title"
              placeholder="Name of Property"
            />
          </label>
          <label htmlFor="type">
            <select name="type" onChange={handelInput} value={Input.type}>
              <option selected>
                Setect Property Type
              </option>
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
              value={Input.price}
              type="text"
              name="price"
              placeholder="Price"
            />
          </label>
          <label htmlFor="area">
            <input
              onChange={handelInput}
              value={Input.area}
              type="text"
              name="area"
              placeholder="Area In Square meters"
            />
          </label>
          <label htmlFor="forSell">
            <span>Is For sell</span>
            <input
              onChange={handelInput}
              value={Input.forSell}
              type="checkbox"
              name="forSell"
            />
          </label>
          <label htmlFor="country">
            <input
              onChange={handelInput}
              value={Input.country}
              type="text"
              name="country"
              placeholder="Country"
            />
          </label>
          <label htmlFor="location">
            <input
              onChange={handelInput}
              value={Input.location}
              type="text"
              name="location"
              placeholder="Location of Property"
            />
          </label>

          <textarea
            onChange={handelInput}
            value={Input.description}
            name="description"
            placeholder="Description of Property "
          ></textarea>
          <div>
            <button className="button" onClick={submit}>
              ADD +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
