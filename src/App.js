import React, { Component } from 'react';
import './header/navbar/navbar.jsx';
import './App.scss';
import Particle from "./particles/particles.jsx";
import Header from './header/header.jsx';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Particle/>
        <Header/>
      </div>
    );
  };
};

export default App;
