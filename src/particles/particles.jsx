import React from 'react';
import Particles from "react-tsparticles";
import { Component } from 'react';
import '../../src/App.scss';
import '../Styles/abstracts/_variables.scss';

class Particle extends Component {
    render () {

        return (
            <Particles id="particles" className="tsparticles"
            options={{
              fpsLimit: 60,
              interactivity: {
                detectsOn: "canvas",
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 1,
                    size: 1,
                  },
                  push: {
                    quantity: 1,
                  },
                },
              },
              particles: {
                color: {
                  value: "#0D1946",
                },
                links: {
                  color: "#b0b0b0",
                  distance: 200,
                  enable: true,
                  opacity: .3,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 40,
                },
                opacity: {
                  value: .3,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 6,
                },
              },
              detectRetina: true,
            }}/>
        )  
    }
    
};

export default Particle;