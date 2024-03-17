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
        <div className='applications  flex-column'>
          <div className='border border-bottom fw-bold p-3'>Upcoming Interview</div>
          <div className="border border-bottom p-2"><span className='fw-bold p-2'>Today,</span>7 March
            <span className='ps-5 float-end'><MdOutlineKeyboardArrowLeft /><MdOutlineKeyboardArrowRight /></span>
          </div>
          <div className='time'>
            <div className='d-flex p-3'>10:00Am <hr className=' hr' /></div>
            <div className='d-flex'>
              <div className='p-3 d-flex justify-content-between align-items-center'> 10:30Am
              <div className='profile-img d-flex ms-5  rounded border border-none'>
                <div className='d-flex  align-items-center'> <img src={prof} alt='img' className='image' />
                 <div className='ps-3 lh-1 '> <h4 className='fs-6 fw-bold'>Joe Bartmann</h4>
                  <p className='fs-6 fw-light '>HR Manager st Divvy</p>
                </div>
                </div>
              </div>
              </div>
            </div>
            <div><p>11:00Am</p><div></div></div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default User





