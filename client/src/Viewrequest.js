import React, { useEffect, useState } from 'react'
import img23 from './Assets8/img23.jpg'
import Axios from 'axios'
import './Viewcontact.css'


const Viewrequest = () => {

  const[users,setusers] = useState([]);

  useEffect(()=>{
    Axios.get("/getrequestdata")
    .then((response)=>{
      setusers(response.data)
    })


  },[])

  return (
    <>
    <div>
    <img src={img23} className='nt'></img>
    </div>
   <h1 className='vc'>View Request data</h1>
   <br></br>
   <div className='b1'></div>

   <div className='coo'>
   {
    users.map((user)=>{
      return(
        <div className='lu'>
          <p>Subject: {user.subject}</p>
          <p>Name of Material: {user.NM}</p>
          <p>Material Type: {user.MT}</p>
        </div>
      )
    })
   }
   </div>
    </>
  )
}

export default Viewrequest
