import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import { useParams } from 'react-router-dom'

const ProjectDisplay = () => {
    const { id } = useParams();


    return (
        <div>ProjectDisplay</div>
    )
}

export default ProjectDisplay