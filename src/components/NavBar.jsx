import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../asset/logo.png'

import '../css/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar navbar-expand-sm fixed-top'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="test1" spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="test1" spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="test1" spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="test1" spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu}>Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar