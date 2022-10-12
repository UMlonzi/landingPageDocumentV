import React, {useState} from 'react'
import Typical from 'react-typical'

import './hero.css'
const Hero = () => {
    const steps = [
        'Equity Financing', 1000,
        'Wealth Management', 1000,
       
      ];
  return (
    <div className='hero'>
        <div className='content'>
        
          <div>
        <Typical wrapper="span" steps={steps} loop={1} className={'caca'} />
      </div>
      
      <h1>for startup employees</h1>
            <p>
            Get equity planning, stock option financing, and wealth <br></br>
            management from advisors that know how stock options <br></br>
            and equity can help grow your wealth.
            </p>
            <button href='/' className='button'>Get started</button>
        </div>
    </div>
  )
}

export default Hero