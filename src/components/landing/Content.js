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
                <div className="content">
                    <div className="content__img">
                        <FadeIn height={500}>
                            {
                                onload => (
                                    <img
                                        onLoad={onload}
                                        src={uav}
                                        className="img-fluid"
                                        alt="uav"
                                    />
                                )
                            }                              
                        </FadeIn>                        
                    </div>
                    {/* <span className="content__accent">&#8944;</span>  */}
                    <div className="content__text">
                        
                        <h1> 
                        Running Start Program 
                        </h1>                        
                        <h2>
                            Pre-semester review classes 
                        </h2>

                        {/* <p className="lead">
                        Pre-semester review classes 
                        </p> */}
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
                        <a href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/running-start-program/">Running Start Program</a>
                    </div>
                </div>
                <div className="content">
                    <div className="content__img">
                        <FadeIn height={500}>
                            {
                                onload => (
                                    <img
                                        onLoad={onload}
                                        duration={100}
                                        src={groundstation}
                                        className="img-fluid"
                                        alt="groundstation"
                                    />
                                )
                            }                              
                        </FadeIn>                        
                    </div>
                    <div className="content__text">
                        <h1>3SP</h1>
                        <p className="lead">
                            The STEM Student Scholars Program
                    </p>
                        <p>
                            Promotes excellence
                            in knowledge, skills and ability of a select group of STEM students
                            to ensure their success in securing research internships and successful
                            transfer to their targeted 4-year institution.
                    </p>
                        <Link to="/3sp">Learn More</Link>
                    </div>
                </div>


                <div className="content content__dark">
                    <div>
                        <Video />
                    </div>
                    <div className="content__form">
                    <form action="" className="form">
                        <div className="form__item">
                            <label htmlFor="email" className="form__item-label">Email</label>
                            <input type="text" className="form__item-label" />
                        </div>
                        <div className="form__item">
                            <label htmlFor="major" className="form__item-label">Major</label>
                            <input name="major" type="text" className="form__item-label"/>
                        </div>
                        <div className="form__item">
                            <label htmlFor="title" className="form__item-label">Project Title</label>
                            <input name="title" type="text" className="form__item-label"/>
                        </div>
                        <div className="form__item">
                            <label htmlFor="desc" className="form__item-label">Description</label>
                            <textarea 
                                name="desc" 
                                type="text" 
                                className="form__item-label" 
                                rows={15}>
                            </textarea>
                        </div>                        
                        <button className="form__button">
                            Submit
                        </button>                        
                    </form>  
                        </div>                 
                </div>
            </div>

        );
    }
};

export default Content;