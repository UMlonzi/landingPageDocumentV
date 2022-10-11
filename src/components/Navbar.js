import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from './images/Black-removebg-preview.png'
import './navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

  return (
    <div className='header'>
        <nav className='navbar'>
            <a href='/' className='logo'>
                <img src={logo} alt='logo'  />
            </a>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                 : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <a href='/'>Learn</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Plan</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Finance</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Wealth</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>About</a>
                </li>
            </ul>

        </nav>
        
    </div>
  )
}

export default Navbar