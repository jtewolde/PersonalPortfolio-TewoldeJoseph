import React from 'react'
import '../components/styling/ProjectCard.css'


export default function ProjectCard({project}) {
    return (

        <div className="project-card-container">

            <div className="project-card">

                <img src={project.image} alt="project" className="project-image"/>
                <h2 className="project-name">{project.name}</h2>
                <p className="project-description">{project.description}</p>
                <button className="project-GitHub-button" onClick={() => window.open(project.github)}>View Project's GitHub</button>
                <button className="project-Website-button" onClick={() => window.open(project.website)}>View Project's Website</button>
                
            </div>

        </div>
    )
}
