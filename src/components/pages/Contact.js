import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    const [fullName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // TODO: Add message is nothing is entered into box when clicked off. 
    // TODO: Fix formatting

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value) {
            if (name === "fullName") {
                setErrorMessage('Name input is required!');
            } else if (name === "email") {
                setErrorMessage('Email input is required!');
            } else if (name === "message") {
                setErrorMessage('Message input is required!');
            }
        } else {
            setErrorMessage('');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "fullName") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "message") {
            setMessage(value);
        }

        if (name === "email") {
            const validEmail = validateEmail(value);
            console.log(validEmail);
            if (!validEmail) {
                setErrorMessage('Please enter a valid email.');
            } else {
                setErrorMessage('');
            }
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    };

    return (
        <div className='pages'>
            <h2>Contact Me</h2>

            <p>Email: zoerorvig@email.com</p>
            
            <form className="form">
                <input
                    value={fullName}
                    name="fullName"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Email"
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Message"
                />
                <button type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
            <p>{errorMessage}</p>
        </div>
    );
}
