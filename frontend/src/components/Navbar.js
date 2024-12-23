import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars  } from 'react-icons/fa';

import LogoRed from '../assets/LogoRed.png';
import '../components/styling/Navbar.css';

export default function Navbar() {

    // State for toggling the navbar menu
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the navbar menu
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="navbar">

            <div className="navbar-logo ">
                {/* Logo */}
                <img src={LogoRed} alt="Logo" style={{width: "150px", height: "150px", marginLeft: "-30px"}}/>
            </div>
         
            {/* Hamburguer menu for mobile */}
            <button onClick={toggleNavbar} className="navbar-toggle">
                <FaBars />
            </button>
            

            {/* Navbar menu */}
            <ul className={`navbar-menu ${isOpen ? "show" : ""}`}>
                <li><NavLink to="/" className="navbar-link">Home</NavLink></li>
                <li><NavLink to="about-page" className="navbar-link">About</NavLink></li>
                <li><NavLink to="projects-page" className="navbar-link">Projects</NavLink></li>
                <li><NavLink to="skills-page" className="navbar-link">Skills</NavLink></li>
                <li><NavLink to="contact-page" className="navbar-link">Contact</NavLink></li>
            </ul>
        </div>

    
    )

}