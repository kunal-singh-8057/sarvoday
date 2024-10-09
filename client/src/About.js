import React from 'react'
import './About.css'
import img9 from './Assets8/img9.png'
import img11 from './Assets8/img11.png'
import img10 from './Assets8/img10.png'
import imgvd from './Assets8/vd.png'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Blackbox from './Blackbox'
import Footer from './Footer'

const About = () => {
  return (
  <>
  <Navbar/>
  <div className='back3'>
    <h1>Why should you choose Sarvodaya?</h1>
  </div>
  
  <div className='set2'>

  <div className='s2'>
    <img src={img9} className='img9'></img>
    <h3>Experienced teacher</h3>
    <p>
    Instructors from all over india 
    and around the world, providing 
    quality learning experiences and 
    helping students develop their full potential
    </p>
  </div>

  <div className='s3'>
    <img src={img11} className='img9'></img>
    <h3>Creative program</h3>
    <p>
    Flexible payment, suitable to personal financial situation and study schedule. Pay monthly, by course or “study now, pay later
    </p>
  </div>


  <div className='s4'>
    <img src={img10} className='img9'></img>
    <h3>Appropriate cost</h3>
    <p>
    Thiết kế giáo trình dựa trên năng lực và nhu cầu từng học viên, hoạt động học tập hấp dẫn, tương tác 2 chiều liên tục.
    </p>
  </div>

  </div>

<br></br>
  <div className='back4'>
    <h1>What's in the class at Sarvodaya?</h1>
    <p>
    Online classes with teachers, continuous questions and answers during class if you do not understand. At the end of the session, the lesson is recorded for your child to review
    </p>
    <br></br>
    <br></br>
    <Link to='/course' className='btn3'>Explore our Materials</Link>
    <img src={imgvd} className='vd'></img>
  </div>
  <Blackbox/>
  <br></br>
  <Footer></Footer>
  </>
  )
}

export default About
