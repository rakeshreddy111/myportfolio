import React, { Component } from 'react';
import penndot from '../images/penndot.jpg';
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
                  <h4 className="mt-0 workplace-title">Pennnsylvania Department of Transportation</h4>
                  <h5 className="mt-0 job-title">Application Developer, since Sept 2017</h5>
                  <h6 className="mt-0">Harrisburg, Pennnsylvania</h6>
                  <div className="work-content">
                  <p>•	Involved in creating new interactive and responsive web pages using AngularJS, JavaScript, JQuery, AJAX, Bootstrap, HTML5 and CSS3.</p>
                  <p className="mb-0">•	Involved in implementing DAO using Spring – Hibernate ORM.</p>
                  </div>
                </div>
            </div>
            <br/>
            <div className="container media">
              <img src={usm} className="align-self-center mr-3 img-thumbnail rounded image-height" alt="usm" title="usm"/>
                <div className="media-body">
                  <h4 className="mt-0 workplace-title">University of Southern Mississippi</h4>
                  <h5 className="mt-0 job-title">Graduate Assistant, Jan 2016 - May 2017</h5>
                  <h6 className="mt-0">Hattiesburg, Mississippi</h6>
                  <div className="work-content">
                  <p>•	Involved in Automation of School of Computing student grading system using JavaScript.</p>
                  <p className="mb-0">•	Designing front-end pages using JSF, PrimeFaces, JQuery, JavaScript, CSS and HTML as per the requirements and SQL queries to fetch data.</p>
                  </div>
                </div>
            </div>
            <br/>
            <div className="container media">
              <img src={tcs} className="align-self-center mr-3 img-thumbnail rounded image-height" alt="tcs" title="tcs"/>
                <div className="media-body">
                  <h4 className="mt-0 workplace-title">Tata Consultancy Services</h4>
                  <h5 className="mt-0 job-title">Assistant Systems Engineer, June 2015 - Jan 2016</h5>
                  <h6 className="mt-0">Hyderabad, India</h6>
                  <div className="work-content">
                  <p>•	Used AngularJS for front end implementation and Spring, hibernate for backend with Oracle database to develop responsive and interactive webpages.</p>
                  <p className="mb-0">•	Involved in development of Restful web services using Annotations to extract client data from databases.</p>
                  </div>
                </div>
            </div>
            <br/>
            <div className="container media">
              <img src={ibm} className="align-self-center mr-3 img-thumbnail rounded image-height" alt="ibm" title="ibm"/>
                <div className="media-body">
                  <h4 className="mt-0 workplace-title">IBM India Software Labs</h4>
                  <h5 className="mt-0 job-title">Software Developer Intern, June 2014 - Dec 2014</h5>
                  <h6 className="mt-0">Pune, India</h6>
                  <div className="work-content">
                  <p>•	Extensively involved in developing front end webpages using JSF, JavaScript, JQuery, HTML and CSS.</p>
                  <p className="mb-0">•	Used various core Java concepts such as Multithreading, Exception Handling, Collection API to implement various features and enhancements.</p>
                  </div>
                </div>
            </div>  
          </div>
        );
    }
}

export default Blog;