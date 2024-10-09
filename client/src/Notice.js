import React, { useEffect, useState } from 'react'
import img28 from './Assets8/img28.png'
import Navbar from './Navbar'
import Blackbox from './Blackbox'
import Footer from './Footer'
import './Notice.css'
import Axios from 'axios'

const Notice = () => {

  const[users,setusers] = useState([])

  useEffect(()=>{
    Axios.get("/getrequestdata")
    .then((response)=>{
      setusers(response.data)
    })


  },[])

  return (
 <>
 <Navbar/>
 <div className='bb3'>
  <h1>Notice Board</h1>
  <img src={img28} className='img28'></img>
 </div>
 <div className='board'></div>

 <div className='poo'>
{
  users.map(user=>{
    return(
      <div className='lu'>
       <p>Subject:{user.subject}</p>
       <p>Material Name:{user.NM}</p>
       <p>Material Type:{user.MT}</p>
      </div>
    )
  })
}
 </div>

 <br></br>
 <br></br>
 <Blackbox/>
 <br></br>
 <br></br>
 <Footer/>

 </>
  )
}

export default Notice
