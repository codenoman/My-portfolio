// src/App.js
import React from 'react';
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';

import HomePage from './components/home';
import TodoApp from './components/todolist';
import ContactPage from './components/ContactPage';
import AboutPage from './components/aboutPage';
import Calculater from "./components/calculater/calculater "
import Tictaetoc from "./components/ticktok"
// import Ecommerce from "./components/ecommerce/src/App"
import ProjectSection from './components/projects';
import NavigationBar from './components/NavigationBar';
import Footer from './components/footer';
import Resume from './components/resume';
function App() {
  return (
    <>
      <Router>
      <div>
<NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectSection />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/calculator" element={<Calculater />} />
          <Route path="/todoApp" element={<TodoApp />} />
          <Route path="/tictaetoc" element={<Tictaetoc />} />
          <Route path="/resume" element={<Resume />} />
          

        </Routes>
      <Footer /></div>
    </Router>

 
    </>
  );
}

export default App;
