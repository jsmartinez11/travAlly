import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.scss';

const Navbar = () => {
  return (
    <div>
    <div className='sum'>
        <div className='logo'>
            travALLY
        </div>
        <nav className='item'>
            <ul className='ul'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                    <Link to='/findallys'>Find ALLYs</Link>
                </li>
                <li>
                    <Link to='/community'>Community</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Us</Link>
                </li>
            </ul>
        </nav>
    </div>
    <div className='tagline'>
         "Every Traveller Needs an Ally" 
    </div>
    </div>
    
  )
}

export default Navbar