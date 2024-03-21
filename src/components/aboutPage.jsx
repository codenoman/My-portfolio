// src/AboutPage.js
import React from 'react';
import './aboutPage.css';
import aboutImg from "../image/pngegg.png"
import charts from "../image/charts.png"
import ronaldo from "../image/cr7.png"

const AboutPage = () => {
  return (<>
    <div className="about-page">
      <div className="black-div">
        <img src={aboutImg} alt="" className='abtimg' />
      </div>
      <div className="about-info">

        <h1 className='about'>About Me</h1>
        <p className='aboutp'>
          I'm a web designer based in Karachi, Pakistan. Since 2022, I've enjoyed turning
          complex problems into simple, beautiful and intuitive designs. When I'm not
          pushing pixels, you'll find me cooking, gardening, or working out in the park.
        </p>
      </div>

    </div>
    <div className="skills"><div className="coder">
      <div className="codeh"><b> Part coder</b></div>
      <div data-aos="flip-left" className="codep">Front-end development <br />
        HTML / CSS <br />
        JavaScript (kinda) <br />
        React js <br />
        Nextjs <br />
        Eating Biryani</div>
    </div>

      <div className="skillimage">
        <img src={charts} alt="" className='chartsimg' />
      </div>
      <div className="design">
        <div className='dsgnh'><b> Part designer</b></div>
        <div className='dsgnp'>
          UI design<br />
          UX design<br />
          Design Systems<br />
          Interaction design<br />
          "Making it pop"</div>
      </div>
    </div>
    <div className="randomfacts">
      <div className="randomimg">
        <img src={ronaldo} alt="" className='cr7' />
      </div>
      <div className="randomtext">
        <h4>Random facts</h4>
        I drink a lot of tea <br />
        I'm into interior design  <br />
        play game and watch netflix in my free time <br />
        I want to live on Oia Village In Santorini Greece <br />
        I'm slightly addicted to Instagram <br />
        By playing Cricket, By watched Football <br />
        Cristiano Ronaldo is my mentor
      </div>
    </div>

  </>
  );
};

export default AboutPage;
