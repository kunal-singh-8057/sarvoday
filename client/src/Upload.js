import React, { useEffect, useState } from 'react'
import img23 from './Assets8/img23.jpg'
import Axios from 'axios'
import useParams from 'react-router-dom'
import './Viewcontact.css'


const Upload = () => {

  const[users,setusers] = useState([]);

  useEffect(()=>{
    Axios.get("/getupload")
    .then((response)=>{
      setusers(response.data)
    })

    .catch((error)=>{
      console.log(error)
    })
  },[])

  const del = (id)=>{
    Axios.delete("/deleteudata/"+id)
    .then(()=>{
      alert("Material delted successfully")
      console.log("success")
    })

    .catch(error=>{
      console.log(error)
    })
  }

  return (
   <>
    <div>
    <img src={img23} className='nt'></img>
    </div>
   <h1 className='vc'>View Upload data</h1>
   <br></br>
   <div className='b1'></div>

   <div className='coo'>
    {
      users.map((user)=>{
        return(
          <div className='lu'>
            <p>Name:{user.name}</p>
            <p>subject:{user.subject}</p>
            <p>image:{user.image}</p>
            <p>link:{user.link}</p>
            <button className='del' onClick={(e)=> del(user._id)}>Delete</button>
          </div>
        )
      })
    }
   </div>
   </>
  )
}

export default Upload
