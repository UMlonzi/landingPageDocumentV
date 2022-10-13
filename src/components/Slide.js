import React from 'react';
import './slide.css'
import Marquee from "react-fast-marquee";




function Slide() {

  return (
    <div className='back-color' >
        <div className='show'>
            <h6>TESTIMONIALS</h6>
            <h1>What our clients say</h1>
        </div>
        <Marquee className='Marquee1'>
           <div className='marq'>
            "I realized I’ve been sorely <br></br>needing your advisory services. 
            So excited to work <br></br>with you."
           <br></br>
           <h6>Senior Engineer</h6>
           <h6>Gusto</h6>
           </div>

           <div className='marq'>
           "I realized I’ve been sorely <br></br>needing your advisory services. 
            So excited to work <br></br>with you."
            <br></br>
           <br></br>
           <br></br>
           <br></br>           <h6>Senior Engineer</h6>
           <h6>Gusto</h6>
           </div>

           <div className='marq'>
           "I realized I’ve been sorely <br></br>needing your advisory services. 
            So excited to work <br></br>with you."
            <br></br>
           <br></br>
           <br></br>
           <br></br>           <h6>Senior Engineer</h6>
           <h6>Gusto</h6>
           </div>

           <div className='marq'>
           "I realized I’ve been sorely <br></br>needing your advisory services. 
            So excited to work <br></br>with you."
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <h6>Senior Engineer</h6>
           <h6>Gusto</h6>
           </div>

           <div className='marq'>
           "I realized I’ve been sorely <br></br>needing your advisory services. 
            So excited to work <br></br>with you."
            <br></br>
           <br></br>
           <br></br>
           <br></br>
          <h6>Senior Engineer</h6>
           <h6>Gusto</h6>           </div>
     
            </Marquee>

    </div>
  )
}

export default Slide