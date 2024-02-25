import React from 'react'
import { Link } from 'react-router-dom'
import { RiHome2Line } from "react-icons/ri";
import Logo from '../../Assets/site_logo_1600674075 1.png'
const SideBar = () => {
  return (
    <div className='sidebar'>
    <img src={Logo} alt='logo'/>
    <div className='sidebar-content'>
    <Link to='/dashboard'><RiHome2Line/>Dashboard</Link>
    <Link to='/messages'>Messages</Link>
    <Link to='/applied'>Applied Jobs</Link>
    <Link to='/Find '>Find Jobs</Link>
    <Link to='/companies'>Browse Companies</Link>
    <Link to='/profile'>My Public Profile</Link>
    <p>SETTINGS</p>
    <Link to='settings'>Settings</Link>
    <Link to='/help '>Help Center</Link>
    </div>


      <div>
      </div>
    </div>
  )
}

export default SideBar
