import React from 'react';
import './resume.css'; // Import your CSS file
import pdf from "./noman alam cv 3.pdf"
import { Link } from 'react-router-dom';
import cvimg from "./noman alam cv pic.jpg"
const Resume = () => {
  return (
    <div className="resume">
    
    <img src={cvimg} alt="" className='cvimg'/>
      
      
    </div>
  );
};

export default Resume;
