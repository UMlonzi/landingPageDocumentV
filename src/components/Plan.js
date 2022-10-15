import React from 'react';
import './plan.css'
import plan from './images/craft-financial-business-plan-1.jpeg'


function Plan() {

  return (
    <div className='Plan'>

    <div className='plans'>
    <img src={plan} alt='plan' className='Plans'/>

    </div>
    <div className='story'>
        <h6>OUR PLAN</h6>
        <br></br>
        <h1>Pricing that scales to fit your needs</h1>
        <p>We are the company that provides a largest verifying of documents</p>
        <button></button>
    </div>
</div>
  )
}

export default Plan