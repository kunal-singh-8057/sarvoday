import React from 'react'
import img23 from './Assets8/img23.jpg'
import {Link} from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {
  return (
 <>

<h1 className='adda'>Admine Panel</h1>
 
    <div className='cs'>

    <div className='csset'>
    <p>Total Material Now</p>
    <h1>1662+</h1>
    </div>
    </div>

    <div className='cs'>
    <div className='csset'>
    <p>Total Active Users</p>
    <h1>1000+</h1>
    </div>
    </div>


    <div className='cs'>
    <div className='csset'>
    <p>Total new comers </p>
    <h1>300+</h1>
    </div>

    </div>

    <div className='taskboard'></div>


<div className='voo'>
    <div className='admine-btns'>
    <div className='btna'>
    <Link className='bbb1' to='/vc'>Get Contacts</Link>
    </div>
    </div>

<br></br>
<br></br>
<br></br>
    
    <div className='admine-btns'>
    <div className='btna1'>
    <Link className='bbb2' to='/vp'>Upload</Link>
    </div>
    </div>

    <br></br>
    <br></br>
    <br></br>
    
    <div className='admine-btns'>
    <div className='btna2'>
    <Link className='bbb3' to='/vq'>Request</Link>
    </div>
    </div>
</div>

<div className='bbn'>
    <Link className='bbb4' to='/uploadm'>Add Material</Link>
</div>

 </>
  )
}

export default Dashboard
