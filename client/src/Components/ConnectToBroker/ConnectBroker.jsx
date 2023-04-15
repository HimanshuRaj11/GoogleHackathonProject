import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './ConnectBroker.css'
export default function ConnectBroker() {
    const siteUrl = process.env.REACT_APP_siteUrl;
    const [broker , setBroker] = useState()
    const {id} = useParams()
    const getBroker = async()=>{
        const res = await axios.get(`${siteUrl}/property/broker/${id}`,{withCredentials:true})
        setBroker(res.data.broker);
    }
    useEffect(()=>{
        getBroker()
    },[])
  return (
    <div>
        {
            broker? (
                <>
                <div className="detail">
                    <span> <h3>Name : </h3> <h3>{broker.name}</h3> </span>
                    <span> <h3>Phone : </h3> <h3>{broker.phone}</h3> </span>
                    <span> <h3>Email : </h3> <h3>{broker.email}</h3> </span>
                    <span> <h3>Country : </h3> <h3>{broker.country}</h3> </span>
                    <span> <h3>State : </h3> <h3>{broker.state}</h3> </span>
                    <span> <h3>city : </h3> <h3>{broker.city}</h3> </span>
                    <span> <h3>Pincode : </h3> <h3>{broker.pincod}</h3> </span>
                </div>
                </>
            ):("")
        }
    </div>
  )
}
