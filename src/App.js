import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import Projects from './components/Projects'
import About from './components/About'
import Work from './components/Work'
import Footer from './components/Footer'
import EducationSkills from './components/EducationSkills';


class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <h2 id="about"></h2>
          <Welcome />

          <h3 className="heading center" id="work"> What I have done so far </h3> <br />
            <Work />
            <br />
      
          <h3 className="heading center" id="projects">Projects</h3> <br /> <br />
            <Projects />
            <br />

          <h2 id="education"></h2>
            <EducationSkills />
            <br/> <br />

          <h3 className="heading center" id="footer">Like What you see?</h3> <br /> 
            <Footer />
      </div>
    );
  }
}

export default App;
