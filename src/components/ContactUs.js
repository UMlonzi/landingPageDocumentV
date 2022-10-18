import React from 'react';
import './contactUs.css'
import happy_employees from './images/Happy-employees.jpeg'

import { useNavigate, useNavigation } from 'react-router';
import TabsPlan from './TabsPlan';


const ContactUs = () => {

  // const handleClick = () => setClick(!click)
//   const navigate=useNavigate();
//   const navigateToContactUs=()=>{
//       navigate('/Auth')
  
  return (
   <div>
    <div className='aboutUs'>

        <div className='employees'>
        <img src={happy_employees} alt='happy_employees' className='happy_employees'/>

        </div>
        <div className='story_1'>
            <h6>CONTACT US</h6>
            <br></br>
            <h1>We’re here to help  </h1>
            <p>Let us know who you are and what you're looking for below, <br></br>
                and we'll get your message to the right Docuify team.

            </p>
        </div>
    </div>
    <div className='form'>
        <div className='form_heading'>

        </div>
        <div className='form_table'>

        </div>
    </div>
    </div>

  )
  }
export default ContactUs