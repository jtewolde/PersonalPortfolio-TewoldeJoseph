import React from 'react'

import CSS from '../assets/css.png';
import HTML from '../assets/html.png';
import JS from '../assets/javascript.png';
import Python from '../assets/Python.png'
import GitHub from '../assets/github.png';
import ReactIcon from '../assets/react.png';
import nodeJS from '../assets/node.png';
import Firebase from '../assets/firebase.png';
import MongoDB from '../assets/mongo.png';
import Flask from '../assets/flask1.png';
import Next from '../assets/NextJS.png';
import TypeScript from '../assets/Typescript.png'

import '../pages/styling/Skills.css';

export default function Skills() {
    return (
        <div className="skills-background" id="skills">

            <div className="skills-container">

                <h1 className="skills-title">Techincal Skills</h1>
                
                <p className="skills-description-text">
                Here are some of the skills I have acquired through my education and experiences:
                </p>

                <div className="skills-list">

                    
                    <div className="skills-item">
                        <img src={Next} alt="NextJS" className="skills-image"/>
                        <p className="skills-ptext">NextJS</p>
                    </div>

                    <div className="skills-item">
                        <img src={ReactIcon} alt="React" className="skills-image"/>
                        <p className="skills-ptext">React</p>
                    </div>
                    
                    <div className="skills-item">
                        <img src={HTML} alt="HTML" className="skills-image"/>
                        <p className="skills-ptext">HTML</p>
                    </div>

                    <div className="skills-item">
                        <img src={CSS} alt="CSS" className="skills-image"/>
                        <p className="skills-ptext">CSS</p>
                    </div>

                    <div className="skills-item">
                        <img src={JS} alt="JS" className="skills-image"/>
                        <p className="skills-ptext">JavaScript</p>
                    </div>

                    
                    <div className="skills-item">
                        <img src={TypeScript} alt="Typescript" className="skills-image"/>
                        <p className="skills-ptext">TypeScript</p>
                    </div>


                    <div className="skills-item">
                        <img src={Python} alt="Python" className="skills-image-Python"/>
                        <p className="skills-ptext">Python</p>
                    </div>

                    <div className="skills-item">
                        <img src={nodeJS} alt="NodeJS" className="skills-image"/>
                        <p className="skills-ptext">NodeJS</p>
                    </div>

                    <div className="skills-item">
                        <img src={Firebase} alt="Firebase" className="skills-image"/>
                        <p className="skills-ptext">Firebase</p>
                    </div>

                    <div className="skills-item">
                        <img src={MongoDB} alt="MongoDB" className="skills-image"/>
                        <p className="skills-ptext">MongoDB</p>
                    </div>

                    <div className="skills-item">
                        <img src={GitHub} alt="GitHub" className="skills-image"/>
                        <p className="skills-ptext">GitHub</p>
                    </div>

                    <div className="skills-item">
                        <img src={Flask} alt="Flask" className="skills-image"/>
                        <p className="skills-ptext">Flask</p>
                    </div>

                </div>


            </div>

        </div>
    )
}
