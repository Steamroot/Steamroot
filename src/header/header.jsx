import React, { Component } from 'react';
import Navbar from '../header/navbar/navbar';
import Title from '../header/title/title';

class Header extends Component {
    render () {
        
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("arrow").style.opacity = ".6";
            } else {
                document.getElementById("arrow").style.opacity = "0";
            }
        prevScrollpos = currentScrollPos;
        }

        return (
            <div id="header" className="header">
                <Title/>
                <Navbar/>
                <div id='arrow' className="down-arrow"></div>
            </div>
        )    
    }
}

export default Header;