import React from 'react'
import DiceCeleb from '../components/images/CelebDice.png'
import DiceGlyph from '../components/images/Diceglyph.jpeg'
import CryptoCeleb from '../components/images/CryptoCeleb.jpeg'
import DiceFastFood from '../components/images/DiceFood.jpeg'

import Slids from './Slids'
function Projects() {
    return (
        <div className='m-2' id='projects'>

            <h2>OUR PROJECTS </h2>
            <hr/>
            <h4 className='mt-4'>Diceglyphs Collection</h4>
            <img src={DiceGlyph} class="d-block w-100" alt="DiceCeleb"  />
            <a href='https://opensea.io/collection/diceglyphs-collection'  target="_blank"><button className='btn btn-outline-primary mt-2 mb-3 btn-lg rounded-pill'>SEE MORE ON OPENSEA</button></a>
            <hr />

            <h4 className='mt-4'>Dice Celebs Family</h4>
            <img src={DiceCeleb} class="d-block w-100" alt="DiceCeleb"  />

            <a href='https://opensea.io/collection/dice-celebs-family'  target="_blank"><button className='btn btn-outline-primary mt-2 mb-3 btn-lg rounded-pill'>SEE MORE ON OPENSEA</button></a>
            <hr />

            <h4 className='mt-4' >Dice Crypto Family </h4>
            <img src={CryptoCeleb} class="d-block w-100" alt="DiceCeleb"  />

            <a href='https://opensea.io/collection/dice-crypto-family'  target="_blank"><button className='btn btn-outline-primary mt-2 mb-3 btn-lg rounded-pill'>SEE MORE ON OPENSEA</button></a>
            <hr />

            <h4 className='mt-4'>Fast Food Diceglyphs</h4>
            <img src={DiceFastFood} class="d-block w-100" alt="DiceCeleb"  />

           <a href='https://opensea.io/collection/fast-food-diceglyphs'  target="_blank"><button className='btn btn-outline-primary mt-2 mb-3 btn-lg rounded-pill'>SEE MORE ON OPENSEA</button></a>
            <hr/>


        </div>
    )
}

export default Projects
