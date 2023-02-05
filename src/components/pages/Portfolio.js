import React from 'react';
import Project from './Project';

const projects = [
    // {
    //     id: 0,
    //     title:
    //     image:
    //     repo:
    //     deployed: 
    // },
];

export default function Portfolio() {
  return (
    <div>
        <h1>Portfolio</h1>

        <Project projects={projects} />
    </div>
  );
}