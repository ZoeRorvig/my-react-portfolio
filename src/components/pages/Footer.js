import React from 'react';
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";

export default function Footer() {
    return (
        <footer>
            <ul>
                <li>
                <a href="mailto: zrorvig@gmail.com" className='footer-links'>zrorvig@gmail.com</a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/zoerorvig/' target='_blank' rel='noreferrer' className='footer-links'><SiLinkedin /></a>
                </li>
                <li>
                    <a href='https://github.com/ZoeRorvig' target='_blank' rel='noreferrer' className='footer-links'><SiGithub /></a>
                </li>
            </ul>
        </footer>
    );
}