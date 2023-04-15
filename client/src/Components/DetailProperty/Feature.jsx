import React from 'react'
import { useGlobalContext } from "../../Context/Context";
export default function Feature() {
    const {SingleProperty} = useGlobalContext()
  return (
    <div>
        <ul>
            <li>Price: {SingleProperty.price}</li>
            <li>Area: {SingleProperty.area}</li>
            <li>Type: {SingleProperty.type}</li>
            
        </ul>
    </div>
  )
}
