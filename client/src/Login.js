import React from 'react'
import { useState } from 'react'
import img19 from './Assets8/img19.png'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'
import './Login.css'

const Login = () => {
  const[email,setemail] = useState("");
  const[password,setpassword] = useState("");

  const navigate = useNavigate();

  const lo = ()=>{
    Axios.post("/login",{email,password})
    .then((result)=>{
      if(result.data === "success"){
        console.log("welcome back user")
        alert("Welcome back user")
        navigate("/home")
      }
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <>
      <div className='form2'>
      <img src={img19} className='img19'></img>
      <h1>Login</h1> 
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
      <button onClick={lo}>Login</button>
      <br></br>
      <br></br>
      <label>Don't have an account yet  : <Link to='/' className='l1'>Signup</Link></label>
      <br></br>
      <br></br>
      <label>Login as an admine : <Link to='/admine' className='l1'>Admine</Link> </label>
      <br></br>
      <br></br>
      </div>
      </>
  )
}

export default Login



