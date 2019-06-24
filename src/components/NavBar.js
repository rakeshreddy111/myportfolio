import React, { Component } from 'react';

class NavBar extends Component{
    render(){
        return(
            <div className="NavBar">   
                <nav className="navbar navbar-expand-lg navbar-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                     </button>
 
                         <ul className="navbar-nav ml-auto">
      
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#work">Work</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#education">Education & Skills</a>
                            </li>
 
                            <li className="nav-item">
                                <a className="nav-link" href="#footer">Contact</a>
                            </li>
                        </ul>
                    
                </nav>
            </div>
        );
    }
}

export default NavBar;