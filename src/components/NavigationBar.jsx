// NavigationBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navigation.css"
import logo from "../image/logo2.jpg"
import CodeOffIcon from '@mui/icons-material/CodeOff';
const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="nav-bar">
  
     <p className='logoname' >Noman Alam <CodeOffIcon /></p> 
    
    <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
      ☰ {/* You can use any icon or text for the mobile menu icon */}
    </div>
    <ul className={`nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <li><Link to="/" onClick={handleMobileMenuToggle}>Home</Link></li>
      <li><Link to="/contact" onClick={handleMobileMenuToggle}>Contact</Link></li>
      <li><Link to="/projects" onClick={handleMobileMenuToggle}>Projects</Link></li>
      <li><Link to="/about" onClick={handleMobileMenuToggle}>About</Link></li>
    </ul>
    
    </div>
 
  
  );
};

export default NavigationBar;
