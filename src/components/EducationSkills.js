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
import springboot from '../images/springboot.png';
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
                            <h6 className="job-title">GPA: 3.95</h6>
                            <p class="mb-0  card-text">Jan 2016 - May 2017</p>
                            <p>Hattiesburg, MS</p>
                        </div>
                    </div>
                    <br/>
                    
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Bachelors in Computer Science</h5>
                            <h6 className="job-title">Jawaharlal Nehru Technological University</h6>
                            <h6 className="job-title">GPA: 3.52</h6>
                            <p class="mb-0  card-text">Sept 2011 - May 2015</p>
                            <p>Hyderabad, India</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <h3>Technical Skills</h3>
                    <hr/>
                    <div class="card-body"> Programming Languages</div>
                    
                    <img src={java} alt="Java" title="Java" className="technology"/>
                    <img src={javascript} alt="Javascript" title="Javascript" className="technology"/>
                    <img src={c} alt="C++" title="C++" className="technology"/>
                    <img src={python} alt="Python" title="Pyhton" className="technology"/>

                    <div class="card-body"> Web Technologies</div>
                    
                    <img src={html} alt="HTML" title="HTML" className="technology"/>
                    <img src={css} alt="CSS" title="CSS" className="technology"/>
                    <img src={bootstrap} alt="Bootstrap" title="Bootstrap" className="technology"/>
                    <img src={jquery} alt="JQuery" title="JQuery" className="technology"/>
                    <img src={angular} alt="Angular" title="Angular" className="technology"/>
                    <img src={node} alt="Node" title="Node" className="technology"/>
                    <img src={react} alt="React" title="React" className="technology"/>
                    <img src={redux} alt="Redux" title="Redux" className="technology-second"/>
                    <img src={reactrouter} alt="react-router" title="react-router" className="technology-second"/>

                    
                    <div class="card-body"> Databases and Technologies</div>
                    
                    <img src={spring} alt="Spring" title="Spring" className="technology"/>
                    <img src={hibernate} alt="Hibernate" title="Hibernate" className="technology"/>
                    <img src={oracle} alt="Oracle" title="Oracle" className="technology"/>
                    <img src={mysql} alt="MySQL" title="MySQL" className="technology"/>
                    <img src={aws} alt="AWS" title="AWS" className="technology"/>
                    <img src={springboot} alt="Spring Boot" title="Spring Boot" className="technology"/>
                    <img src={mongodb} alt="MongoDB" title="MongoDB" className="technology"/>
                    <img src={git} alt="Git" title="Git" className="technology-second"/>
                    <img src={urbancode} alt="Urban Code" title="Urban Code" className="technology-second"/>
                    <img src={tensorflow} alt="Tensor flow" title="Tensor flow" className="technology-second"/>
                    
                </div>
            </div>
            </div>
        );
    }
}

export default EducationSkills;