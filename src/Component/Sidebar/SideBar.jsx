// import React from 'react'
// import { Link } from 'react-router-dom'
// import { RiHome2Line, RiSettings5Line } from "react-icons/ri";
// import { TbMessage2 } from "react-icons/tb";
// import { CiSearch } from "react-icons/ci";
// import { FaRegFileLines } from "react-icons/fa6";
// import { PiBuildings } from "react-icons/pi";
// import { IoPersonOutline } from "react-icons/io5";
// import { BiHelpCircle } from "react-icons/bi";

// import '../../Styles/sidebar.css'
// import Logo from '../../Assets/site_logo_1600674075 1.png'
// const SideBar = () => {
//   return (
//     <div className='sidebar'>
//     <img src={Logo} alt='logo'/>
//     <div className='sidebar-content'>
//     <Link to='/dashboard'><RiHome2Line/>Dashboard</Link>
//     <Link to='/messages'><TbMessage2/>Messages</Link>
//     <Link to='/applied'><FaRegFileLines/>Applied Jobs</Link>
//     <Link to='/Find '><CiSearch/>Find Jobs</Link>
//     <Link to='/companies'><PiBuildings />Browse Companies</Link>
//     <Link to='/profile'><IoPersonOutline/>My Public Profile</Link>
//     <p>SETTINGS</p>
//     <Link to='settings'><RiSettings5Line/>Settings</Link>
//     <Link to='/help '><BiHelpCircle/>Help Center</Link>
//     </div>


//       <div>
//       </div>
//     </div>
//   )
// }

// export default SideBar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Sidebar;