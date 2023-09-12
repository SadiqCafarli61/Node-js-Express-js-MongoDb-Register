import React from 'react'
import LogoSvg from '../assets/logo.svg'
import Button from './Button'
const Header = () => {
  return (
    <div className='header-section'>
        <div className="logo">
 <img src={LogoSvg} alt="" />
        </div>
        <div className="links">
        <a href="">Solutions</a>
        <a href="">Client Stories</a>
        <a href="">Pricing</a>
        <a href="">Carrers</a>
        <a href="">About Us</a>
        </div>
        <div className="buttons">
 <Button icindekiYazi='Get in Touch'/>
        </div>

    </div>
  )
}

export default Header