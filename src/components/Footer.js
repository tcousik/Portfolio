import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <Link to="https://github.com/tcousik"><GitHubIcon /></Link>
                <a href="mailto:tcousik0@gmail.com">
                    <EmailIcon />
                </a>
                <Link to="https://www.linkedin.com/in/tcousik0"><LinkedInIcon /></Link>
            </div>
            <p> &copy; 2023 tcousik.com</p>
        </div>
    )
}

export default Footer