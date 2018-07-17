import React, { Component } from 'react';
import Header from './Header';
import '../styles/form.css';

class Contact extends Component {

    componentDidMount() {
        document.body.style = 'background: var(--light)'
    }

    componentWillUnmount() {
        document.body.style = 'background: none'
    }

    render() {
        return (
            <div>
                <Header title="Join STEM Club" />                
                <div className="form__container">
                    <form action="" className="form">
                        <div className="form__item">
                            <label htmlFor="firstName" className="form__item-label">First name</label>
                            <input type="text" className="form__item-input" />
                        </div>
                        <div className="form__item">
                            <label htmlFor="lastName" className="form__item-label">Last name</label>
                            <input type="text" className="form__item-input" />
                        </div>
                        <div className="form__item">
                            <label htmlFor="email" className="form__item-label">Email</label>
                            <input type="text" className="form__item-input" />
                        </div>
                        <div className="form__item">
                            <label htmlFor="studentId" className="form__item-label">Student ID</label>
                            <input type="number" className="form__item-input" />
                        </div>
                        <div className="form__item">
                            <label htmlFor="major" className="form__item-label">Major</label>
                            <input name="major" type="text" className="form__item-input"/>
                        </div>
                        <div className="form__item">
                            <label htmlFor="title" className="form__item-label">Project you wish to join</label>
                            <input name="title" type="text" className="form__item-input"/>
                        </div>
                        <p className="lead">or</p>
                        <div className="form__item">
                            <label htmlFor="newTitle" className="form__item-label">New Project</label>
                            <input name="newTitle" type="text" className="form__item-input"/>
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
                        <button className="form__button">
                            Submit
                        </button>                        
                    </form>  
                </div>
            </div>            
        );
    }
}

export default Contact;
