import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Lab7 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Saketh',
      message: message,
    };

    emailjs.send('service_02bl5fl', 'template_7x8zv2s', templateParams, 'X5ZSClJSX4qvKMoOO')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!', result);
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email.');
      });
  };

  return (
    <>
      <h3>Lab 7 Exercise</h3>
      <h4>Contact Us</h4>
      <form onSubmit={sendEmail} className='emailForm'>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
       <br/>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br/>
        <label>Message:</label>
        <textarea
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Send Email" />
      </form>
    </>
  );
};

export default Lab7;