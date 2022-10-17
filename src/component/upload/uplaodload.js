import { Box, Button, Select } from '@mui/material'
import { borderBottom } from '@mui/system';

import React,{useState}from 'react';
import Welocome from "../../imagess/welcomeIMG.svg";


import Boxes from '../onLoadBoxes/Boxes';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import "./uploadload.css";
import DescriptionIcon from '@mui/icons-material/Description';

// ========================================upload files table====================
function DisplayUplaodTable(){
    console.log("hello");
    const [uplaodFileArr,setUplaodFileArr]=useState([]);
    const handlefileUploads=(e)=>{
        if(!e.target.value)return;
        setUplaodFileArr(arr=>arr)
        console.log(e.target.value);
    }
    return(
        <>
<div style={{position: "relative"}}>


<table className='table'>
    <tr>
        <th></th>
        <th>Document Name</th>
        <th>Created On</th>
        <th>From</th>
        <th>Status</th>
        <th></th>

    </tr>
    <tr>
<td style={{width:"100px",textAlign:"center"}}><DescriptionIcon sx={{fontSize:"4.0rem"}}/></td>
<td>Matric certificate</td>
<td>22 Sep 2022</td>
<td style={{paddingLeft:'3.3%'}}>
<h6 
style={{lineHeight:"60px",fontSize:"15px",
color:"rgb(0,111,245,1)",textAlign:"center"}}>stevensteven22@gmail.com</h6></td>
<td><h4 className='tableHeader4'> complete</h4></td>
<td><h2><a href="">View</a></h2></td>
    </tr>

    <tr>
<td style={{width:"100px",textAlign:"center"}}><DescriptionIcon sx={{fontSize:"4.0rem"}}/></td>
<td>Employee of the Month certificate</td>
<td>7 Sep 2022</td>
<td style={{paddingLeft:'3.3%'}}>
<h6 
style={{lineHeight:"60px",fontSize:"15px",
color:"rgb(0,111,245,1)",textAlign:"center"}}>stevensteven22@gmail.com</h6></td>
<td><h4 className='tableHeader4' style={{backgroundColor:"rgba(255, 165, 0, 0.33)",color:'darkorange'}} > pending</h4></td>
<td><h2><a href="">View</a></h2></td>
    </tr>
    <tr>
<td style={{width:"100px",textAlign:"center"}}><DescriptionIcon sx={{fontSize:"4.0rem"}}/></td>
<td>Mine Engineers certificate of competency</td>
<td>1 Aug 2022</td>
<td style={{paddingLeft:'3.3%'}}>
<h6 
style={{lineHeight:"60px",fontSize:"15px",
color:"rgb(0,111,245,1)",textAlign:"center"}}>stevensteven22@gmail.com</h6></td>
<td><h4 className='tableHeader4'> complete</h4></td>
<td><h2><a href="">View</a></h2></td>
    </tr>
    <tr>
<td style={{width:"100px",textAlign:"center"}}><DescriptionIcon sx={{fontSize:"4.0rem"}}/></td>
<td>Birth certificate</td>
<td>15 July 2022</td>
<td style={{paddingLeft:'3.3%'}}>
<h6 
style={{lineHeight:"60px",fontSize:"15px",
color:"rgb(0,111,245,1)",textAlign:"center"}}>stevensteven22@gmail.com</h6></td>
<td><h4 className='tableHeader4'> complete</h4></td>
<td><h2><a href="">View</a></h2></td>
    </tr>
</table>

</div>
</>
  )
};
const WelcomeCard=()=>{
    return(
        <>
<div style={{height:"100%",width:"100%",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around"}}>       
<div style={{display:"flex" ,borderBottom:"2px solid rgba(128,128,128,0.4)",padding:"7px",width:"100%"
,height:"200px",backgroundColor:"white",alignItems:"center",justifyContent:"space-between",flexDirection:"row"}}>
    <div 
    style={{display:"flex",flexDirection:"column",textAlign:"start",lineHeight:"30x"}}>
<h2>Welcome Back, </h2>
<p style={{fontSize:"20px"}}>Get the power to take your BlockDoc to the next level</p>
    </div>
<img src={Welocome} alt="welcom" style={{width:"200px",height:"200px",alignSelf:"end",}}/>
</div>
        </div>
        </>
    )
};
const UplaodToBlockchainBoxes=()=>{

  return(
    <>
    <Box sx={{height:"100%",
    width:"100%",alignItems:"flex-start",lineHeight:"2em",display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
        <br/>
        <Boxes color={"rgba(46,126,40)"} title={"Verified"}/>
        <br/>
        <Boxes color={"rgba(197, 57, 19)"} title={"Rejected"}/>
        <br/>
        <Boxes color={"rgba(255,161,54)"} title={"Pending"}/>
    </Box>
        </>
    )
    }
     const SelectBox=()=>{
        return(
            <>
            <h2>Select</h2>
<form className='SelectBox'>
<select 
style={{width:"90%",height:"5rem",fontSize:"2rem",outline:"none",borderRadius:"1.5rem" ,padding:"5px 10px"}}>
    <option>Matric certificate</option>
</select>
<button
  style={{ cursor:"pointer",width:"10rem",height:"4rem",fontSize:"20px",borderRadius:"1.1rem",
  backgroundColor:"black", color:"white",}}> Upload File</button>
</form>
            </>
        )
     }

// ==========================MUI file upload fun====================================
const Tablecomponent=()=>{
    
    return(
        <>
    <div style={{width:"100vw",height:"70vh",display:"flex"}}>

{/* {welcomeCard()} */}
 
{UplaodToBlockchainBoxes()}
    </div>
    {DisplayUplaodTable()}
    </>
  )
}
export default Tablecomponent;
export {
    WelcomeCard,
    UplaodToBlockchainBoxes,
    DisplayUplaodTable,
    SelectBox
}
