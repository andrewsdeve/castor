import React from 'react'
import CartWidget from './CartWidget.js'
import { FaApple} from 'react-icons/fa'


const NavBar = () => {
  return (
    <>
      
      <div className='Container'>
        <div className='LogoContainer'>
            <FaApple/>
            <p>Castor-</p>
            <p>Online</p>
            <ul className='Menu'>
              <li className='MenuItem'>
                <a className='MenuItemLink' href="https://www.apple.com/">iPhone</a>
              </li>
              <li className='MenuItem'>
                <a className='MenuItemLink' href="https://www.apple.com/">iPad</a>
              </li>
              <li className='MenuItem'>
                <a className='MenuItemLink' href="https://www.apple.com/">Mac</a>
              </li>
              <li className='MenuItem'>
                <a className='MenuItemLink' href="https://www.apple.com/">AirPods</a>
              </li><li className='MenuItem'>
                <a className='MenuItemLink' href="https://www.apple.com/">Watch</a>
              </li>
              <li className='MenuItem'>
                <a className='MenuItemLink' href="https://www.apple.com/">Accesories</a>
              </li>
            </ul>
            <CartWidget/>
        </div>
      </div>
    </>



    
    
  )
}

export default NavBar