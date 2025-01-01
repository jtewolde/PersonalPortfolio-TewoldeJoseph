import React from 'react'
import ProjectCard from '../components/ProjectCard'
import '../pages/styling/Projects.css'

const projects = [
    {
        name: "Project 1",
        description: "Project 1 description",
        image: "https://via.placeholder.com/150",
        github: "https://github.com",
        website: "https://website.com"
    },
    {
        name: "Project 2",
        description: "Project 2 description",
        image: "https://via.placeholder.com/150",
        github: "https://github.com",
        website: "https://website.com"
    },
    {
        name: "Project 3",
        description: "Project 3 description",
        image: "https://via.placeholder.com/150",
        github: "https://github.com",
        website: "https://website.com"
    }
]


export default function Projects() {
    return (
        <div className="projects-page">

            <div className="projects-container">
                
            <h1 className="projects-title">Projects</h1>

            <p className="projects-description">These are some of the projects I have worked on! Click on the project to view the code and the website.</p>
                
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project}/>
                    ))}
                </div>
                
            </div>
        </div>
    )
        
}
