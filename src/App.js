import React, { Component } from 'react';
import './header/navbar/navbar.jsx';
import './App.scss';
import Projects from './projects/projects.jsx';
import Particle from './particles/particles.jsx';
import Header from './header/header.jsx';
import About from './about/about';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Particle/>
        <Header/>
        <Projects/>
        <Particle/>
        <About/>
      </div>
    );
  };
};

export default App;
