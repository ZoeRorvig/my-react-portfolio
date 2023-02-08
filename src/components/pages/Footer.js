import React from 'react';
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram";

export default function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    <a href='https://www.linkedin.com/in/zoerorvig/' target='_blank' rel='noreferrer' className='footer-links'><SiLinkedin /></a>
                </li>
                <li>
                    <a href='https://github.com/ZoeRorvig' target='_blank' rel='noreferrer' className='footer-links'><SiGithub /></a>
                </li>
                <li>
                    <a href='https://www.instagram.com/mightyzorvig/' target='_blank' rel='noreferrer' className='footer-links'><SiInstagram /></a>
                </li>
            </ul>
        </footer>
    );
}