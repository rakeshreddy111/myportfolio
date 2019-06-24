import React, { Component } from 'react';

class About extends Component{
    render(){
        return(
            <div className="About section about-section">
                 <h1 className="about-intro"><strong>Rakesh Reddy Buttreddy</strong>:  Not your average coder</h1>
                <p className="about-item">As a <strong>full stack Java Developer</strong>, 
                I have demonstrated my ability to <strong>crush it</strong> on both the front end and back end. 
                I am fluent in <strong>Java and JavaScript</strong>. 
                I am also quite competent with many <strong>modern frameworks</strong> such as React, Redux, AngularJS and Node.
                 I <strong>love to code</strong> and am so happy that I get to <strong>learn and create </strong> 
                 new things every day!</p>
                 <p className="about-item">I come from <strong>humble beginnings</strong> in the developing city of  
                 <a href="https://en.wikipedia.org/wiki/Hyderabad" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">
                  Hyderabad, India <i className="fa fa-external-link"/></a>. 
                 I always had a strong desire to understand how the world worked and also to create, 
                 so I studied <strong> Computer Science </strong> 
                 in college and became a Java Developer shortly after graduating. 
                 I immediately knew that coding was something I could do <strong>every day for the rest of my life</strong>.</p>
                 <p className="about-item">I am also <strong>passionate</strong> about technology, our planet, travel and making people laugh. 
                 I am currently <strong>a Full Stack Java Developer at PennDOT 
                 </strong> but Im looking forward. <a href="mailto:buttreddy.rakesh@gmail.com?Subject=Hello%20there!" target="_top" ><span>Let me know if youre interested!</span> 
                 <i className="fa fa-paper-plane" aria-hidden="true"/></a></p>
             </div>
        );
    }
}

export default About;