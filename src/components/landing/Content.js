import React, { Component } from 'react';
import { Link } from "react-router-dom";


import FadeIn from 'react-lazyload-fadein';

import Video from '../Video';

import '../../styles/content.css';

import uav from '../../images/uav.jpg';
import groundstation from '../../images/groundstation.jpg';

class Content extends Component {
    render() {
        return (
            <div>
                <div className="content--med">
                {/* CONTENT */}
                    <div className="content">
                        <div className="content__img img--loader">
                            <FadeIn height={500}>
                                {
                                    onload => (
                                        <img
                                            onLoad={onload}
                                            src={uav}
                                            className="img-fluid shadow"
                                            alt="uav"
                                        />
                                    )
                                }                              
                            </FadeIn>                        
                        </div>
                        <div className="content__text">                        
                            <h1>Running Start Program</h1>                        
                            <h3>Pre-semester review classes</h3>                        
                            <p>
                                Prep Classes are designed to give students a better
                                foundation to start the courses they will be taking in
                                the upcoming semesters.
                            </p>
                            <p>
                                Eligible students have the option of taking the respective
                                proficiency exam after completing the boot camp and possibly
                                test out of the course.
                            </p>
                            <a href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/running-start-program/">Running Start Program {'\u25B8'}</a>
                        </div>                        
                    </div>                                    
                </div>
                {/* CONTENT */}
                <div className="">
                    <div className="content">                                            
                        <div className="content__img img--loader">
                            <FadeIn height={500}>
                                {
                                    onload => (
                                        <img
                                            onLoad={onload}
                                            duration={100}
                                            src={groundstation}
                                            className="img-fluid shadow"
                                            alt="groundstation"
                                        />
                                    )
                                }                              
                            </FadeIn>                        
                        </div>
                        <div className="content__text">
                            <h1>3SP</h1>
                            <h3>STEM Student Scholars Program</h3>
                            <p>
                                Promotes excellence
                                in knowledge, skills and ability of a select group of STEM students
                                to ensure their success in securing research internships and successful
                                transfer to their targeted 4-year institution.
                            </p>
                            <Link to="/3sp">Learn More {'\u25B8'}</Link>
                        </div>
                    </div>
                </div>                                                                                   

                {/* CONTENT */}
                <div className="content--med">
                    <div className="content content-video">                                                
                        <div className="content__video">
                            <Video className="shadow"/>
                        </div>
                        <div className="content__text">
                            <h1>Students talk STEM</h1>
                            <h3>
                                Listen to BCC students discuss their
                                experiences in the STEM program. 
                            </h3>
                        </div>
                    </div>                                     
                </div>

                 {/* CONTENT */}
                 <div className="content--dark">
                    <div className="content">
                        <div className="content__text">
                            <h1>Interested in research?</h1>
                            <h3>Sign up for our newsletter!</h3>
                        </div>

                        <div className="content__form">
                                {/* OLD FORM */}
                            {/* <form action="" className="form">
                                <div className="form__item">
                                    <label htmlFor="email" className="form__item-label">Email</label>
                                    <input type="text" className="form__item-input" />
                                </div>
                                <div className="form__item">
                                    <label htmlFor="major" className="form__item-label">Major</label>
                                    <input name="major" type="text" className="form__item-input"/>
                                </div>
                                <div className="form__item">
                                    <label htmlFor="title" className="form__item-label">Project Title</label>
                                    <input name="title" type="text" className="form__item-input"/>
                                </div>
                                <div className="form__item">
                                    <label htmlFor="desc" className="form__item-label">Description</label>
                                    <textarea 
                                        name="desc" 
                                        type="text" 
                                        className="form__item-textarea" 
                                        rows={15}>
                                    </textarea>
                                </div>                        
                                <button className="form__button form__button--dark">
                                    Submit
                                </button>                         */}




                            <form action="" className="form">
                                
                                    <div className="form__item">
                                    {/* <label htmlFor="email" className="form__item-label">Email</label> */}
                                        <div className="form__one">
                                        
                                        <input placeholder="Please enter an email" type="text" className="form__item-input" />
                                                                                                            
                                    <button className="form__button form__button--dark">
                                        Submit
                                    </button>                        
                                    </div>
                                </div>                                
                            </form>  
                        </div> 
                    </div>                    
                </div>
            {/* MAIN */}
            </div>
        );
    }
};

export default Content;