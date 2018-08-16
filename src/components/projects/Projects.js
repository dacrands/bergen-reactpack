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

    componentDidUpdate() {
        this.state.showNav
        ? document.body.style.overflow = 'hidden'
        : document.body.style.overflow = 'auto';
    }

    toggleNav() {
        this.state.showNav
        ? this.setState({ showNav: false })
        : this.setState({ showNav: true })
    }

    componentDidMount() {
        fetch('/api/projects/getAllProjectMeta', {
            method: 'post',
        })
        .then(result => {
            return result.json()
        })
        .then((response) => {            
            this.setState({                
                projects: response
            });
        })
        .then(
            setTimeout(()=> {
                return this.setState({ loaded:true });
            }, 50)
        )
        .catch(e => console.log(e));

        
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

    componentWillUnmount() {
        return document.body.style.overflow = 'auto';
    }

    renderProjects(project) {
        return (
            <article key={project.id} style={{ backgroundImage: `url(${project.primaryImage})` }} className="projects__item">
                <Link to={`/projects/${project.id}`}>
                    <div className="project--overlay">
                        <h2>{project.name}</h2>
                        {/* View Project */}
                    </div>
                </Link>
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
                        <h2 className={"text--center"}>Projects</h2>  
                        <ul>                                                      
                            {
                                this.state.loaded
                                ? this.state.projects.map(project => {
                                    return (
                                        <li key={project.id}>
                                            <Link to={`/projects/${project.id}`}>{project.name}</Link>
                                        </li>                                
                                    )
                                })
                                : 
                                <div>
                                    <h1>Loading is cool</h1>
                                </div>                            
                            }
                            <button onClick={this.toggleNav}>Close</button>
                        </ul>
                    </nav>
                    <main className="projects__main content--pattern">
                        {
                         this.state.loaded
                         ? this.state.projects.map(this.renderProjects)
                         :
                         <div>
                            <div className="loading absolute--cover">
                                <div className="spinner spinner-1"></div>
                            </div> 
                        </div>                         
                        }
                    </main>
                                         
                </section>
                <button
                    onClick={this.toggleNav} 
                    className="projects__button form__button"
                >
                &#8801;
                </button>              
            </div>
        );
    }
}

export default Projects;