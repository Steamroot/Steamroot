import React from 'react';
import '../../App.scss';
import '../../Styles/abstracts/_variables.scss'
import '../../Styles/components/_navbar.scss';
import { Component } from 'react';

const removeDecorations = {
    textDecoration: 'none',
    color: 'black'
};

class Navbar extends Component {

    render () {
        return (
            <div >
                <ul className='navbar-style'>
                    <li className='navbar-style__items'><a style={removeDecorations} href="../../files/Samuel's Resume.pdf" download>Resume</a></li>
                    <li className='navbar-style__items'>Projects</li>
                    <li className='navbar-style__items'>About</li>
                    <li className='navbar-style__items'>Skills</li>
                </ul>
            </div>
        )  
    }
    
};

export default Navbar;