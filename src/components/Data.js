import React from 'react';
import './data.css'
import video from './images/1_UINAsA-ZAG8UBYKhENkWiw.gif'


function Data() {
  return (
    <div className='toppest'>
        <div className='information'>
            <h4>THE LEADING EQUITY PLANNING PLATFORM</h4>
            <h1>You've got startup equity. Now what?</h1>
            <p>see your full net worth including your stock options, compare exercise and selling strategies, and see how taxes impact your net gains</p>
        </div>
        <div className='img2'>
        <img src={video} alt='video' height={300}/>

        {/* <video src={video} width="750" height="500" controls>
        </video> */}
        </div>

    </div>
  )
}

export default Data