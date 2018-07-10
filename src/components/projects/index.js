import React, { Component } from 'react';


class Projects extends Component {

    componentDidMount() {
        fetch('http://bccstem-env.ikpje5mqwr.us-east-1.elasticbeanstalk.com/api/projects/getAllProjectMeta', {
            method: 'post',
        }).then((response) => {
            console.log(response);
        })

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Projects;