import React from 'react'
import img7 from './Assets8/img7.png'
import img16 from './Assets8/img16.png'
import './Footer.css'

const Footer = () => {
  return (
 <>
<div className='foot'>
<img src={img7} className='logo'></img>
<h1>sarvodaya</h1>
</div>

<div className='d1'>
<br></br>
<img src={img16} className='img16'></img>
<br></br>
<br></br>
  <ul>
    <a href='#'>©2020 Edudu.co</a>
    <br></br>
    <br></br>
    <a href='#'>Edudu is a registered</a>
    <br></br>
    <a href='#'>trademark of Edudu.co</a>
  </ul>
</div>

<div className='d2'>
<h1>Course</h1>
<br></br>
<a href='#'>Classroom courses</a>
<br></br>
<br></br>
<a href='#'>Virtual classroom courses</a>
<br></br>
<br></br>
<a href='#'>E-learning courses</a>
<br></br>
<br></br>
<a href='#'>Video Courses</a>
<br></br>
<br></br>
<a href='#'>Offline Courses</a>
</div>


<div className='d3'>
<h1>Community</h1>
<br></br>
<a href='#'>Learners</a>
<br></br>
<br></br>
<a href='#'>Developers</a>
<br></br>
<br></br>
<a href='#'>Transactions</a>
<br></br>
<br></br>
<a href='#'>Teaching Center</a>
<br></br>
<br></br>
<a href='#'>Blog</a>
</div>


<div className='d4'>
<h1>Quick Links</h1>
<br></br>
<a href='#'>Home</a>
<br></br>
<br></br>
<a href='#'>Professional Education</a>
<br></br>
<br></br>
<a href='#'>Courses</a>
<br></br>
<br></br>
<a href='#'>Admissions</a>
<br></br>
<br></br>
<a href='#'>Testimonial</a>
</div>
 </>
  )
}

export default Footer
