import React from 'react';
import './tabsplan.css'
import plan from './images/craft-financial-business-plan-1.jpeg'
import '@blueprintjs/core/lib/css/blueprint.css';
import { Tabs, Tab } from "@blueprintjs/core";
import { useNavigate, useNavigation } from 'react-router';
import { DIVIDER } from '@blueprintjs/core/lib/esm/common/classes';

// const navigate=useNavigate();
// const navigateToAuth=()=>{
//     navigate('/Auth')

const TabsPlan = () => {

    // const handleClick = () => setClick(!click)
    const navigate=useNavigate();
    const navigateToAuth=()=>{
        navigate('/Auth')
    }
    return (
        <div className='boxes'>
            {/* <div className='space_boxes'>
            <Tabs className='Tabs'         >
                <Tab id="rx" title="Monthly"  className='title' panel={
                    <div className='basic'>
                    <p>Sample Content 1</p>

                    </div>
                    
                } />
                <Tab id="ng" title="Annual " className='title'  panel={
                    <div className='basic_1'>
                    <p>Sample Contet 2</p>

                    </div>
                    
                } />
            </Tabs>
            </div> */}
        </div >

    );
            }
export default TabsPlan