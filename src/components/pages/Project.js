import React from 'react';

export default function Project(props) {
    return (
        <section>
            {props.projects.map((project) => (
                <div className='project'>
                    <div>
                    <h3 className='d-flex align-items-center justify-content-center'>{project.title}</h3>
                    <a href={project.repo} target='_blank' rel='noreferrer' className='footer-links'><SiGithub /></a>
                    </div>
                    <img src={project.image} alt={project.title} className='projectImage' />
                    <div className='d-flex align-items-center justify-content-center'>
                        <a href={project.deployed} target="_blank" rel="noreferrer" className='projectLinks'>Deployed Application</a>
                        {/* <a href={project.repo} target="_blank" rel="noreferrer" className='projectLinks'>GitHub Repo</a> */}
                    </div>
                </div>
            ))}
        </section>
    );
}