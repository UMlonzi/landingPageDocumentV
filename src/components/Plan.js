import React from 'react';
import './plan.css'
import plan from './images/craft-financial-business-plan-1.jpeg'


function Plan() {

  return (
    <div className='Plan'>

    <div className='scale'>
    <img src={plan} alt='plan' className='Plans'/>

    </div>
    <div className='target'>
        <h6>OUR PLANS</h6>
        <br></br>
        <h1>Pricing that scales to <br></br>fit your needs</h1>
        <p>We are the company that provides a largest <br></br>verifying of documents</p>
        <button className='price_button'>Get Started</button>
    </div>
</div>
  )
}

export default Plan