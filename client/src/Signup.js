import React from 'react'
import img19 from './Assets8/img19.png'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

import './Signup.css'

const Signup = () => {

  const[name,setname]= useState("");
  const[email,setemail]= useState("");
  const[password,setpassword]= useState("");

  const navigate = useNavigate()

  const signup = ()=>{
    Axios.post("/createusers",{
      name:name,
      email:email,
      password:password
    }).then(()=>{
      alert("Signup successfully")
      navigate("/home")
    })
  }
  
  return (
   <>
    <div className='form1'>
    <img src={img19} className='img19'></img>
    <h1>Signup</h1>
    <br></br>
    <br></br>
    <label>Name:</label>
    <br></br>
    <input placeholder='Enter the name here' onChange={(e)=>{setname(e.target.value)}}></input>
    <br></br>
    <br></br>
    <label>Email:</label>
    <br></br>
    <input placeholder='Enter the email here' onChange={(e)=>{setemail(e.target.value)}}></input>
    <br></br>
    <br></br>
    <label>Password:</label>
    <br></br>
    <input placeholder='Enter the password here' onChange={(e)=>{setpassword(e.target.value)}}></input>
    <br></br>
    <br></br>
    <button onClick={signup}>Submit</button>
    <br></br>
    <br></br>
    <label>Already have an account : <Link to='/login' className='l1'>Login</Link></label>
    <br></br>
    <br></br>
    <label>Login as an admine : <Link to='/admine' className='l1'>Admine</Link> </label>
    <br></br>
    <br></br>
    </div>
   </>
  )
}

export default Signup
