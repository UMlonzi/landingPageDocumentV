import React from 'react'
import Tablecomponent from '../../component/upload/uplaodload'
// import Navbar from '../../components/navbar/Navbar'
import { WelcomeCard,UplaodToBlockchainBoxes,DisplayUplaodTable,SelectBox} from "../../component/upload/uplaodload"
import "./index.css";

const DashBoardPage = () => {
const {innerWidth}=window;
console.log(innerWidth);
  return (
    <div className="pageGrid" style={{maxWidth:`${innerWidth}px`,height:"100vh"}}>
<div className="item1"> 
<h2 class="headingDashboard">Dashboard</h2>
</div>
<div className='item2'> <WelcomeCard /></div>
<div className='item3'><DisplayUplaodTable/></div>
<div className="item4"><UplaodToBlockchainBoxes/></div>
<div className='item5'><SelectBox/></div>
<div className="item16"></div>
    </div>
  )
}

export default DashBoardPage
