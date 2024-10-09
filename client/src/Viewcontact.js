import React, { useEffect, useState } from 'react'
import img23 from './Assets8/img23.jpg'
import Axios from 'axios'
import './Viewcontact.css'

const Viewcontact = () => {

  const[users,setusers] = useState([]);

  useEffect(()=>{
    Axios.get("getcontactdata")
    .then((response)=>{
      setusers(response.data)
    })
  },[])


  return (
<>
<div>
  <img src={img23} className='nt'></img>
</div>
<h1 className='vc'>View contact data</h1>
<br></br>
<div className='b1'></div>

<div className='coo'>
  {
    users.map(user=>{
      return(
        <div className='lu'>
          <p>Name: {user.name}</p>
          
          <p>Email: {user.email}</p>
          
          <p>Paaword: {user.password}</p>
          
          <p>Message: {user.message}</p>
        </div>
      )
    })
  }
</div>

</>
  )
}

export default Viewcontact
