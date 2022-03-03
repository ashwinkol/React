import React from 'react'
import myImage from '../components/images/celeb.webp'
import Founders from './Founders'
import Projects from './Projects'
import Slids from './Slids'
function Home() {
    return (
        <div>
            <div className='row mt-4'>

            </div>


            <h2>Welcome To Diceglyphs!</h2>
            <div className='m-3'>
                Diceglyphs are the first “on-chain” dice art on the Ethereum blockchain
                . They are a completely manual mechanism for the creation and ownership of an artwork.
            </div>
            <div>

                <img src={myImage} className='img-fluid mt-3' width="95%" />
            </div>

            <a href='https://opensea.io/collection/diceglyphs-collection' target="_blank"><button className='btn btn-primary mt-5 btn-lg rounded-pill'>TOP COLLECTIONS</button></a>


            <h5 className='mt-5'>OUR TOP NFT'S</h5>


            <Slids />

            <Projects />

            <Founders />
          
        </div>


    )
}

export default Home
