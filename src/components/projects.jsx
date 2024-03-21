// ProjectSection.js
import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import "./projects.css"
import Tictok from './ticktok';
import TodoApp from './todolist';
import Calculator from './calculater/calculater ';
import calimg from "../image/calc-app.gif"
import tictaetoc from "../image/tic tae toc.gif"
import todoappimg from "../image/todoappimg.gif"
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ecommerce from "../image/e-commerce.GIF"
const ProjectSection = () => {



  return (
    <>
      {/* //  <Tictok /> */}
      {/* <TodoApp /> */}
      {/* <Calculator /> */}
      <div className="projects">
        <div class="mainheading">
          <h1>Check My Projects</h1>
        </div>
     



<div className="flex-container">
              <div className="flex-item" >
                   <Link to="/calculator">  <img
                        src={calimg}
                        width={347}
                        height={300}
                        className='img'
                    /></Link> <p>
                    Calculator <br />  i made  calculator from JavaScript, HTML, and CSS code.</p>
                    

                </div>
                <div className="flex-item" >
                   <Link to="/tictaetoc"> <img
                        src={tictaetoc}
                        
                        width={347}
                        height={300}
                        className='img'
                    /></Link>
                    <p>Tic Tac Toe<br />"I created a Tic Tac Toe game using ReactJS, HTML, and CSS.</p>
                </div>
                <div className="flex-item" >
                  <Link to="/todoApp">  <img
                        src={todoappimg}
                        width={347}
                        height={300}
                        className='img'
                    /></Link>
                    <p>Todo App<br /> "I've built a todo app using React.js, HTML, and CSS.</p>
                </div>
                 <div className="flex-item">
                    <img
                        src={ecommerce}
                        width={347}
                        height={300}
                        className='img'
                    />
                    <p>E-Commerce<br /> I built an e-commerce website using React.js for the frontend, html , css, matrial ui, bootstrap
</p>
                </div>
               
            </div>


</div>






    </>
  );
};

export default ProjectSection;
