import React, { Component } from 'react';
import react from '../images/react.png';
import java from '../images/java.png';
import javascript from '../images/javascript.png';
import c from '../images/C++.png';
import python from '../images/python.png';
import jquery from '../images/jquery.png';
import html from '../images/html.png';
import css from '../images/css.png';
import bootstrap from '../images/bootstrap.png';
import node from '../images/node.png';
import angular from '../images/angular.png';
import redux from '../images/redux.png';
import reactrouter from '../images/react-router.png';
import spring from '../images/spring.png';
import hibernate from '../images/hibernate.png';
import oracle from '../images/oracle.png';
import mysql from '../images/mysql.png';
import aws from '../images/aws.png';
import mongodb from '../images/mongo.png';
import git from '../images/git.png';
import websphere from '../images/websphere.png';
import urbancode from '../images/urbancode.png';
import tensorflow from '../images/tensorflow.png';

class EducationSkills extends Component{
    render(){
        return(
            <div className="container">
            <div class="row">
                <div className="col">
                    <h3>Education</h3>
                    <hr/>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Masters in Computer Science</h5>
                            <h6 className="job-title">The University of Southern Mississippi</h6>
                            <h6 className="job-title">GPA: 3.94</h6>
                            <p class="card-text">Jan 2016 - May 2017</p>
                            <p>Hattiesburg, MS</p>
                        </div>
                    </div>
                    <br/>
                    
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Bachelors in Computer Science</h5>
                            <h6 className="job-title">Jawaharlal Nehru Technological University</h6>
                            <h6 className="job-title">GPA: 3.52</h6>
                            <p class="card-text">Sept 2011 - May 2015</p>
                            <p>Hyderabad, India</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <h3>Technical Skills</h3>
                    <hr/>
                    <div class="card-body"> Programming Languages</div>
                    
                    <img src={java} alt="java" title="java" className="technology"/>
                    <img src={javascript} alt="javascript" title="javascript" className="technology"/>
                    <img src={c} alt="c++" title="c++" className="technology"/>
                    <img src={python} alt="python" title="pyhton" className="technology"/>

                    <div class="card-body"> Web Technologies</div>
                    
                    <img src={html} alt="html" title="html" className="technology"/>
                    <img src={css} alt="css" title="css" className="technology"/>
                    <img src={bootstrap} alt="bootstrap" title="bootstrap" className="technology"/>
                    <img src={jquery} alt="jquery" title="jquery" className="technology"/>
                    <img src={angular} alt="angular" title="angular" className="technology"/>
                    <img src={node} alt="node" title="node" className="technology"/>
                    <img src={react} alt="react" title="react" className="technology"/>
                    <img src={redux} alt="redux" title="redux" className="technology-second"/>
                    <img src={reactrouter} alt="react-router" title="react-router" className="technology-second"/>

                    
                    <div class="card-body"> Databases and Technologies</div>
                    
                    <img src={spring} alt="spring" title="spring" className="technology"/>
                    <img src={hibernate} alt="hibernate" title="hibernate" className="technology"/>
                    <img src={oracle} alt="oracle" title="oracle" className="technology"/>
                    <img src={mysql} alt="mysql" title="mysql" className="technology"/>
                    <img src={aws} alt="aws" title="aws" className="technology"/>
                    <img src={mongodb} alt="mongodb" title="mongodb" className="technology"/>
                    <img src={git} alt="git" title="git" className="technology"/>
                    <img src={urbancode} alt="urbancode" title="urbancode" className="technology-second"/>
                    <img src={tensorflow} alt="tensorflow" title="tensorflow" className="technology-second"/>
                    
                </div>
            </div>
            </div>
        );
    }
}

export default EducationSkills;