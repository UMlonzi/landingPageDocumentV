import React from 'react'
import Tablecomponent from '../../component/upload/uplaodload'
// import Navbar from '../../components/navbar/Navbar'
import { WelcomeCard,UplaodToBlockchainBoxes,DisplayUplaodTable,SelectBox} from "../../component/upload/uplaodload"
import "./index.css";

// import Navbar from '../../components/Navbar';


// import Navdash from './Navdash';

const DashBoardPage = () => {
const {innerWidth}=window;
console.log(innerWidth);
  return (
    <div className="pageGrid" style={{width:`100vw`,height:"100vh"}}>
      <div className='item1'>
      <nav>
  <img src={require("../../imagess/istockphoto-1254347556-612x612.jpg")} alt="the profile imahe" 
  style={{width:"10rem",height:"10rem"}}/>

<br/>
  <ul style={{display:"flex", flexDirection:"column",justifyContent:"space-between",textAlign:"center",width:'100%',height:"10rem",backgroundColor:"orange"}}>
    <li>Home</li>
    <li>about</li>
    <li> Profile</li>
  </ul>
<br/>
<hr/>
<br/>
<li>Logout</li>

   </nav>
      </div>
    <div className='item2'><h3>DashBoard</h3></div>
    <div className='item3'>
<UplaodToBlockchainBoxes/>
<br />

    </div>
    </div>
  
  )
}

export default DashBoardPage
