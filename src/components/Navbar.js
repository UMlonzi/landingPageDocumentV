import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from './images/logo_3-removebg-preview.png'
import {  Search } from '@rsuite/icons';
import './navbar.css'
import { IconButton } from "rsuite";


const Navbar = () => {
    const [click, setClick] = useState(false)
    const ButtonStyle = { margin: "0px 10px" };
    const navigate=useNavigate();

    const handleClick = () => setClick(!click)
    const navigateToAuth=()=>{
        navigate('/Auth')
    }

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
                    <a href='/'>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>About</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Dashboard</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Profile</a>
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
            <button onClick={navigateToAuth} className='button2'>Log in</button>
            <button href='/' className='button1'>Get started</button>
            <div>
            <IconButton icon={<Search />} className='ButtonStyle' />
            </div>
        </nav>
        
    </div>
  )
}

export default Navbar
// import logo from './images/Black-removebg-preview.png'
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import * as Icons from "react-icons/fa";
// import "./navbar.css";
// import { navItems } from "./NavItems";
// import Button from "./Button";
// import Dropdown from "./Dropdown";

// function Navbar() {
//   const [dropdown, setDropdown] = useState(false);

//   return (
//     <>
//       <nav className="navbar">
//         <Link to="/" className="navbar-logo">
//                        <img src={logo} alt='logo'  />

//         </Link>
//         <ul className="nav-items">
//           {navItems.map((item) => {
//             if (item.title === "Services") {
//               return (
//                 <li
//                   key={item.id}
//                   className={item.cName}
//                   onMouseEnter={() => setDropdown(true)}
//                   onMouseLeave={() => setDropdown(false)}
//                 >
//                   <Link to={item.path}>{item.title}</Link>
//                   {dropdown && <Dropdown />}
//                 </li>
//               );
//             }
//             return (
//               <li key={item.id} className={item.cName}>
//                 <Link to={item.path}>{item.title}</Link>
//               </li>
//             );
//           })}
//         </ul>
//         <Button />
//       </nav>
//     </>
//   );
// }

// export default Navbar;