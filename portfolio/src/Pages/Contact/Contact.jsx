import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function Contact() {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsValidEmail(emailRegex.test(inputValue));
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isValidEmail) {
      Swal.fire('Error', 'Please enter a valid email address.', 'error');
      return;
    }

    const {
      REACT_APP_EMAILJS_SERVICE_ID: serviceID,
      REACT_APP_EMAILJS_TEMPLATE_ID: templateID,
      REACT_APP_EMAILJS_USER_ID: userID,
    } = process.env;

    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire('Success', 'Message sent successfully!', 'success');
        },
        (error) => {
          console.log(error.text);
          Swal.fire('Error', 'Message could not be sent. Please try again later.', 'error'); 
        }
      );

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='body flex justify-center '>
      <div className='box'>
        <h2>Contact me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className='user-box'>
            <input type='text' name='user_name' required value={name} onChange={handleNameChange} />
            <label>Name</label>
          </div>
          <div className='user-box'>
            <input type='text' name='user_email' required value={email} onChange={handleEmailChange} className={!isValidEmail ? 'invalid-email' : ''} />
            <label>Email</label>
          </div>
          <div className='text-area'>
            <label>Message</label>
            <textarea name='message' value={message} onChange={handleMessageChange} required />
          </div>
          <button className='btn-contact' type='submit'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
