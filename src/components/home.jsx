// src/components/NavigationBar.js
import React from 'react';
// import { Link } from 'react-router-dom';
import "./home.css"
import myImage from "../image/mainimg.gif"
import itMe from "../image/itsme.png"
import TodoApp from './todolist';
import { useEffect  } from 'react';
import { useState } from 'react';
import Kashan from "../image/3d animation.png"
import { Link } from 'react-router-dom'
import NavigationBar from './NavigationBar';
import Tictok from './ticktok';
import ContactPage from './ContactPage';
import AboutPage from './aboutPage';
import ProjectSection from './projects';

const HomePage = () => {
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     // Adjust the threshold as needed
  //     if (scrollPosition > 100) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   // Add scroll event listener
  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup: remove event listener on component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  
  return (

    <>
    {/* // <><NavigationBar /> */}
    <div className="main">
    <div className='header' >
    
      <div className="content">
        <div className="text">
          
          <h1 className='mainheading'>It's Me <br />Noman  Alam.</h1>
          <p>
            A frontend developer is a professional who specializes in designing and implementing the user interface (UI) and user experience (UX) of a website. Frontend developers work with programming languages such as HTML, CSS, and JavaScript, Reactjs , Nextjs to create responsive interfaces.
          </p>
          <Link to="/projects">
          <button className='viewwork' >View my work</button></Link>
        </div>
       
          <img src={Kashan} alt="" className='img1'/>
        
      </div>
    </div>
<AboutPage />
<ProjectSection />
<ContactPage /></div>
  </>
  );
};

export default HomePage;
