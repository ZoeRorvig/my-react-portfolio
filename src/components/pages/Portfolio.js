import React from 'react';
import Project from './Project';
import sellout from '../../images/sellout.png';
import dineAndSip from '../../images/dine-and-sip.png';
import noteTaker from '../../images/note-taker.png';
import workdayScheduler from '../../images/workdayScheduler.png';
import techBlog from '../../images/tech-blog.png';
import melum from '../../images/melum.png';

const projects = [
    {
        id: 0,
        title: 'Sellout',
        image: sellout,
        repo: 'https://github.com/ZoeRorvig/market-application',
        deployed: 'https://dry-tor-88754.herokuapp.com/',
        summary: 'Webpage to provide a place for users to be able to post unwanted items for others to purchase.',
        tech: 'Handlebars, Materialize, MySQL, Sequelize, JavaScript, Bcrypt',
    },
    {
        id: 1,
        title: 'Dine and Sip',
        image: dineAndSip,
        repo: 'https://github.com/ZoeRorvig/food-and-drink-pairings',
        deployed: 'https://zoerorvig.github.io/food-and-drink-pairings/',
        summary: 'Website for discovering new food and drink pairings.',
        tech: 'HTML, CSS/Bootstrap, JavaScript, Drink/Meals API',
    },
    {
        id: 2,
        title: 'Melum',
        image: melum,
        repo: 'https://github.com/ZoeRorvig/music-player-app',
        deployed: 'https://fierce-caverns-99507.herokuapp.com/',
        summary: 'Webpage where users can browse premade playlists and save favorites to their profile.',
        tech: 'React, MongoDB, Mongoose ODM, GraphQL, Node.js, Express.js, Bootstrap/Bootswatch',
    },
    {
        id: 3,
        title: 'Note Taker',
        image: noteTaker,
        repo: 'https://github.com/ZoeRorvig/note-taker',
        deployed: 'https://rocky-oasis-67925.herokuapp.com/notes',
        summary: 'Application where users can create, store, and delete notes.',
        tech: 'Express.js, JavaScript, HTML, CSS',
    },
    {
        id: 4,
        title: 'Tech Blog',
        image: techBlog,
        repo: 'https://github.com/ZoeRorvig/tech-blog',
        deployed: 'https://mysterious-badlands-96027.herokuapp.com/',
        summary: 'Blog for users to create, post, and comment on each others ideas.',
        tech: 'JavaScript, Handlebars, Sequelize, MySQL2, Express.js',
    },
    {
        id: 5,
        title: 'Work Day Scheduler',
        image: workdayScheduler,
        repo: 'https://github.com/ZoeRorvig/work-day-scheduler',
        deployed: 'https://zoerorvig.github.io/work-day-scheduler/',
        summary: 'Application for users to plan out their day that highlights the current time.',
        tech: 'Day.js, JQuery, HTML, CSS',
    },
];

export default function Portfolio() {
  return (
    <div className='pages'>
        <h2>Portfolio</h2>

        <Project projects={projects} />
        </div>
  );
}