import React, { Component } from 'react';
import penndot from '../images/penndot.png';
import usm from '../images/usm.png';
import tcs from '../images/tcs.png';
import ibm from '../images/ibm.png';

class Blog extends Component{
    render(){
        return(
          <div>
            <div className="container media">
              <img src={penndot} className="align-self-center mr-3 img-thumbnail rounded image-height" alt="penndot" title="penndot"/>
                <div className="media-body">
                  <h4 className="mb-0 workplace-title">Pennnsylvania Department of Transportation</h4>
                  <h5 className="job-title"><span className="color-text">Java Applications Developer,</span> since Sept 2017</h5>
                  <h6 className="mt-0">Harrisburg, Pennnsylvania</h6>
                  <div className="work-content">
                  <p className="mb-0 bold">Sept 2017 - Jan 2019</p>
                    <p className="mb-0">•	Collaborated on a team of 12 and contributed in successful implementation and delivery of ePermitting system.</p>
                    <p className="mb-0">•	Developed interactive webpages using JSF, PrimeFaces, JavaScript and JQuery and CSS.</p>
                    <p className="mb-0">•	Implemented DAO using Spring – Hibernate ORM with Oracle database, WebSphere as Application server and Jazz for source control.</p>
                    <p className="mb-0 bold">Feb 2019 - till date</p>
                    <p className="mb-0">•	Involved in creating single page web applications using Angular, Spring Boot, NodeJS, NPM, Bootstrap as part of Workflow shared services team.</p>
                    <p className="mb-0">•	Responsible for consuming the Restful web services, getting JSON response and parsing them to get the required information.</p>
                    <p className="mb-0">•	Used Hibernate as JPA implementation, Oracle database and GIT for version control.</p>
                  </div>
                </div>
            </div>
            <br/>
            <div className="container media">
              <img src={usm} className="align-self-center mr-3 img-thumbnail rounded image-height" alt="usm" title="usm"/>
                <div className="media-body">
                  <h4 className="mb-0 workplace-title">The University of Southern Mississippi</h4>
                  <h5 className="job-title"><span className="color-text">Graduate Assistant,</span> Jan 2016 - May 2017</h5>
                  <h6 className="mt-0">Hattiesburg, Mississippi</h6>
                  <div className="work-content">
                  <p className="mb-0">•	Developed web pages using HTML5, CSS3, JQuery, React, Reactstrap, Redux, Redux-Thunk and React-Router.</p>
                  <p className="mb-0">• Involved in Automation of School of Computing student grading system using JavaScript.</p>
                  <p className="mb-0">• Deep Learning using Tensor Flow – Analysis of medical data using different Optimization Algorithms.</p>
                  </div>
                </div>
            </div>
            <br/>
            <div className="container media">
              <img src={tcs} className="align-self-center mr-3 img-thumbnail rounded image-height" alt="tcs" title="tcs"/>
                <div className="media-body">
                  <h4 className="mb-0 workplace-title">Tata Consultancy Services</h4>
                  <h5 className="job-title"><span className="color-text">Assistant Systems Engineer,</span> June 2015 - Jan 2016</h5>
                  <h6 className="mt-0">Hyderabad, India</h6>
                  <div className="work-content">
                  <p className="mb-0">•	Used AngularJS for front end implementation and Spring, hibernate for backend with Oracle database to develop responsive and interactive webpages.</p>
                  <p className="mb-0">•	Involved in development of Restful web services using Annotations to extract client data from databases.</p>
                  <p className="mb-0">•	Used Maven plugins for configuring and building projects, GIT for version control, IBM WebSphere as Application server.</p>
                  </div>
                </div>
            </div>
            <br/>
            <div className="container media">
              <img src={ibm} className="align-self-center mr-3 img-thumbnail rounded image-height" alt="ibm" title="ibm"/>
                <div className="media-body">
                  <h4 className="mb-0 workplace-title">IBM India Software Labs</h4>
                  <h5 className="job-title"><span className="color-text">Software Developer Intern,</span> June 2014 - Dec 2014</h5>
                  <h6 className="mt-0">Pune, India</h6>
                  <div className="work-content">
                  <p className="mb-0">• Extensively involved in developing webpages using JSP, JavaScript, JQuery, EJB, CDI, AspectJ and Hibernate.</p>
                  <p className="mb-0">•	Used various core Java concepts such as Multithreading, Exception Handling, Collection API to implement various features and enhancements.</p>
                  <p className="mb-0">•	Used IBM Urban Deploy to write shell scripts and automate various software installations.</p>
                  </div>
                </div>
            </div>  
          </div>
        );
    }
}

export default Blog;