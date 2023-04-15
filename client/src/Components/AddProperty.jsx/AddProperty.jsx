import React, { useState } from "react";
import "./AddProperty.css";
import axios from "axios";
export default function AddProperty() {
  const siteUrl = process.env.REACT_APP_siteUrl;
  const [image, setImage] = useState("");
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

    setInput({ ...Input, [name]: value });
  };

  const submit = async () => {
    const formData = new FormData();
    formData.append("image", image);
    Object.entries(Input).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const res = await axios.post(
      `${siteUrl}/property/add-property`,
      formData,
      { withCredentials: true }
    );
      alert(res.data.msg)
    setInput({
      title: "",
      type: "",
      price: "",
      area: "",
      country: "",
      location: "",
      description: "",
      currency: "",
      areaUnit: "",
    });
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
              onChange={(e) => setImage(e.target.files[0])}
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
              placeholder="Title for Property"
            />
          </label>
          <label htmlFor="type">
            <select name="type" onChange={handelInput} value={Input.type}>
              <option selected>Setect Property Type</option>
              <option value="Apartments">Apartments</option>
              <option value="House">House</option>
              <option value="Industrial">Industrial</option>
              <option value="vacant land">Vacant land</option>
              <option value="Villa">Villa</option>
              <option value="Cottage">Cottage</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label htmlFor="price">
            <select
              name="currency"
              onChange={handelInput}
              value={Input.currency}
            >
              <option value="&#x20B9;" selected>
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
              placeholder="Area or Size"
            />
            <select
              name="areaUnit"
              onChange={handelInput}
              value={Input.areaUnit}
            >
              <option value="sq ft" selected>
                sq ft
              </option>
              <option value="sq yd">sq yd</option>
              <option value="sq m">sq m</option>
              <option value="Acres">Acres</option>
              <option value="BHK">BHK</option>
              <option value="Bigha">Bigha</option>
            </select>
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
