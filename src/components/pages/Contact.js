import React, { useState } from 'react';

export default function Contact() {
  const [fullName, setName] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    return name === 'fullName' ? setName(value) : "Required";
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); 

    setName('');
  };

  return (
    <div>
      <p>
        Hello {fullName}
      </p>
      <form className="form">
        <input
          value={fullName}
          name="fullName"
          onChange={handleInputChange}
          type="text"
          placeholder="Full Name"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
