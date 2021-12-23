import React from 'react'
import Founder from '../components/images/FounderBW.jpg'
import CoFounder from '../components/images/Co-founder.jpg'

function Founders() {
    return (
        <div className='mt-4'>
            <h4>MEET THE FOUNDER'S</h4>

            <div className='mt-3'>
            <img class="rounded-circle mt-2" height="250px" width="250px" alt="100x100" src={Founder} data-holder-rendered="true" />
            <h4 className='mt-3'>AKASH </h4>
            <p className='m-3'>Hi, This is AKASH Founder and Creator of Diceglyphs.com and Bitcoin enthusiast..!!</p>
            <h6>Electronics and Telecommunication Engineer!</h6>
            </div>
        
            <div className='mt-3'>
            <img class="rounded-circle mt-2" height="250px" width="250px" alt="100x100" src={CoFounder} data-holder-rendered="true" />
            <h4 className='mt-3'>SHUBHAM </h4>
            <p className='m-3'>Hi, This is SHUBHAM Co-Founder of Diceglyphs.com..!!</p>
            <h6>Bitcoin Enthusiast & Nft Collector </h6>
            </div>

            
        </div>
    )
}

export default Founders
