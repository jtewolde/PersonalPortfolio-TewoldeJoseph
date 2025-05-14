import React from 'react'
import RRH from '../assets/RRH-Screenshot.png'
import TimelyCuts from '../assets/TimelyCuts.png'
import NBAStats from '../assets/NBAStatsApp.png'
import Checkpoint from '../assets/CheckpointHomeScreen.png';
import { Link } from 'react-router-dom'
import '../pages/styling/Projects.css'

const projects = [
    {
        name: "CheckPoint - Gaming Journal",
        description: "CheckPoint is a sleek, Next.js-powered web application built for gamers who want to stay organized and intentional about their gaming experiences. Whether you're deep into a long RPG or juggling multiple titles, CheckPoint helps you track your in-game progress, log detailed session journals, and visualize your journey over time. Designed with both casual and dedicated players in mind, it ensures you’ll always remember what you accomplished—and where to pick up next. From backlog management to session summaries, CheckPoint transforms how you interact with your games.",
        image: Checkpoint,
        techStack: ['NextJS', 'React', 'TypeScript', 'MongoDB', 'Node.js', 'Better-Auth', 'IGDB API', 'Mantine UI'],
        github: "https://github.com/jtewolde/CheckPoint-PersonalizedGamingJournal",
        website: "https://website.com"
    },
    {
        name: "Roadrunner Resource Hub",
        description: "The Roadrunner Resource Hub is a web application that provides a platform for MSU Denver students to share resources and information with each other. The application allows students to create, read, update, and delete resources. The application also allows students to search for resources by category and title. The application was created using React, Node.js, Express, and MongoDB. The application was deployed using Firebase. This was created as a senior project for the CS4610 course at MSU Denver with a team of 4 students using Agile methodologies. My role in the project was a full-stack developer and worked on the front-end and back-end of the application.",
        image: RRH,
        techStack: ["React", "Node.js", "Express", "MongoDB", "HTML", "CSS", "Firebase"],
        github: "https://github.com/BraedonB98/CS4610-RoadRunnerResourceHub",
        website: "https://road-runner-resource-hub.web.app/ "
    },
    {
        name: "Timely Cuts",
        description: "Timely Cuts is a web application that provides a platform for barbers and clients to schedule appointments. The application allows barbers to create, read, update, and delete appointments. The application also allows clients to search for barbers and schedule appointments. The application was created using React, Node.js, Javascript, HTML, CSS, and Firebase. The application was deployed using GitHub Pages. This was a personal project that I created to learn how to create a web application using React and Firebase in order to solve a problem that I have experienced with scheduling appointments at barbershops.",
        image: TimelyCuts,
        techStack: ["React", "Node.js", "Firebase", "CSS", "HTML", "MongoDB", "JavaScript"],
        github: "https://github.com/jtewolde/barbershop-react-project",
        website: "https://jtewolde.github.io/barbershop-react-project/"
    },
    {
        name: "NBA Statistic Web Application",
        description: "The NBA Statistic Web Application is a web application that provides NBA statistics for players and teams. The application allows users to search for players and teams and view their statistics. The application was created using Python, Flask, and SQLAlchemy. The application was deployed using Docker. This was a personal project that I created to learn how to create a web application using Python and Flask and to learn how to deploy a web application using Docker with my interest in basketball.",
        image: NBAStats,
        techStack: ["Python", "Flask", "HTML", "CSS", "SQLAlchemy", "Docker"],
        github: "https://github.com/jtewolde/NBAStats-FlaskWebApp",
        website: "https://website.com"
    }
]


export default function Projects() {
    return (
        <div className="projects-page" id="projects">

            <div className="projects-container">
                
            <h1 className="projects-title">Projects</h1>

            <p className="projects-description-title">These are some of the projects I have worked on! Click on the project to view the code and the website.</p>
                
                <div className="projects-list">
                    {projects.map((project, index) => {
                        return (
                            <div className="projects-card" key={index}>

                                <h2 className="projects-name">{project.name}</h2> <br />

                                <img src={project.image} alt={project.name} className="projects-image" />

                                <div className="projects-content"></div>

                                    <p className="projects-description">{project.description}</p>

                                    <div className="projects-tech-stack">
                                        {project.techStack.map((tech, index) => {
                                            return (
                                                <button key={index} className="projects-tech-button">{tech}</button>
                                            )
                                        })}
                                    </div>


                                    <div className="projects-buttons">

                                        <button className="projects-button">
                                            <Link to={project.github} target="_blank">Visit Source Code</Link>
                                        </button>

                                        <button className="projects-button">
                                            <Link to={project.website} target="_blank">Visit Website</Link>
                                        </button>

                                    </div>

                                </div>

                        )
                    })}
                    
                </div>
                
            </div>
        </div>
    )
        
}
