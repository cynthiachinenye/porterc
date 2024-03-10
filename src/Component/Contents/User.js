import React, { useState } from 'react'
import './user.css'
import PieChart from '../PieChart';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import prof from '../../Assets/alex-suprun-ZHvM3XIOHoE-unsplash 1.png';

const User = (props) => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const mouseHandle = () => {
    setCount(count + 1)
  }
  const { data } = props;
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
          <h3>Jobs Applied Status</h3>
          <PieChart />
          <Link to="/" className='link'>View All Aplications <FaLongArrowAltRight /> </Link>

        </div>
        <div className='applications flex-column'>
          <div className='border-bottom-1 border-dark'><h3>Upcoming Interview</h3></div>
          <div><p><span>Today</span>,7 March</p>
            <MdOutlineKeyboardArrowLeft /><MdOutlineKeyboardArrowRight />
          </div>
          <div className='time'>
            <div><p>10:00Am</p><div></div></div>
            <div><p>10:30Am</p><div className='profile-img'>
              <img src={prof} alt='img' className='image' />
              <h4>Joe Bartmann</h4>
              <p>HR Manager st Divvy</p>
            </div></div>
            <div><p>11:00Am</p><div></div></div>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default User





