import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css"

const Home = () => {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi, I'm Tejas.</h2>
                <div className='prompt'>
                    <p>I'm a budding fullstack software engineer.</p>
                    <LinkedInIcon />
                    <EmailIcon />
                    <GitHubIcon />
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Frontend</h2>
                        <span>ReactJS, Redux, HTML/CSS, MaterialUI, TailwindCSS</span>
                    </li>
                    <li className='item'>
                        <h2>Backend</h2>
                        <span>NodeJS, Ruby on Rails, MySQL</span>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <span>C++, JavaScript, C#, Python, C</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home