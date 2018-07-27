import React, { Component } from 'react';

import Header from '../Header';


class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            desc: null,
            projectId: null,
            advisor: null,
            team: null,
        }
    }    

    componentDidMount() {
        const projectId = this.props.match.params.id;
        this.setState({ projectId });

        // Throw the fetch into the task queue so we can setState
        setTimeout(()=> {
            fetch(`http://bccstem-env.ikpje5mqwr.us-east-1.elasticbeanstalk.com/api/projects/getProjectMetaData/${this.state.projectId}`, {
                method: 'post',
            }).then(result => {
                return result.json()
            }).then(response => {         
                this.setState({
                    name: response.name,
                    desc: response.desc,
                    primaryImage: response.primaryImage,
                    advisor: response.advisor,
                    team: response.team,
                });
            }).catch(e => console.log(e));
        });     
    }

    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value })
    }

    handleProjectEdit(event) {
        event.preventDefault();
        
        const data = new FormData(event.target);  
        let stringData = stringifyFormData(data);
        let objData = JSON.parse(stringData);
        
        let editData = {
            projectID: this.state.projectId,
            newMeta: objData
        }

        const sendData = JSON.stringify(editData)

        fetch('http://bccstem-env.ikpje5mqwr.us-east-1.elasticbeanstalk.com/api/projects/editProjectMeta', {            
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: sendData
        })
        .then(response => {
            if (response.status !== 200) {
                return console.log('error`')
            }

            return this.props.history.push("/projects")
            
        })
        .catch(e => console.error(e));
    }    

    render() {
        return (
            <div>
                <Header title="Edit"></Header>
                <div className="form__container">
                    <form action="" className="form" onSubmit={this.handleProjectEdit.bind(this)}>
                        <div className="form__item">
                            <label htmlFor="name" className="form__item-label">Name</label>
                            <input 
                                type="text" 
                                onChange={this.handleChange.bind(this)} 
                                className="form__item-input" 
                                value={this.state.name}
                            />
                        </div>
                        <div className="form__item">
                            <label htmlFor="image" className="form__item-label">Image</label>
                            <input 
                                name="projectImage" 
                                type="text" 
                                onChange={this.handleChange.bind(this)} 
                                className="form__item-input" 
                                value={this.state.primaryImage}
                            />
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
                            <label htmlFor="team" className="form__item-label">Team</label>
                            <input 
                                name="team" 
                                type="text" 
                                onChange={this.handleChange.bind(this)} 
                                className="form__item-input" 
                                value={this.state.team}
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

export default Edit;

// ----------------------------------
//         HELPER FUNCTIONS
// ----------------------------------

// Working with form data is a bit involved with react.
// This function stringifies the data since JSON.stringify() won't.
function stringifyFormData(fd) {
    const data = {};
      for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
}