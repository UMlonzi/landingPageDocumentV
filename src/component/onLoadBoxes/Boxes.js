import React,{useState} from 'react'
import { Box } from '@mui/system'

const Boxes = ({color="gray",title}) => {
    const [count,setCount]=useState(0);
  return (
    <div className='boxStyle'
     style={{display:"flex",padding:"5px",flexDirection:"column",justifyContent:"space-between",boxShadow:"4px 3px 5px lightgray",backgroundColor:"#B7B6B6",width:"20rem",height:"10rem",lineHeight:"4.1rem"}}>
<p style={{color:"white"}}>

    {title}  
    ({count})
    </p>

 <div style={{height:"4rem",backgroundColor:color,width:"100%",padding:"10px 0px 10px 50px" }}>

<div style={{height:"80%",width:"80%",backgroundColor:"white", }}></div>

 </div>
   </div>
  )
};

export default Boxes;