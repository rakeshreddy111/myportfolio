import React, { Component } from 'react';
import react from '../images/react.png';
import redux from '../images/redux.png';
import angular from '../images/angular.png';
import node from '../images/node.png';
import javascript from '../images/javascript.png';
import spring from '../images/spring.png';
import hibernate from '../images/hibernate.png';
import oracle from '../images/oracle.png';
import basarahotels from '../images/hotelsbasara.PNG';
import events from '../images/events.PNG';

class Projects extends Component{
    render(){
        return(
            <div className="Projects section flex-container">
        <div className="item">
          <img src={basarahotels} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h4>Hotels@BASARA</h4>
              <p>Single page web application with features like</p>
              <p>Browse Hotels, Choose Room and Book</p>
              <h6>Technologies</h6> 
              <img src={react} className="project-technology"/>
              <img src={redux} className="project-technology"/>
              <img src={javascript} className="project-technology"/>
              <img src={node} className="project-technology"/>
              
              <div className="explore">
              <br/>
              <a href="https://www.hotelsatbasara.com/" target="_blank" rel="noopener noreferrer">Explore App <i className="fa fa-external-link"/></a>
              <a href="https://github.com/rakeshreddy111/basarahotels" target="_blank" rel="noopener noreferrer">Repo <i className="fa fa-github" aria-hidden="true"/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={events} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h4>Event Registration</h4>
              <p>Single page web application with features like</p>
              <p>Browse Events, Create Event and Rate Events</p>
              <h6>Technologies</h6> 
              <img src={angular} className="project-technology"/>
              <img src={javascript} className="project-technology"/>
              <img src={node} className="project-technology"/>
              
              <div className="explore">
              <br/>
              <a href="https://github.com/rakeshreddy111/event-registration" target="_blank" rel="noopener noreferrer">Repo <i className="fa fa-github" aria-hidden="true"/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="http://www.allsee-tech.com/digital-signage-blog/wp-content/uploads/2017/10/digital-aignage-over-print.jpg" className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h4>Digital Signage</h4>
              <p>Web application to Create and display Ads</p>
              <p>based on time</p>
              <h6>Technologies</h6> 
              <img src={angular} className="project-technology"/>
              <img src={javascript} className="project-technology"/>
              <img src={spring} className="project-technology"/>
              <img src={hibernate} className="project-technology"/>
              <img src={oracle} className="project-technology"/>
              
              <div className="explore">
              <br/>
              <a href="#" rel="noopener noreferrer">Repo <i className="fa fa-github" aria-hidden="true"/></a>
              </div>
            </div>
          </div>
        </div>
        </div>
        );
    }
}

export default Projects;