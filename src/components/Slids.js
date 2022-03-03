import React from 'react'
import DiceCeleb from '../components/images/CelebDice.webp'
import DiceGlyph from '../components/images/Diceglyph.webp'
import CryptoCeleb from '../components/images/CryptoCeleb.webp'
import DiceFastFood from '../components/images/DiceFood.webp'
function Slids() {
    return (
        <div className='m-4'>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={DiceCeleb} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={DiceGlyph} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={CryptoCeleb} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={DiceFastFood} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Slids
