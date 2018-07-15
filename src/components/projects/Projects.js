import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FadeIn from 'react-lazyload-fadein';

import Header from '../Header';

import '../../styles/projects.css'
import { throws } from 'assert';

class Projects extends Component {

    constructor() {
        super();
        this.state = {
            projects: [],
            loaded: false,
            showNav: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    

    toggleNav() {
        this.state.showNav
        ? this.setState({ showNav: false })
        : this.setState({ showNav: true })
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

        //------------------
        // This is removes the overlay
        // on resize 
        //------------------
        window.addEventListener('resize', () => {
            if(window.innerWidth > 768) {
                this.setState({ showNav:false })
            }
        });
    }

    renderProjects(project) {
        return (
            <article key={project.id} style={{ backgroundImage: `url(${project.primaryImage})` }} className="projects__item">
                <div className="project--overlay">
                    <h2>{project.name}</h2>
                    <Link to={`/projects/${project.id}`}>View Project</Link>
                </div>
            </article>
        );
    }

    render() {
        return (
            <div>
                <Header title="Projects" />
                <div className={this.state.showNav ? "projects--overlay" : ""} onClick={this.toggleNav}></div>
                <section className="projects">
                    <nav className={this.state.showNav ? "projects__nav projects__nav--show" : "projects__nav"}>                    
                        <ul>
                            <h2>Projects</h2>                            
                            {
                                this.state.loaded
                                ? this.state.projects.map(project => {
                                    return (
                                        <li key={project.id}>
                                            <Link to={`/projects/${project.id}`}>{project.name}</Link>
                                        </li>                                
                                    )
                                })
                                : 'loading'
                            }
                            <button onClick={this.toggleNav}>Close</button>
                        </ul>
                    </nav>
                    <main className="projects__main">
                        {
                         this.state.loaded
                         ? this.state.projects.map(this.renderProjects)
                         : 'loading'
                        }
                    </main>
                                         
                </section>
                <button
                    onClick={this.toggleNav} 
                    className="projects__button"
                >
                    &#8801;
                </button>
            </div>
        );
    }
}

export default Projects;