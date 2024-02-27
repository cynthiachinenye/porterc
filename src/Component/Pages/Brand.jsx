// import React from 'react'
// import { Container} from 'react-bootstrap';
// import { Navbar } from 'react-bootstrap';


// const Brand = () => {
//   return (
//     <div>
//       <Navbar className='bg-body-tertiary'>
//       <Container>
//       <Navbar.Toggle/>
//       <Navbar.Collapse className='justify-content-end'>
      
      
    
//       </Navbar.Collapse>
//       </Container>
//       </Navbar>
//     </div>
//   )
// }

// export default Brand

// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
