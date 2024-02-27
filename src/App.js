// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import  Brand from  './Component/Pages/Brand'
// import SideBar from './Component/Sidebar/SideBar';
// function App() {
//   return (
   
//       <Router>
//       <Brand/>
//       <SideBar/>
    
//       <Routes>
  
//       </Routes>
//       </Router>
   
//   );
// }

// export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  Navbar from  './Component/Pages/Brand'
 import SideBar from './Component/Sidebar/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="content">
        <Navbar />
        <h1>Main Content</h1>
      </div>
    </div>
  );
}

export default App;