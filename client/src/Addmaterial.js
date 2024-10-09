import React, { useState } from 'react'
import Axios from 'axios'
import './Addmaterial.css'

const Addmaterial = () => {

  const[name,setname] = useState("");
  const[subject,setsubject] = useState("");
  const[image,setimage] =  useState("");
  const[link,setlink] = useState("");

  const up = ()=>{
    Axios.post("/uploadata",{
      name:name,
      subject:subject,
      image:image,
      link:link
    })

    .then(()=>{
      alert("Data Uploaded successfully")
    })

    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <>
    <div className='kiss'>
    <div className='form1'>
    <br></br>
    <div className='hu'>
    <h1>Upload Data</h1>
    </div>
    <br></br>
    <br></br>
    <label>Name:</label>
    <br></br>
    <br></br>
    <input placeholder='Enter the Material name' onChange={(e)=>{setname(e.target.value)}}></input>
    <br></br>
    <br></br>
    <label>Subject:</label>
    <br></br>
    <br></br>
    <input placeholder='Enter the Subject name' onChange={(e)=>{setsubject(e.target.value)}}></input>
    <br></br> 
    <br></br>
    <label>Image:</label>
    <br></br>
    <br></br>
    <input placeholder='Enter the Material image' onChange={(e)=>{setimage(e.target.value)}}></input>
    <br></br>
    <br></br>
    <label>Link:</label>
    <br></br>
    <br></br>
    <input placeholder='Enter the Material Link' onChange={(e)=>{setlink(e.target.value)}}></input>
    <br></br>
    <br></br>
    <button onClick={up}>Upload  Data</button>
    <br></br>
    <br></br>
    </div>
    </div>
    </>
  )
}

export default Addmaterial
