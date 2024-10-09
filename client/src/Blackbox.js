import React from 'react'
import img12 from './Assets8/img12.png'
import img13 from './Assets8/img13.png'
import img14 from './Assets8/img14.png'
import img15 from './Assets8/img15.png'
import './Blackbox.css'

const Blackbox = () => {
  return (
 <>
<img src={img12} className='img12'></img>

<div className='subimages'>
<img src={img13} className='img13'></img>
<img src={img14} className='img14'></img>
<img src={img15} className='img15'></img>
</div>


<div className='subimages2'>
<img src={img13} className='img13'></img>
<img src={img14} className='img14'></img>
<img src={img15} className='img15'></img>
</div>

<div className='text'>
<h1>Do you still have any questions?</h1>
<br></br>
<br></br>
<p>Don't hesitate to leave us your phone number. We will contact you to discuss any questions you may have</p>
<br></br>
<input placeholder='Enter the questions here'></input>
<button>Connect</button>
</div>
 </>
  )
}

export default Blackbox
