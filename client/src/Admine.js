import React, { useState } from 'react'
import img19 from './Assets8/img19.png'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'
import './Admine.css'

const Admine = () => {

  const[email,setemail] = useState("");
  const[password,setpassword] = useState("");

  const navigate = useNavigate();

  const admine = ()=>{
    Axios.post("/admine",{email,password})
    .then((result)=>{
      if(result.data === "success"){
        alert("welcome admine")
        navigate("/dashboard")
      }else{
        alert("Sorry you are not a admine")
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
 <>
   <div className='form2'>
    <img src={img19} className='img19'></img>
    <h1>Admine</h1> 
    <br></br>
    <br></br>
    <label>Email:</label>
    <br></br>
    <input placeholder='Enter the email here' onChange={(e)=>{setemail(e.target.value)}}></input>
    <br></br>
    <br></br>
    <label>Password:</label>
    <br></br>
    <input placeholder='Enter the password here'onChange={(e)=>{setpassword(e.target.value)}}></input>
    <br></br>
    <br></br>
    <button onClick={admine}>Submit</button>
    <br></br>
    <br></br>
    <label>Don't have an account yet  : <Link to='/' className='l1'>Signup</Link></label>
    <br></br>
    <br></br>
    <label>Login as a user : <Link to='/login' className='l1'>Login</Link> </label>
    <br></br>
    <br></br>
    </div>
 </>
  )
}

export default Admine
