import React, {useState} from 'react'
import Typical from 'react-typical'
import girl from './images/77bbe8c860a2341b89c7bf4421e94b973eacaaf3-1038x1356.webp'
import './hero.css'
import Marquee from "react-fast-marquee";

const Hero = () => {
    const steps = [
        'Equity Financing', 1000,
        'Wealth Management', 1000,
       
      ];
  return (
    <div className='main'>
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
        <div className='img1'>
            <img src={girl} alt='girl' height={300}/>
            
        </div>
        </div>
           <hr className='new1'/>
          <div className='split'>
          <p>
            Documents we work with
           </p>
          <Marquee className='Marquee'>
           
             I can be a React component, multiple React components, or just some text.
            </Marquee>
          </div>
        
    </div>
  )
}

export default Hero