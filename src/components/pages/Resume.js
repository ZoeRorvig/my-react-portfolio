import React from 'react';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>

      <p>Click On the Image Below to Download</p>
      <a href='https://drive.google.com/file/d/1SmkziWnUv7mhef_bbn17P6d7cJUvX93G/view?usp=sharing' target='_blank' rel='noreferrer'>
        <img src={require('../../images/resume.jpg')} alt='resume'/>
        </a> 
    </div>
  );
}

// TODO: layout
// TODO: change when hovered over