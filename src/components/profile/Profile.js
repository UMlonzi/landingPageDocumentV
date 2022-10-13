import React from 'react'
import pic2 from '../images/old_man.png'
import './profile.css';
import {FiImage} from 'react-icons/fi';

function Profile() {
  return (
    <div className='profile'>
            <div className='top-lane'>
                <h2>Profile</h2>
                <hr/>
            </div>
        <div className='picture-plus'>
        <div className='picture-others'>
        <div className='profile-pic'>
            <img src={pic2}/>
        </div>
            <div className='spaces'>
            <label>
                Name
            </label>
            <br/>
            <br/>
            <input placeholder='Name'/>
            </div>
            <div className='spaces'>
            <label>
                Email
            </label>
            <br/>
            <br/>
            <input placeholder='Email'/>
            </div>
            <div class="button-wrap">
                <label className='button300' for="upload"><FiImage/>Upload</label>
                <input id="upload" type="file"/>
             </div>
            </div>
            <div className='left-site'>
            <div className='spaces'>
            <label>
               Surname
            </label>
            <br/>
            <br/>
            <input placeholder='Surname'/>
            </div>
            <div className='spaces'>
            <label>
                Phone Number
            </label>
            <br/>
            <br/>
            <input placeholder='Phone Number'/>
            </div>
            <div className='spaces'>
            <label>
                Professional
            </label>
            <br/>
            <br/>
            <input placeholder='Professional'/>
            </div>
            <div className='spaces'>
            <label>
                Public Key
            </label>
            <br/>
            <br/>
            <input placeholder=' Public Key'/>
            </div>
            <div>
                <button className='saveBtn'>Save</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Profile