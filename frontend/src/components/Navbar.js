import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FaBars, FaTimes,  FaLinkedin, FaGithub} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

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
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            

            {/* Navbar menu */}
            <ul className={`navbar-menu ${isOpen ? "show" : ""}`}>
                <li><NavLink to="/" className="navbar-link">Home</NavLink></li>
                <li><NavLink to="about-page" className="navbar-link">About</NavLink></li>
                <li><NavLink to="projects-page" className="navbar-link">Projects</NavLink></li>
                <li><NavLink to="skills-page" className="navbar-link">Skills</NavLink></li>
                <li><NavLink to="contact-page" className="navbar-link">Contact</NavLink></li>
            </ul>


            {/* Social media icons */}
            <div className="social-icons">
                <ul>
                    <li className= "linkedin">
                        <a href="https://www.linkedin.com/in/joseph-tewolde-88295a244/" target="_blank" rel="noreferrer" className='linkedinIcon'>
                            LinkedIn <FaLinkedin size={40}/>
                        </a>
                    </li>
                    <li className= "github">
                        <a href="https://github.com/jtewolde/" target="_blank" rel="noreferrer" className='githubIcon'>
                            GitHub <FaGithub size={40}/>
                        </a>
                    </li>
                    <li className= "email">
                        <a href="mailto:jotewolde20@gmail.com" target="_blank" rel="noreferrer" className='emailIcon'>
                            Email <HiOutlineMail size={40}/>
                        </a>
                    </li>
                    <li className= "resume">
                        <a href="https://drive.google.com/file/d/13MFADrnIVfOLXv7zBkwoPMIR73SvTQyA/view?usp=drive_link" target="_blank" rel="noreferrer" className='resumeIcon'>
                            Resume <BsFillPersonLinesFill size={40}/>
                        </a>
                    </li>
                </ul>

                </div>
                
        </div>
    
    )

}