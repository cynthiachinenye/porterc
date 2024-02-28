import '../../Styles/navbar.css'
import React from 'react';
import { VscBellDot } from "react-icons/vsc";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom  h-500px">
      <div className="container">
        <a className="navbar-brand " href="#">Dashboard</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <VscBellDot className='bell-icon'/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
