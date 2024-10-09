import React from 'react'
import img1 from './Assets8/img1.png'
import img2 from './Assets8/img2.png'
import img3 from './Assets8/img3.png'
import img4 from './Assets8/img4.png'
import img5 from './Assets8/img5.png'
import img6 from './Assets8/img6.png'
import img8 from './Assets8/img8.png'
import Blackbox from './Blackbox'
import Navbar from './Navbar'
import './Home.css'
import Footer from './Footer'

const Home = () => {
  return (
   <>
   <Navbar/>
   <div>
   <img src={img1} className='img1'></img>
   <img src={img2} className='img2'></img>
   </div>

   <div className='nex'>
    <h1>Lessons revolve around 4 areas</h1>
    <br></br>
    <p>Diverse lessons around 4 subjects: Math, literature, English, drawing help <br></br>
    children improve their comprehensive knowledge</p>
   </div>

   <div className='set'>

   <div className='s'>
    <img src={img3} className='img3'></img>
    <h1>Maths</h1>
   </div>

   <div className='s'>
    <img src={img4} className='img3'></img>
    <h1>literature</h1>
   </div>


   <div className='s'>
    <img src={img5} className='img3'></img>
    <h1>English</h1>
   </div>


   <div className='s'>
    <img src={img6} className='img3'></img>
    <h1>Art</h1>
   </div>

   </div>


   <div className='back2'>
   <img src={img8} className='img8'></img>
   </div>
   <br></br>
   <Blackbox/>
   <br></br>
   <Footer/>
   </>
  )
}

export default Home
