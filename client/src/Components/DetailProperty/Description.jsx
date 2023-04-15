import React from 'react'
import { useGlobalContext } from "../../Context/Context";
export default function Description() {
    const {SingleProperty} = useGlobalContext()
  return (
    <div>{SingleProperty.description}</div>
  )
}
