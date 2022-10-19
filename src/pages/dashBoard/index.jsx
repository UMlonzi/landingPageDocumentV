import React,{useState, useEffect}from 'react'
import Tablecomponent from '../../component/upload/uplaodload'
// import Navbar from '../../components/navbar/Navbar'
import { WelcomeCard,UplaodToBlockchainBoxes,DisplayUplaodTable,SelectBox} from "../../component/upload/uplaodload"
import "./index.css";
import IconUser from "../../imagess/userIconImage.svg";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import GridViewIcon from '@mui/icons-material/GridView';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import welcomeIMG from "../../imagess/welcomeIMG.svg";

import Web from 'web3';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';


const DashBoardPage = () => {
const [loggInState,setloggInState]=useState(false);
  const auth=getAuth();
 useEffect(() => {
  onAuthStateChanged(auth,(user)=>{
    if(user){
      setloggInState(true);
return;
    }else if(loggInState==false)return  navigate("/");
  });


 },[loggInState])

  const navigate=useNavigate();
const handleLogOut=()=>{
  signOut(auth);
  setloggInState(false)
  navigate("/")
}

  return (

    <div className="pageGrid" style={{width:`100vw`,height:"100vh"}}>
      <div className='item1'>
      <nav>
        <h5>Wlecome Back</h5>
        <br/>
        <ul>

      <img src={IconUser} alt="default user icon Image" style={{width:"8rem",height:"8rem",alignSelf:"end",margin:"0px 0 5rem 0px",backgroundColor:"white",borderRadius:"100%"}}/>

<br/>
  <ul  className='navLI'
  style={{display:"flex", flexDirection:"column",width:'100%',
  height:"35rem"}}>
  <Link to="/">  <li><HomeIcon fontSize="large"/>Home</li></Link>
  <Link to="/About"> <li><InfoIcon fontSize="large"/> About</li></Link>
  <Link to="/Dashboard"> <li><GridViewIcon fontSize="large"/> Dashboard</li></Link>
  <Link to="/profile"> <li> <AccountBoxIcon fontSize='large'/>Profile</li></Link>
  <Link to="/Plan"> <li> <AirplanemodeActiveIcon fontSize='large'/>Plan</li></Link>
  <Link to="/ContactUs"> <li> <ContactPhoneIcon fontSize='large'/>Contact Us</li></Link>


  </ul>
<br/>
<hr/>
<br/>
<li style={{width:"10rem", height:"5rem",display:"flex", justifyContent:"space-evenly", padding:"2rem 0"}} onClick={handleLogOut}>
  <LogoutIcon fontSize='large'/>Log out</li>
    </ul>

   </nav>
   <div style={{position:"absolute",width:"0.1rem",top:"5rem",right:"0",height:"75rem",backgroundColor:"lightgray"}}></div>

      </div>
    <div className='item2'>
      <div style={{display:"flex",width:"100%",alignItems:"flex-end"}}>

   
      <div style={{flexGrow:"2",color:"rgba(121,50,128)"}}>
      <h3>Hello Monnus</h3>
      <h6>Today is Monday, 20 October 2022</h6>
      </div>
      <div style={{display:"flex",flexGrow:"3",padding:"0 0",textAlign:"center"}}>
        <input type="text" style={{width:"40rem",height:"4rem", borderRadius:"0.9rem"}}/>
        <SearchIcon fontSize="small"
        style={{height:"4rem",width:"4rem",cursor:"pointer", backgroundColor:"F7F5F2",color:"rgba(121,50,128)",borderRadius:"0.9rem"}} />
        <button style={{width:"15rem",cursor:"pointer",height:"4rem",fontSize:"2rem",backgroundColor:"black",borderRadius:"1rem",marginRight:"1rem", color:"white"}}> Add file</button>
      </div>
      <div>
        {/* empty div for space dont remove*/}
      </div>
      </div>

        {/*  div for boxes*/}

<div>
  <UplaodToBlockchainBoxes/>
</div>
      </div>
    <div className='item3'>
      <div style={{}}>
      <DisplayUplaodTable/>
      </div>
      <div style={{}}>
      <img src={welcomeIMG} alt=" wecome to dashboard"/>
      </div>
    </div>

    <div className='item4'></div>
    </div>
  
  )
}

export default DashBoardPage
