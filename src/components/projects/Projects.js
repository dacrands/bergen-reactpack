import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FadeIn from 'react-lazyload-fadein';

import Header from '../Header';

import '../../styles/projects.css'

class Projects extends Component {

    constructor() {
        super();
        this.state = {
            projects: [],
            loaded: false
        }
    }

    componentDidMount() {
        fetch('http://bccstem-env.ikpje5mqwr.us-east-1.elasticbeanstalk.com/api/projects/getAllProjectMeta', {
            method: 'post',
        }).then(result => {
            return result.json()
        }).then((response) => {            
            this.setState({
                loaded:true, 
                projects: response
            });
        }).catch(e => console.log(e));
    }

    renderProjects(project) {
        return (
            <article key={project.id} style={{ backgroundImage: `url(${project.primaryImage})` }} className="projects__item">
                <div className="project--overlay">
                    <h2>{project.name}</h2>
                    {/* <p>{project.desc}</p> */}
                    <Link to={`/projects/${project.id}`}>View Project</Link>
                </div>
                
                {/* <img className="img-fluid thumbnail" src={project.primaryImage} alt=""/> */}
            </article>
            
            // <article className="project">
            //     <div className="project__img" style={{ backgroundImage: `url(${project.primaryImage})` }}>                
            //     </div>
            //     <div>
            //         <h2>{project.name}</h2>
            //         <p>{project.desc}</p>
            //     </div>

            // </article>
            
        );
    }

    render() {
        return (
            <div>
                <Header title="Projects" />

                <section className="projects">
                     {
                         this.state.loaded
                         ? this.state.projects.map(this.renderProjects)
                         : 'loading'

                     }                    
                </section>
            </div>
        );
    }
}

export default Projects;