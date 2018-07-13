import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            desc: null,
            projectId: null
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
            }).then((response) => {         
                console.log(response)   
                this.setState({
                    name: response.name,
                    desc: response.desc,
                    image: response.primaryImage

                });
            }).catch(e => console.log(e));
        });    
        
        
        
        
    }

    render() {
        return (
            <div>
                <Header image={this.state.image}/>
                <div className="container project">
                    <div className="box">
                        <div className="box__content-text">
                            {this.state.desc}
                        </div>
                        <div className="box__content">
                            <img src={this.state.image} alt="" className="img-fluid thumbnail"/>
                        </div>                        
                    </div>                    
                    <Link to="/projects">&#8672; Back</Link>                
                </div>
                
            </div>
        );
    }
}

export default Project;