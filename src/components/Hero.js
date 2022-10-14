import React, {useState} from 'react'
import Typical from 'react-typical'
import girl from './images/legal-workshop-square-pic-circle-removebg-preview.png'
import './hero.css'
import Marquee from "react-fast-marquee";
import matric from './images/roxann-matric-certificate-1-638.webp'




const Hero = () => {
    const steps = [
        'Docuify', 1000,
        'Trust & Partnership', 1000,
        'Document Verify', 1000,
       
      ];
  return (
    <div className='main'>
        <div className='hero'>
        <div className='content'>
        
          <div>
        <Typical wrapper="span" steps={steps} loop={Infinity} className={'caca'} />
      </div>
      
      <h1>for our clients</h1>
            <p>
            Get equity planning, stock option financing, and wealth <br></br>
            management from advisors that know how stock options <br></br>
            and equity can help grow your wealth.
            </p>
            <button href='/' className='button'>Get started</button>
        </div>
        <div className='img1'>
            <img src={girl} alt='girl' className='girl' height={300}/>
            
        </div>
        </div>
           <hr className='new1'/>
          <div className='split'>
          <p>
            Documents we work with
           </p>
          <Marquee className='Marquee'>
            <div className='space'>
              <div className='change'>Matric Certificate  
              Higher Certificate 
              Diploma Certificate 
              Degree Certificate 
              Honours Certificate
              Doctorate Certificate
              </div>
              </div>
            </Marquee>
          </div>
        
    </div>
  )
}

export default Hero