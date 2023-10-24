import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { projectList } from '../ProjectList'

import "../styles/Projects.css"

const Projects = () => {
    return (
        <div className='projects'>
            <div className='projectList'>
                {projectList.map((project, index) => {
                    return <ProjectItem id={index} name={project.name} image={project.image} />
                })}
            </div>
        </div>
    )
}

export default Projects