// import React, {useState} from 'react';
// import { useNavigate } from 'react-router';
// import {FaBars, FaTimes} from 'react-icons/fa'
// import logo from './images/logo_3-removebg-preview.png'
// import {  Search } from '@rsuite/icons';
// import './navbar.css'
// import { IconButton } from "rsuite";
// import { getAuth, onAuthStateChanged } from "firebase/auth";


// const Navbar = () => {
//     const [click, setClick] = useState(false)
//     const ButtonStyle = { margin: "0px 10px" };

//     const navigate=useNavigate();
// const [displayNavLinks,setdisplayNavLinks]=useState(false);

//     const handleClick = () => setClick(!click)
//     // const navigate=useNavigate();
//     const navigateToAuth=()=>{
//         navigate('/Auth')
//     }
// const auth=getAuth();
// onAuthStateChanged(auth,(user=>{
//     if(user){
//         const uid =user.uid;
//         console.log(user);
// console.log("user Logged in");

// setdisplayNavLinks(true)    

//     }else{
// console.log("user not Logged in");
// setdisplayNavLinks(false)    
// }
// }))

//   return (
//     <div className='header'>
//         <nav className='navbar'>
//             <a href='/' className='logo'>
//                 <img src={logo} alt='logo'  />
//             </a>
//             <div className='hamburger' onClick={handleClick}>
//                 {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
//                  : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
//             </div>
//             <ul className={click ? "nav-menu active" : "nav-menu"}>
         
     
//                 <li className='nav-item'>
//                     <a href='/'>Home</a>
//                 </li>
//                 <li className='nav-item'>
//                     <a href='/'>About</a>
//                 </li>
// </ul>
//                 { displayNavLinks &&
// (()=>{
//     return(
//         <>
//          <li className='nav-item'>
//                     <a href='/'>Dashboard</a>

//                 <li className='nav-item'>

//                     <a href='/'>Plan</a>
//                 </li>
//                 <li className='nav-item'>
//                     <a href='/'>Contact Us</a>

//                     <a href='/Dashboard'>Dashboard</a>

//                 </li>
//                 <li className='nav-item'>
//                     <a href='/Profile'>Profile</a>

//                 </li>

//         </>
//     )
// })()
//                 }

//                 <li>
        
//         </li>
//             </ul>
//             <button onClick={navigateToAuth} className='button2'>Log in</button>
//             <button onClick={navigateToAuth} className='button1'>Get started</button>
//             <div>
//             <IconButton icon={<Search />} className='ButtonStyle' />
//             </div>
//         </nav>
        
//     </div>
//   )
// }

// export default Navbar
