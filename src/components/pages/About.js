import React from 'react';
import profilePicture from '../../images/profile-picture.jpg';

export default function About() {
  return (
    <div className='pages'>
      <h2>About Page</h2>
      
      <p>
      Hello! My name is Zoë Rorvig. I graduated from UNC Asheville/NC State with a Bachelors of Science in Engineering, concentrated in Mechatronics, with a minor in Mathematics. Since I graduated, I've worked at Continental as a Quality Systems Engineer. During my time there, I used several programs to create internal websites and paperless document systems. Now, I'm looking at getting back into something a little more technical. I've enjoyed learning some of the "behind-the-scenes" aspects of the programs/websites I used while at Continental and look forward to learning more.
      </p>
      <img src={profilePicture} alt='Zoe Rorvig' className='profile-picture'/>
    </div>
  );
}