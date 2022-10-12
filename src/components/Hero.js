import React, {useState} from 'react'
import './hero.css'
const Hero = () => {
    const [words, setWords] = useState(["b" , "Alex", "Lucie", "Michael"]);

  return (
    <div className='hero'>
        <div className='content'>
        
        <span>
    
        </span>
      
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