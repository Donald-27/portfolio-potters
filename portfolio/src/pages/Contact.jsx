
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <section style={{ padding: '2rem' }}>
      <h1>Contact Me</h1>
      <p>If you'd like to get in touch, you can reach out through any of the platforms below:</p>
      <div style={{ display: 'flex', gap: '20px', marginTop: '1rem' }}>
        <a href="mailto:youremail@example.com" aria-label="Email">
          <HiOutlineMail size={30} />
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={30} />
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={30} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
