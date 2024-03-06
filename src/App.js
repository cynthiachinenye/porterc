
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  Navbar from  './Component/Pages/Brand'
 import SideBar from './Component/Sidebar/SideBar';
import User from './Component/Contents/User';


function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="content">
        <Navbar />
       <User/>
       
      </div>
    </div>
  );
}

export default App;