import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import  Brand from  './Component/Pages/Brand'
import SideBar from './Component/Sidebar/SideBar';
function App() {
  return (
   
      <Router>
      <Brand/>
      <SideBar/>
    
      <Routes>
  
      </Routes>
      </Router>
   
  );
}

export default App;
