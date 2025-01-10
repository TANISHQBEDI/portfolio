import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';

import './App.css'
import About from './components/About';


const App = () => {
  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
  ];

  const skills = {
    technical: ["Java", "C++", "HTML", "CSS", "JavaScript", "React.JS", "Python", "Machine Learning", "MySQL", "Express", "Git", "Blender"],
    soft: ["Team Work", "Leadership", "Communication", "Problem Solving", "Adaptability", "Fast Learner"],
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <Navbar navigationItems={navigationItems} />
      <Hero />
      <About/>
      <Skills skills={skills} />
      <Experience />
      <Projects />
      <Education />
    </div>
  );
};

export default App;
