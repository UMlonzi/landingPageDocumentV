import React from 'react';
import './data.css'
import video from './images/1_UINAsA-ZAG8UBYKhENkWiw.gif'
import { IconButton } from "rsuite";
import {  Search } from '@rsuite/icons';
import SortDownIcon from '@rsuite/icons/SortDown';
import miss from './images/8ac5c7f468f6a8686d435263efcf994b2a321369-1177x1224.webp'


function Data() {
    const ButtonStyle = { margin: "0px 10px" };

  return (
    <div className='toppest'>
        <div className='information'>
            <h4>THE LEADING EQUITY PLANNING PLATFORM</h4>
            <h1>You've got startup equity. Now what?</h1>
            <p>see your full net worth including your stock options, compare exercise and selling strategies, and see how taxes impact your net gains</p>
        </div>
        <div className='img2'>
        <img src={video} alt='video' height={300}/>

        <h1>How we help our clients</h1>
        <IconButton icon={<SortDownIcon />} className='buttonStyle' />

        </div>

        <div className='divide'>
            <div className='one'>
            <h5>EQUITY, Tax & IPO PLANNING</h5>
            <h3>Work with a financial advisor to align <br></br>
            your stock options with your financial <br></br>goals.
            </h3>
            <button href='/' className='button3'>Log in</button>
            <button href='/' className='button4'>Get started</button>
            </div>

            <div className='two'>

            <img src={miss} alt='video' className='miss'/>

            </div>
        </div>

    </div>
  )
}

export default Data