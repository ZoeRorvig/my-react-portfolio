import React, { useState } from 'react';

export default function Contact() {
    const [fullName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // TODO: Add email verification
    // TODO: Add message is nothing is entered into box when clicked off. 
    // TODO: Fix formatting

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "fullName") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "message") {
            setMessage(value);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <h2>Contact Me</h2>

            <form className="form">
                <input
                    value={fullName}
                    name="fullName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Email"
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Message"
                />
                <button type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}
