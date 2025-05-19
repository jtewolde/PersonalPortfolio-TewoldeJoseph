import React from "react";
import PortfolioImage from '../assets/PortfolioImage.jpg';
import '../pages/styling/Home.css';
import { useNavigate } from "react-router-dom";


export default function Home() {

    // Create navigate action variable to go to projects section when button clicked on
    const navigate = useNavigate()

    // Function to handle click for view work Button
    const handleClick = () =>{
        navigate('projects');
    }
    
    return (
        <div className="home-background" id = "home">

            <div className="home-container">

                <p className="home-title">Hello, My Name is </p>
                <h1 className="home-name">Joseph Tewolde </h1>
                <img src={PortfolioImage} alt="Joseph Tewolde" className="home-image" />
                <h2 className="home-subtitle">I'm an aspiring software developer!</h2>

                <p className="home-description">I am a new CS graduate from Metropolitian State University of Denver in May 2025!
                    I am passionate about software development and I am always looking for new opportunities to learn and grow! 
                    
                </p>
                

            </div>

        </div>
    )
}