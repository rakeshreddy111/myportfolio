import React, { Component } from 'react';
import profilepic from '../images/profilepic.jpg';
import awslogo from '../images/awslogo.png';
import awstag from '../images/awstag.png';

class Welcome extends Component{
    render(){
        return(
            <div className="Welcome section">

            <img src={profilepic} alt="profilepic" className="main-pic"/>
                 <h1 className="welcome-intro">
                
                    <strong> Hello, </strong> <br />
                    <strong>I Am Rakesh Reddy Buttreddy</strong> <br />
                    <strong className="color-text">Full Stack Java Developer</strong> living in Harrisburg, Pennsylvania
                <br/>

                
                
                <div className="d-flex justify-content-center">
                
                    <a href="https://www.linkedin.com/in/rakesh-reddy-687b6558/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square i-hov" aria-hidden="true"/></a>  
                    <a href="https://medium.com/@rakeshreddy_46136" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium i-hov" aria-hidden="true"/></a>  
                    <a href="https://github.com/rakeshreddy111" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/></a> 
                    <a href="mailto:buttreddy.rakesh@gmail.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/></a>
                </div>
                <div className="child-div">
                    <a target="_blank" href="https://drive.google.com/open?id=1Ar282AEQG6571aD-xAb-F90lBXFHHv4u">
                        <img src={awslogo} alt="AWS Certified" title="AWS Certified" className="awslogo"/> <br/>
                        <img src={awstag} alt="AWS Certified" title="AWS Certified"/>
                    </a>
                </div>
                <div className="d-flex justify-content-center parent-div">
                 <a href="https://drive.google.com/open?id=1M1YhnnDwnTwuEmUanJV0ijcYhBUYwb7h" target="_blank" rel="noopener noreferrer"><button className="button resume-button">Resume <i className="fa fa-file-pdf-o" aria-hidden="true"/></button></a>
                 </div>
                 </h1>
                

            </div>
        );
    }
}

export default Welcome;