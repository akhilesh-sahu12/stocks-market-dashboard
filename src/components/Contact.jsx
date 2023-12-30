import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSuccesfull, setIsSuccessful]=useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccessful(true);
    // We can also add code to send the form data to a server or API
    console.log('Form submitted:', formData);
    
  };
  if (isSuccesfull) {
    return <Navigate to="/" />;
  }

  return (
    <div className="contact-container">
      <h1 className='heading-contact'>Contact Us</h1>
      <p>If you have any questions or feedback, feel free to reach out to us!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" style={{margin:'auto'}}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
