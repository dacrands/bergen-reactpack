import React, { Component } from 'react';

import Header from '../Header';

function stringifyFormData(fd) {
    const data = {};
      for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
}

class New extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            desc: "",
            projectId: "",
            advisor: "",
            team: "",
            times: "",
            contact: "",
        }
    }

    componentDidMount() {
        document.body.style.background = "#dadada"
    }

    componentWillUnmount() {
        document.body.style.background = ""
    }

    handleProjectEdit(event) {
        event.preventDefault();
        const data = new FormData(event.target);  
        let stringData = stringifyFormData(data);
        
        fetch('http://bccstem-env.ikpje5mqwr.us-east-1.elasticbeanstalk.com/api/projects/createNewProject', {            
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: stringData
        })
        .then(response => response.json())
        .catch(e => console.error(e));
    }

    handleChange(event) {
        // console.log(event.target.name);
        this.setState({ [event.target.name] : event.target.value })
    }

    render() {
        return (
            <div>
                <Header title="Create Project"></Header>
                <div className="form__container">
                    <form action="" className="form" onSubmit={this.handleProjectEdit.bind(this)}>
                        <div className="form__item">
                            <label htmlFor="name" className="form__item-label">Name</label>
                            <input 
                                name="name" 
                                type="text" 
                                onChange={this.handleChange.bind(this)} 
                                className="form__item-input" value={this.state.name}
                            />
                        </div>
                        <div className="form__item">
                            <label htmlFor="image" className="form__item-label">Image</label>
                            <input 
                                name="primaryImage" 
                                type="text" 
                                onChange={this.handleChange.bind(this)} 
                                className="form__item-input" 
                                value={this.state.primaryImage}
                                aria-describedby="imageDesc"                                
                            />
                            <span class={"form__desc"} id="imageDesc">This should be an imgur link</span>
                        </div>
                        <div className="form__item">
                            <label htmlFor="adivsor" className="form__item-label">Advisor</label>
                            <input 
                                name="advisor" 
                                type="text" 
                                onChange={this.handleChange.bind(this)} 
                                className="form__item-input" 
                                value={this.state.advisor}
                            />
                        </div>
                        <div className="form__item">
                            <label htmlFor="contact" className="form__item-label">Contact</label>
                            <input 
                                name="contact" 
                                type="email" 
                                onChange={this.handleChange.bind(this)} 
                                className="form__item-input" 
                                placeholder="e.g., student@bergen.edu"
                                value={this.state.contact}                                
                            />
                        </div>
                        <div className="form__item">
                            <label htmlFor="team" className="form__item-label">Team</label>
                            <input 
                                name="team" 
                                type="text" 
                                onChange={this.handleChange.bind(this)} 
                                className="form__item-input" 
                                value={this.state.team}
                                placeholder="e.g., Lise Meitner, Enrico Fermi, Robert Oppenheimer"
                                aria-describedby="teamDesc"
                            />
                            <span className={"form__desc"} id="teamDesc">Place a comma between names</span>
                        </div>
                        <div className="form__item">
                            <label htmlFor="times" className="form__item-label">
                                Meeting place and time
                            </label>
                            <input 
                                name="times" 
                                type="text" 
                                onChange={this.handleChange.bind(this)} 
                                className="form__item-input" 
                                placeholder="e.g., Lab room from noon to 3"
                                value={this.state.meeting}
                            />
                        </div>
                        <div className="form__item">
                            <label htmlFor="desc" className="form__item-label">Description</label>
                            <textarea 
                                name="desc" 
                                type="text"
                                value={this.state.desc}
                                onChange={this.handleChange.bind(this)}
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
        )
    }
}

export default New;