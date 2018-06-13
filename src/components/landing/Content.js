import React, { Component } from 'react';
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
                    <div className="content__content">
                        <h1> <span>&#8944;</span> Running Start Program</h1>
                        
                        <p>
                            Excellence through preparation
                        </p>
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
                    <div className="content__content">
                        <h1>3SP</h1>
                        <p>
                            The STEM Student Scholars Program
                    </p>
                        <p>
                            Promotes excellence
                            in knowledge, skills and ability of a select group of STEM students
                            to ensure their success in securing research internships and successful
                            transfer to their targeted 4-year institution.
                    </p>
                        <a href="/3sp">Learn More</a>
                    </div>
                </div>


                <div className="content">
                    <Video />
                </div>
            </div>

        );
    }
};

export default Content;