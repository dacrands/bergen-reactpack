import React, { Component } from 'react';
import FadeIn from 'react-lazyload-fadein';

import Header from './Header';

import '../styles/box.css';

import solar from '../images/solar.jpg';
import algae from '../images/algae.jpg';
import cchem from '../images/cchem.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <Header title="STEM at BCC" />
                <div className="container">
                    <div className="title">
                        <h1>Why study STEM at Bergen?</h1>
                        {/* <hr className="hr" /> */}
                    </div>                    
                    <div className="box">
                        <div className="box__item">
                            <div className="box__text">
                                <h2>Hands on Experience</h2>
                                <p>Work as a team with other students and faculty.</p>  
                            </div>                       
                            <div className={"box__img"}>
                                <div className="thumbnail--loader img-fluid">                             
                                    <div className="spinner--small spinner-1"></div>
                                </div>  
                                <FadeIn height={200}>
                                    {
                                        onload => (                                            
                                            <img
                                                onLoad={onload}
                                                src={solar}
                                                className="img-fluid thumbnail"
                                                alt="solar"
                                            />
                                        )
                                    }                              
                                </FadeIn>
                                {/* <img className="img-fluid thumbnail" src={solar} alt="solar" /> */}
                            </div>                            
                        </div>
                        <div className="box__item">
                            <div className="box__text">
                                <h2>Resources</h2>
                                <p>Access to academic support from STEM mentors, professors, and students.</p>
                            </div>                            
                            <div className="box__img">
                                <div className="thumbnail--loader img-fluid">                                 
                                    <div className="spinner--small spinner-1"></div>
                                </div>  
                                <FadeIn height={200}>
                                    {
                                        onload => (
                                            <img
                                                onLoad={onload}
                                                src={cchem}
                                                className="img-fluid thumbnail"
                                                alt="computational chemistry"
                                            />
                                        )
                                    }                              
                                </FadeIn>
                                {/* <img className="img-fluid thumbnail" src={cchem} alt="computational chemistry" /> */}
                            </div>                                                    
                        </div>
                    {/* BOX */}
                    </div>

                    <div className="box">
                        <div className="box__items">
                            <div className="box__text">
                                <h2>Events</h2>
                                <p>Please <a href="mailto:stemsummit@bergen.edu">email us</a> for a complete list of events.</p>
                            </div>                            
                            <div className="box__img"> 
                                <div className="thumbnail--loader img-fluid">                                 
                                    <div className="spinner--small spinner-1"></div>
                                </div>                           
                                <FadeIn height={200}>
                                    {
                                        onload => (
                                            <img
                                                onLoad={onload}
                                                src={algae}
                                                className="img-fluid thumbnail"
                                                alt="algae"
                                            />
                                        )
                                    }                              
                                </FadeIn>                            
                            </div>                            
                        </div>

                        <div>
                            <div className="box__content-text">
                                <div className="box__content-title">
                                    <h2>Helpful Links</h2>
                                </div>
                                <p>
                                    Learn more about the projects, grants, and faculty that
                                    comprise the STEM program at BCC.
                                </p>
                                <ul>
                                    <li><a href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/running-start-program/">Running Start Program</a></li>
                                    <li><a href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/stem-summit/">STEM Research Summit</a></li>
                                    <li><a href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/stem-summit/about-the-conference/">About the STEM C<sup>2</sup> Conference</a></li>
                                    <li><a href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/the-stem-gps-team/">STEMatics Team</a></li>
                                    <li><a href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/">Read the STEMatics Grant</a></li>
                                </ul>
                            </div>
                        </div>
                    {/* BOX */}
                    </div>

                {/* CONTAINER */}
                </div>
            {/* MAIN */}
            </div>
        );
    }
}

export default About;
