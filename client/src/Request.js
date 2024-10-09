import React, { useState } from 'react'
import img26 from './Assets8/img26.jpg'
import Navbar from './Navbar'
import Axios from 'axios'
import Blackbox from './Blackbox'
import './Request.css'
import Footer from './Footer'

const Request = () => {
  const[subject,setsubject] = useState("");
  const[NM,setNM] = useState("");
  const[MT,setMT] = useState("");

  const sett = ()=>{
    Axios.post("/addrequest",{
      subject:subject,
      NM:NM,
      MT:MT
    })
    .then(()=>{
      alert("Your requset is send successfully we and community will try best to help you out")
    })
    
    .catch((error)=>{
      console.log(error)
    })
  }

  return (

    
   <>
   <Navbar/>
   <div className='back5'>
    <img src={img26} className='img26'></img>
   </div>

   <div className='form3'>
   <h1>Create request</h1>
   <br></br>
   <br></br>
   <label>Subject:</label>
   <br></br>
   <br></br>
   <input placeholder='Enter the subject now' onChange={(e)=>{setsubject(e.target.value)}}></input>
   <br></br>
   <br></br>
   <label>Name of material:</label>
   <br></br>
   <br></br>
   <input placeholder='Enter the name of material' onChange={(e)=>{setNM(e.target.value)}}></input>
   <br></br>
   <br></br>
   <label>Material type:</label>
   <br></br>
   <br></br>
   <input placeholder='Enter the Material type here' onChange={(e)=>{setMT(e.target.value)}}></input>
   <br></br>
   <br></br>
   <button onClick={sett}>Submit</button>
   </div>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <Blackbox/>
   <br></br>
   <Footer/>
   </>
  )
}

export default Request
