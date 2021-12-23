import React from 'react'
import Twitter from '../components/icons/twitter.svg'
import Fb from '../components/icons/facebook.svg'
import Instagram from '../components/icons/instagram.svg'
import Discord from '../components/icons/discord.svg'
import Telegram from '../components/icons/telegram.svg'
import Logo from '../logo.svg'




function Footer() {
    return (
        <div id='contact'>
            <hr />
            <div className='mb-2'>
                <img src={Logo} height="100" width="100" alt='The Logo' />
                <h3>Diceglyphs</h3>
            </div>
            <p>Collect digital items secured with blockchain</p>
            <div className='mb-4'>
                <h6 className='mb-3'>Follow Us On</h6>
                <a href='https://twitter.com/diceglyphs'  target="_blank"><img src={Twitter} height="40px" width="40px"  /></a> &nbsp;&nbsp;
                <a href='https://www.facebook.com/akash.bhaware'  target="_blank"><img src={Fb} height="40px" width="40px"  /></a>&nbsp;&nbsp;
                <a href='https://t.me/+eDc-XrYy0hNjZjE9'  target="_blank"><img src={Telegram} height="40px" width="40px"  /></a>&nbsp;&nbsp;
                <a href='https://discord.gg/Y2yMGBzcun'  target="_blank"><img src={Discord} height="40px" width="40px"  /></a>&nbsp;&nbsp;
                <a href='https://www.instagram.com/akashbhaware/'  target="_blank"><img src={Instagram} height="40px" width="40px"  /></a>&nbsp;&nbsp;

            </div>

        </div>
    )
}

export default Footer
