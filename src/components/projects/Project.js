import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

class Project extends Component {
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
        setTimeout(()=> {
            fetch(`http://bccstem-env.ikpje5mqwr.us-east-1.elasticbeanstalk.com/api/projects/getProjectMetaData/${this.state.projectId}`, {
                method: 'post',
            }).then(result => {
                return result.json()
            }).then(response => {         
                console.log(response)   
                this.setState({
                    name: response.name,
                    desc: response.desc,
                    image: response.primaryImage,
                    advisor: response.advisor,
                    team: response.team,
                });
            }).catch(e => console.log(e));
        });    
        
        
        
        
    }

    render() {
        return (
            <div>
                <Header image={this.state.image} title={this.state.name}/>
                <main className="container project">
                    <div className="title">
                        <h1>The Project</h1>
                        <hr className="hr"/>
                    </div>
                    <div className="box">
                        <div className="box__content-text">
                            {this.state.desc}
                        </div>
                        <div className="box__content">
                            <img src={this.state.image} alt="" className="img-fluid thumbnail"/>
                        </div>                        
                    </div>    

                    <div className="title">
                        <h1>The Team</h1>
                        <hr className="hr"/>
                    </div>

                    <div className="box">
                        <div className="box__item">
                            <div className="box__text">
                                <h2>Advisor(s)</h2>
                                <ul>
                                    <li>{this.state.advisor}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="box__item">
                            <div className="box__text">
                                <h2>Student</h2>
                                <ul>
                                    {   
                                        this.state.team
                                        ? this.state.team.split(';').map((student) => {
                                            return (
                                                <li>{student}</li>
                                            )
                                        })
                                        : 'loading'                                    
                                        
                                    }
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Link to="/projects">&#8672; Back</Link>                
                </main>
                
            </div>
        );
    }
}

export default Project;