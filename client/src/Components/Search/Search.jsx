import React,{useState} from "react";
import "./Search.css";
import { useNavigate } from "react-router";
import {FaSearch} from 'react-icons/fa'
import axios from "axios";
import { useGlobalContext } from "../../Context/Context";
export default function Search() {
  const siteUrl = process.env.REACT_APP_siteUrl;
  const {setSearchProperty} = useGlobalContext()
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate();
  const handelInput = (e) => {
    setSearchQuery(e.target.value)
  };

  const getData = async()=>{
    const res = await axios.post(`${siteUrl}/property/search`,{'search':searchQuery},  {withCredentials:true})
      setSearchProperty(res.data)
  }
const GotoSearch = ()=>{
  navigate({
    pathname: '/search_property',
    search: `?search=${searchQuery}`,
  });
  getData()
}

  return (
    <div className="searchContainer">
      <div className="search">
        <input
          type="search"
          onChange={handelInput}
          name="search"
          value={searchQuery}
          placeholder="Search Property"
          id=""
        />
        <button onClick={GotoSearch}><FaSearch className="SearchIcon"/> </button>
      </div>
    </div>
  );
}
