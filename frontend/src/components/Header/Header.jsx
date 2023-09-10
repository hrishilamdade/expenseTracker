import React from 'react'
import './Header.css'
import config from '../../config.json'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <div className='header__title' ><Link to="/"> {config.APP_NAME}</Link> </div>
        <div>Profile</div>
    </div>
  )
}

export default Header