import React,{ useEffect,useState } from 'react'
import './Profile.css'
import { useGlobalContext } from '../../Context/Context'
import axios from 'axios'
export default function UserData() {
    const { getUser, user } = useGlobalContext();
    const [userInput, setUserinput] = useState({
        name:user.name,
        username:user.username,
        phone:user.phone,
        email:user.email,
        country:user.country,
        State:user.State,
        city:user.city,
        pinCode:user.pinCode,
    })
    const handelInput =(e)=>{
        const name = e.target.name
        const value = e.target.value
        setUserinput({...userInput, [name]:value})
    }
    const saveUser=async()=>{
        const res = await axios.post('http://localhost:8000/auth/update-user/'+user._id,userInput, {withCredentials:true})
        
    }
    useEffect(() => {
        getUser();
      }, []);
    
  return (
    <div className='userData'>
        <h1>My Profile</h1>
        <hr />

        <div className="inputs">
            <input type="text" onChange={handelInput} name='name' value={userInput.name} placeholder='Name' />
            <input type="text" onChange={handelInput} name='username' value={userInput.username} placeholder='Username' />
            <input type="text" onChange={handelInput} name='phone' value={userInput.phone} placeholder='Phone Number'/>
            <input type='email' onChange={handelInput} name='email' value={userInput.email} placeholder='Example@gmail.com'/>
            <span>Your Address </span>
            <input type="text" onChange={handelInput} name='country' value={userInput.country} placeholder='Country'/>
            <input type="text" onChange={handelInput} name='State' value={userInput.State} placeholder='State'/>
            <input type="text" onChange={handelInput} name='city' value={userInput.city} placeholder='City'/>
            <input type="text" onChange={handelInput} name='pinCode' value={userInput.pinCode} placeholder='Pin Code'/>

            <button onClick={saveUser}>Save</button>
        </div>
    </div>
  )
}
