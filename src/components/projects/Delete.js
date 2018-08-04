import React, { Component } from 'react';

class Delete extends Component {

    componentDidMount() { 

        const projectId = this.props.match.params.id;
        let idArr = Array();
        idArr.push(projectId);

        let sendData = {projectId: parseInt(idArr)}

        
        console.log(sendData)

        const stringData = JSON.stringify(sendData);

        console.log(stringData);
      




        // Throw the fetch into the task queue so we can setState
        setTimeout(()=> {
            fetch(`https://www.bergenstem.com/api/projects/removeProjects`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: stringData
            })
            .then(response => response.json())
            .catch(e => console.error(e));
        });
    }

    render() {
        return(
            <div>
                <h1>Delete route</h1>
            </div>
        );
    }
}

export default Delete;