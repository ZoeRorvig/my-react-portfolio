import React from 'react';
import resume from '../../images/resume.jpg';

export default function Resume() {
  return (
    <div className='pages'>
      <h2>Resume</h2>

      <p>Click On the Image Below to Download</p>
      <a href='https://drive.google.com/file/d/1SmkziWnUv7mhef_bbn17P6d7cJUvX93G/view?usp=sharing' target='_blank' rel='noreferrer'>
        <img className='resume' src={resume} alt='resume' />
      </a>
        <h3>Proficiencies</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>SQL</li>
        </ul>
    </div>
  );
}

// TODO: layout
// TODO: change when hovered over