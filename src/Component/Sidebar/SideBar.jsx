import "../../Styles/sidebar.css"
import React from 'react'
import icon from '../../Assets/alex-suprun-ZHvM3XIOHoE-unsplash 1.png';
import Logo from '../../Assets/site_logo_1600674075 1.png'
import { Link } from 'react-router-dom'
import { RiHome2Line, RiSettings5Line } from "react-icons/ri";
import { TbMessage2 } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { FaRegFileLines } from "react-icons/fa6";
import { PiBuildings } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { BiHelpCircle } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img src={Logo} alt='logo' />
      <div className='sidebar-content '>
        <Link to='/dashboard'><RiHome2Line  className="icon"/>Dashboard</Link>
        <Link to='/messages'><TbMessage2 className="icon"/>Messages</Link>
        <Link to='/applied'><FaRegFileLines className="icon" />Applied Jobs</Link>
        <Link to='/Find '><CiSearch className="icon"/>Find Jobs</Link>
        <Link to='/companies'><PiBuildings className="icon" />Browse Companies</Link>
        <Link to='/profile'><IoPersonOutline className="icon" />My Public Profile</Link>
        <p>SETTINGS</p>
        <Link to='settings'><RiSettings5Line className="icon" />Settings</Link>
        <Link to='/help '><BiHelpCircle className="icon" />Help Center</Link>
      </div>

  <div className="profile">
      <img src={icon} alt='img' className="img"/> 
      <div className="profile-content">
      <p>Jake Gyll<br/>
      <span>jakegyll@email.com</span>
      </p>
      </div>
      </div>
      </div>
      );
}

      export default Sidebar;