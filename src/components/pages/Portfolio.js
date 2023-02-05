import React from 'react';
import Project from './Project';
import sellout from '../../images/sellout.png';
import weatherDash from '../../images/weather-dash.png';
import dineAndSip from '../../images/dine-and-sip.png';
import noteTaker from '../../images/note-taker.png';
import passwordGen from '../../images/password-gen.png';
import techBlog from '../../images/tech-blog.png';

const projects = [
    {
        id: 0,
        title: 'Sellout',
        image: sellout,
        repo: 'https://github.com/ZoeRorvig/market-application',
        deployed: 'https://dry-tor-88754.herokuapp.com/',
    },
    {
        id: 1,
        title: 'Dine and Sip',
        image: dineAndSip,
        repo: 'https://github.com/ZoeRorvig/food-and-drink-pairings',
        deployed: 'hhttps://zoerorvig.github.io/food-and-drink-pairings/',
    },
    {
        id: 2,
        title: 'Weather Dashboard',
        image: weatherDash,
        repo: 'https://github.com/ZoeRorvig/weather-dashboard',
        deployed: 'hhttps://zoerorvig.github.io/weather-dashboard/',
    },
    {
        id: 3,
        title: 'Note Taker',
        image: noteTaker,
        repo: 'https://github.com/ZoeRorvig/note-taker',
        deployed: 'https://rocky-oasis-67925.herokuapp.com/notes',
    },
    {
        id: 4,
        title: 'Tech Blog',
        image: techBlog,
        repo: 'https://github.com/ZoeRorvig/tech-blog',
        deployed: 'https://mysterious-badlands-96027.herokuapp.com/',
    },
    {
        id: 5,
        title: 'Password Generator',
        image: passwordGen,
        repo: 'https://github.com/ZoeRorvig/password-generator',
        deployed: 'https://zoerorvig.github.io/password-generator/',
    },
];

export default function Portfolio() {
  return (
    <div>
        <h1>Portfolio</h1>

        <Project projects={projects} />
    </div>
  );
}