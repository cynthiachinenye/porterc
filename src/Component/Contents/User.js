import React, {useState} from 'react'
import '../../Styles/user.css'
import PieChart from '../PieChart';

const User = (props) => {
  const [name, setName] = useState('');
  const [count,setCount] = useState(0);
  const mouseHandle = ()=>{
    setCount(count+1)
  }
  const {data}= props;
  return (
    <div className='user p-4'>
      <h1 className='fs-5 fw-bold'>Good Moring,{name}</h1>
      <p className='paragraph'>Here is what's happening with your job search application from july 19 - july 27.</p>
      <div className='user-content'>
        <div className='jobs'>
          <div className='job applied'>
            <h3>Total jobs Applied</h3>
            <h3 onMouseOver={mouseHandle} className='num fs-1'>{count}</h3>
          </div>
          <div className='job interview'>
            <h3>Interviewed</h3>
            <h3 className='num fs-1'>{count}</h3>
          </div>
        </div>

        <div className='statues'>
       <PieChart/>
       
        </div>
        <div></div>

      </div>
    </div>
  )
}

export default User



