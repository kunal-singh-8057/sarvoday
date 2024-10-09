import React, { useState } from 'react'
import img20 from './Assets8/img20.png'
import img23 from './Assets8/img23.jpg'
import Navbar from './Navbar'
import Axios from 'axios'
import Blackbox from './Blackbox'
import './Contact.css'
import Footer from './Footer'

const Contact = () => {
  const[name,setname] = useState("");
  const[email,setemail] = useState("");
  const[password,setpassword] = useState("");
  const[message,setmessage] = useState("");

  const con = ()=>{
    Axios.post("/addcontact",{
      name:name,
      email:email,
      password:password,
      message:message
    })
    .then(()=>{
      alert("Your requset is send successfully our team will contact you soon")
    }).catch((error)=>{
      console.log(error)
    })
  }
  
  return (
  <>
  <Navbar/>
  <div className='yb'>
    <img src={img23} className='img23'></img>
  </div>
  <div>
  <div className='con1'>
  <h1>Contact us</h1>
  <br></br>
  <img src={img20} className='img20'></img>
  <input placeholder='Enter the Name here' onChange={(e)=>{setname(e.target.value)}}></input>
  <br></br>
  <br></br>
  <input placeholder="Enter the Email here" onChange={(e)=>{setemail(e.target.value)}}></input>
  <br></br>
  <br></br>
  <input placeholder='Enter the password here' onChange={(e)=>{setpassword(e.target.value)}}></input>
  <br></br>
  <br></br>
  <textarea placeholder='Enter you message here' onChange={(e)=>{setmessage(e.target.value)}}></textarea>
  <br></br>
  <br></br>
  <button onClick={con}>Submit</button>
  </div>
  </div>
  <br></br>
  <br></br>
  <Blackbox></Blackbox>
  <br></br>
  <Footer/>
  </>
  )
}

export default Contact
