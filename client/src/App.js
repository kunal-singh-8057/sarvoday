import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Admine from './Admine'
import Home from './Home'
import Dashboard from './Dashboard'
import Course from './Course'
import Request from './Request'
import About from './About'
import Contact from './Contact'
import Notice from './Notice'
import Viewcontact from './Viewcontact'
import Viewrequest from './Viewrequest'
import Upload from './Upload'
import Addmaterial from './Addmaterial'

const App = () => {
  return (
  <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/admine' element={<Admine/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    <Route path='/course' element={<Course/>}></Route>
    <Route path='/request' element={<Request/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/notice' element={<Notice/>}></Route>
    <Route path='/vc' element={<Viewcontact/>}></Route>
    <Route path='/vq' element={<Viewrequest/>}></Route>
    <Route path='/vp' element={<Upload/>}></Route>
    <Route path='/uploadm' element={<Addmaterial/>}></Route>
  </Routes>
</BrowserRouter>


  </>
  )
}

export default App

