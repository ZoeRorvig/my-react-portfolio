import React from 'react';

export default function Project(props) {
    return (
        <section>
            {props.projects.map((project) => (
                <div className='project'>
                    <h3>{project.title}</h3>
                    <img src={project.image} alt={project.title}/>
                    <a href={project.deployed} target="_blank" rel="noreferrer">Deployed Link</a>
                    <a href={project.repo} target="_blank" rel="noreferrer">GitHub Repo</a>
                </div>
            ))}
        </section>
    );
}