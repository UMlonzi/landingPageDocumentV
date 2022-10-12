import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from './images/Black-removebg-preview.png'
import {  Search } from '@rsuite/icons';
import './navbar.css'
import { IconButton } from "rsuite";


const Navbar = () => {
    const [click, setClick] = useState(false)
    const ButtonStyle = { margin: "0px 10px" };

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
                 {/* <a href="#">Learn</a>
            <ul class="dropdown">
                <li><a href="#">C++</a></li>
                <li><a href="#">JAVA</a></li>
                <li><a href="#">PHP</a></li>
            </ul> */}
            <div class="dropdown">

              <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
  </div>
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
                <li>
            {/* <a href="#">Programming languages</a>
            <ul class="dropdown">
                <li><a href="#">C++</a></li>
                <li><a href="#">JAVA</a></li>
                <li><a href="#">PHP</a></li>
            </ul> */}
        </li>
            </ul>
            <button href='/' className='button2'>Log in</button>
            <button href='/' className='button1'>Get started</button>
            <div>
            <IconButton icon={<Search />} className='ButtonStyle' />
            </div>
        </nav>
        
    </div>
  )
}

export default Navbar