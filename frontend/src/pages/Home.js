import React from "react";
import PortfolioImage from '../assets/PortfolioImage.jpg';
import {HiArrowNarrowRight} from 'react-icons/hi';
import '../pages/styling/Home.css';


export default function Home() {
    return (
        <div className="home-background">

            <div className="home-container">

                <p className="home-title">Hello, my name is </p>
                <h1 className="home-name">Joseph Tewolde </h1>
                <img src={PortfolioImage} alt="Joseph Tewolde" className="home-image" />
                <h2 className="home-subtitle">I'm an aspiring software developer</h2>
                <p className="home-description">I am a senior at Metropolitian State University of Denver studying Computer Science. I am passionate about software development and I am always looking for new opportunities to learn and grow! </p>
            
                {/* Button to view my projects/work */}
                <button className="home-button">View My Work <HiArrowNarrowRight className="home-button-icon" /></button>

            </div>

        </div>
    )
}