// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import "./footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-nav">
          <Link to="/">
            <a>Home</a>
          </Link>
          <Link to="/about">
            <a>About</a>
          </Link>
          <Link to="/projects">
            <a>Project</a>
          </Link>
          <Link to="/resume">
            <a>Resume</a>
          </Link>
        </div>
        <div className="social-iconstwo">
          <a href="https://www.facebook.com/profile.php?id=100086976175238" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/kashanhehe/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/NomanAl79138829" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://github.com/codenoman" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <div className="footer-text">
        © 2024 nomanalam. All Rights Reserved.
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
