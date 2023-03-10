import React from 'react';
import resume from '../../images/resume.jpg';
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { DiCss3 } from "@react-icons/all-files/di/DiCss3";
import { RiHtml5Fill } from "@react-icons/all-files/ri/RiHtml5Fill";
import { GrMysql } from "@react-icons/all-files/gr/GrMysql";

export default function Resume() {
  return (
    <div className='pages'>
      <h2>Resume</h2>

      <p>Click On the Image Below to Download</p>
      <a href='https://drive.google.com/file/d/1-IMW28WdrYb09HXuMg1i3tgTvzDrJSSU/view?usp=sharing' target='_blank' rel='noreferrer'>
        <img className='resume' src={resume} alt='resume' />
      </a>
        <h3>Proficiencies</h3>
        <ul className='proficienciesList'>
          <li>JavaScript <SiJavascript /></li>
          <li>-</li>
          <li>React <FaReact /></li>
          <li>-</li>
          <li>CSS <DiCss3 /></li>
          <li>-</li>
          <li>HTML <RiHtml5Fill /></li>
          <li>-</li>
          <li>SQL <GrMysql /></li>
        </ul>
    </div>
  );
}
