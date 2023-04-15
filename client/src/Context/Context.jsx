import { useState, createContext, useContext } from "react";
import axios from "axios";

const createGlobalContext = createContext();
export const useGlobalContext = () => useContext(createGlobalContext);

export const GlobalContextProvider = (props) => {
  // Get User
  const [user, setUser] = useState();
  const getUser = async () => {
    try {
      const res = await axios.get("http://localhost:8000/auth/getUser", {
        withCredentials: true,
      });
      setUser(res.data.user);
    } catch (error) {}
  };

  // Get all properties
  const [Properties, setProperty] = useState([]);
  const [SingleProperty, setSingleProperty] = useState({});
  const getProperty = async () => {
    const res = await axios.get("http://localhost:8000/property/getAll");
    console.log(res.data);
    setProperty(res.data);
  };
  // get User Property
  const [UserProperty, setUserProperty] = useState([]);
  const getUserProperty = async (id) => {
    const res = await axios.get(`http://localhost:8000/property/` + id, {
      withCredentials: true,
    });
    setUserProperty(res.data.property);
  };
  // get Search Data
  const [searchProperty, setSearchProperty] = useState();

  const value = {
    user,
    setUser,
    getUser,
    UserProperty,
    setUserProperty,
    getUserProperty,
    SingleProperty,
    setSingleProperty,
    Properties,
    getProperty,
    searchProperty,
    setSearchProperty,
  };
  return (
    <createGlobalContext.Provider value={value}>
      {props.children}
    </createGlobalContext.Provider>
  );
};
