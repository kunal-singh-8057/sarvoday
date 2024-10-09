import React from 'react'
import { Link } from 'react-router-dom'
import img7 from './Assets8/img7.png'
import './Navbar.css'

const Navbar = () => {
  return (
<>
<div className='navbar'>
<img src={img7} className='img7'></img>
<h1>Sarvodaya</h1>
<div className='nav'>
<Link to='/home' className='navlinks'>Home</Link>
<Link to='/course' className='navlinks'>Course</Link>
<Link to='/about' className='navlinks'>About</Link>
<Link to='/contact' className='navlinks'>Contact</Link>
<Link to='/request' className='navlinks'>Request</Link>
<Link className='btn1' to='/'>Logout</Link>
<Link className='btn1' to='/notice'>Board</Link>
</div>
</div>
</>
  )
}

export default Navbar
