import React, { Component } from 'react';

class Projects extends Component {
    render () {
        return(
            <div className="projects">
                <h1 className="projects__title">Projects</h1>
                <div className="projects__container">
                        <a href="legendaryagilitytraining.com"><img class="projects__image" src={require('../files/legendary.jpg')} alt="Legendary Agility Training"/></a>
                    <p className="projects__container-text">Dog Agility website</p>
                </div>
                <div className="projects__container">
                        <img id="unreleased" class="projects__image" src={require('../files/RedFox.jpg')} alt="RedFox Art Portfolio"/>
                    <p className="projects__container-text">Art portfolio to showcase paintings and crafts</p>
                </div>
            </div>
        )
    }
}

export default Projects;