import { Box, Button } from '@mui/material'
import { borderBottom } from '@mui/system';
import React from 'react';
import Welocome from "../../images/welcomeIMG.svg";
import Boxes from '../onLoadBoxes/Boxes';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import "./uploadload.css";
import DescriptionIcon from '@mui/icons-material/Description';

// ========================================upload files table====================
function DisplayUplaodTable(){
    console.log("hello");
    return(
<table className='table'>
    <tr>
        <th></th>
        <th>Document Name</th>
        <th>Created On</th>
        <th>Action</th>
        <th>Status</th>
    </tr>
    <tr>
<td style={{width:"100px",textAlign:"center"}}><DescriptionIcon sx={{fontSize:"4.0rem"}}/></td>
<td>Matric certificate</td>
<td>7 Sep 2022</td>
<td style={{paddingLeft:'3.3%'}}>
<h3 
style={{width:"8rem",height:"4rem",lineHeight:"60px",fontSize:"30px",borderRadius:"100%",
color:"rgb(145,246,245,1)",backgroundColor:"skyblue",textAlign:"center"}}>SN</h3></td>
<td><h4 className='tableHeader4'> complete</h4></td>
    </tr>
</table>
  )
};
const WelcomeCard=()=>{
    return(
        <>
<div style={{height:"100%",minWidth:"30em",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around"}}>       
<div style={{display:"flex" ,borderBottom:"2px solid rgba(128,128,128,0.4)",padding:"7px",width:"40em"
,height:"200px",backgroundColor:"#ECF5FF",alignItems:"center",justifyContent:"space-between",flexDirection:"row"}}>
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
    <Box sx={{height:"100%",
    width:"100%",alignItems:"flex-start",lineHeight:"2em",display:"flex",flexDirection:"column"}}>
        <br/>
        <Boxes color={"#02781E"} title={"Verified"}/>
        <br/>
        <Boxes color={"#9E1215"} title={"Rejected"}/>
        <br/>
        <Boxes color={"#3F3D3F"} title={"Pending"}/>
    </Box>
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
}
