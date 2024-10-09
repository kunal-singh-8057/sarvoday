import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import img27 from './Assets8/img27.png'
import './Course.css'
import { Link } from 'react-router-dom'
import Blackbox from './Blackbox'
import Footer from './Footer'
import Axios from 'axios'


const Course = () => {

  const[users,setusers] = useState([]);

  useEffect(()=>{
    Axios.get("/getupload")
    .then((response)=>{
      setusers(response.data)
    })
  },[])


  return (
   <>
   <Navbar/>
   <div className='back8'>
   <img src={img27} className='img27'></img>
   </div>



   <div className='btn-set'>
   <Link  className='ab'>All Course</Link>
   <Link  className='ab'>Maths</Link>
   <Link  className='ab'>Literature</Link>
   <Link  className='ab'>English</Link>
   <Link  className='ab'>Art</Link>
   </div>


        <div className='outframe'>
        {
          users.map((user)=>{
            return(
              <div className='innerframe'>
               <img src={user.image}></img>
               <div className='ddc'>
               <h3>Name:{user.name}</h3>
               <h3>Subject:{user.subject}</h3>
               </div>
               <Link className='bton' to={`${user.link}`}>Get Content</Link>
              </div>
            )
          })
        }
        </div>


  
   <br></br>
   <br></br>

   <Link to='/uploadm' className='btn53'>Upload Material</Link>

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

export default Course
