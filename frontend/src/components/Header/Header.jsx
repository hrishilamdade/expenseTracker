import React from 'react'
import './Header.css'
import config from '../../config.json'

function Header() {
  return (
    <div className='header'>
        <div>{config.APP_NAME}</div>
        <div>Profile</div>
    </div>
  )
}

export default Header