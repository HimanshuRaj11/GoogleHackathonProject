import { useEffect, useState } from "react";
import "./App.css";
import Cookie from "js-cookie";
import axios from "axios";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Profile from "./Components/Profile/Profile";
import Property from "./Components/Property/Property";
import AddProperty from "./Components/AddProperty.jsx/AddProperty";
import EditProperty from "./Components/EditProperty/EditProperty";
import DetailProperty from "./Components/DetailProperty/DetailProperty";
import SearchResult from "./Components/SearchResult/SearchResult";
import { useGlobalContext } from "./Context/Context";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import UserProperty from "./Components/Profile/UserProperty";
import UserData from "./Components/Profile/UserData";
function App() {
  const { getUser, user } = useGlobalContext();
  const [cookie, setCookie] = useState("");
  useEffect(() => {
    getUser();
    const token = Cookie.get("realEstate");
    setCookie(token);
  }, []);
  return (
    <div>
      <Navbar cookie={cookie} />
      <div className="container">
        <Routes>
          {user ? (
            <>
              <Route excat path="profile" element={<Profile />}>
                <Route excat path={`property/:id`} element={<UserProperty />}/>
                <Route excat path={`user/:id`} element={<UserData />} />
              </Route>
              <Route excat path="/:id" element={<EditProperty />} />
              <Route excat path="/add-property" element={<AddProperty />} />
            </>
          ) : (
            <></>
          )}
          <Route excat path="/" element={<Home />} />
          <Route excat path="/about-us" element={<About />} />
          <Route excat path="/services" element={<Services />} />
          <Route excat path="/register" element={<Register />} />
          <Route excat path="/login" element={<Login />} />
          <Route excat path="/search_property" element={<SearchResult />} />
          <Route
            excat
            path="/property_Detail/:id"
            element={<DetailProperty />}
          />
          <Route excat path="/property" element={<Property />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
