import React from 'react';
import { SiGithub } from "@react-icons/all-files/si/SiGithub";

export default function Project(props) {
    return (
        <section className='projectSection'>
            {props.projects.map((project) => (
                <div className='project'>
                    <div className='project-title'>
                        <h3 className='d-flex align-items-center justify-content-center'>{project.title}</h3>
                        <a href={project.repo} target='_blank' rel='noreferrer' className='repo-links'><SiGithub /></a>
                    </div>
                    <div className='imgContainer'>
                        <a href={project.deployed} target="_blank" rel="noreferrer">
                            <img src={project.image} alt={project.title} className='projectImage' />
                            <div className='imageOverlay'>
                            <p>(Click Here for Deployed Project)</p>
                            <p>{project.summary}</p>
                            <p>Tech Used: {project.tech}</p>
                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </section>
    );
}