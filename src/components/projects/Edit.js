import React, { Component } from 'react';

import Header from '../Header';


class Edit extends Component {

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
  };

  componentDidMount() {
    document.body.style.background = "#dadada"


    const projectId = this.props.match.params.id;
    this.setState({ projectId });

    // Throw the fetch into the task queue so we can setState
    setTimeout(() => {
      fetch(`/api/projects/getProjectMetaData/${this.state.projectId}`, {
        method: "POST",
        credentials: "include",
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
  };

  componentWillUnmount() {
    document.body.style.background = ""
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  };

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

    console.log(typeof sendData);
    console.log(sendData);

    fetch('/api/projects/editProjectMeta', {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: sendData
    })
      .then(response => {
        console.log(response.status)
        if (response.status !== 200) {
          return console.log('error`')
        }

        return this.props.history.push("/projects")
      })
      .catch(e => console.error(e));
  };

  render() {
    return (
      <div>
        <Header title="Edit"></Header>
        <div className="form__container">
          <form action="" className="form" onSubmit={this.handleProjectEdit.bind(this)}>
            <div className="form__item">
              <label htmlFor="name" className="form__item-label">Name</label>
              <input
                name="name"
                type="text"
                onChange={this.handleChange.bind(this)}
                className="form__item-input"
                value={this.state.name}
              />
            </div>
            <div className="form__item">
              <label htmlFor="primaryImage" className="form__item-label">Image</label>
              <input
                name="primaryImage"
                type="text"
                onChange={this.handleChange.bind(this)}
                className="form__item-input"
                value={this.state.primaryImage}
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