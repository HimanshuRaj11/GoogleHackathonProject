import React from 'react'
import './Message.css'
import {BsCheckCircleFill} from 'react-icons/bs'
export default function Message(props) {
  return (
    <div className={`MessageContainer ${props.Mtype}`} >
        <span className='icon'> <BsCheckCircleFill /> </span>
        <span className='msg'>{props.msg}</span>

    </div>
  )
}
