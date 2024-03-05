import React, { useState } from 'react'
import '../../Styles/user.css'

const User = () => {
  const [name, setname] = useState('');
  return (
    <div className='user p-4'>
      <h1 className='fs-5 fw-bold'>Good Moring,{name}</h1>
      <p className='paragraph'>Here is what's happening with your job search application from july 19 - july 27.</p>
      <div className='user-content'>
        <div className='jobs'>
          <div className='job applied'>
            <h3>Total jobs Applied</h3>
            <h3></h3>
          </div>
          <div className='job interview'>
            <h3>Interviewed</h3>
            <h3></h3>
          </div>
        </div>

        <div className='statues'></div>
        <div></div>

      </div>
    </div>
  )
}

export default User


