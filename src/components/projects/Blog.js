import React, { Component } from 'react';
import Header from '../Header';



class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blog: {
                title: 'Lorem ipsum dolor sit.',
                posts: [
                    {
                        title: 'Today we did some great stuff',
                        meeting: 'Lab room from 9 to 6',
                        date: new Date().toDateString(),
                        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ad quos asperiores sit, iusto rerum minus, id atque odit aspernatur corporis tenetur modi aut vero consectetur sunt autem officiis excepturi?",
                        image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ea57442bf3e8f56890337f5accda026b&auto=format&fit=crop&w=400&q=60"
                    },
                    {
                        title: 'Wow! What an experiment!',
                        meeting: 'Lab room from 9 to 6',
                        date: new Date().toDateString(),
                        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ad quos asperiores sit, iusto rerum minus, id atque odit aspernatur corporis tenetur modi aut vero consectetur sunt autem officiis excepturi?",
                        image: "https://images.unsplash.com/photo-1524683745036-b46f52b8505a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8464bc4ae15f5ba50c812d9b66151509&auto=format&fit=crop&w=500&q=60"
                    },
                    {
                        title: 'We created a can phone!',
                        meeting: 'Lab room from 9 to 6',
                        date: new Date().toDateString(),
                        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ad quos asperiores sit, iusto rerum minus, id atque odit aspernatur corporis tenetur modi aut vero consectetur sunt autem officiis excepturi?",
                        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eb99de7c333b241530872220aa87e93c&auto=format&fit=crop&w=500&q=60"
                    },
                    {
                        title: 'Lorem ipsum dolor sit.',
                        meeting: 'Lab room from 9 to 6',
                        date: new Date().toDateString(),
                        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ad quos asperiores sit, iusto rerum minus, id atque odit aspernatur corporis tenetur modi aut vero consectetur sunt autem officiis excepturi?",
                        image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ea57442bf3e8f56890337f5accda026b&auto=format&fit=crop&w=400&q=60"
                    },
                    {
                        title: 'Lorem ipsum dolor sit.',
                        meeting: 'Lab room from 9 to 6',
                        date: new Date().toDateString(),
                        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ad quos asperiores sit, iusto rerum minus, id atque odit aspernatur corporis tenetur modi aut vero consectetur sunt autem officiis excepturi?",
                        image: "https://images.unsplash.com/photo-1524683745036-b46f52b8505a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8464bc4ae15f5ba50c812d9b66151509&auto=format&fit=crop&w=500&q=60"
                    },
                    {
                        title: 'Lorem ipsum dolor sit.',
                        meeting: 'Lab room from 9 to 6',
                        date: new Date().toDateString(),
                        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ad quos asperiores sit, iusto rerum minus, id atque odit aspernatur corporis tenetur modi aut vero consectetur sunt autem officiis excepturi?",
                        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eb99de7c333b241530872220aa87e93c&auto=format&fit=crop&w=500&q=60"
                    },
                    {
                        title: 'Lorem ipsum dolor sit.',
                        meeting: 'Lab room from 9 to 6',
                        date: new Date().toDateString(),
                        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ad quos asperiores sit, iusto rerum minus, id atque odit aspernatur corporis tenetur modi aut vero consectetur sunt autem officiis excepturi?",
                        image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ea57442bf3e8f56890337f5accda026b&auto=format&fit=crop&w=400&q=60"
                    },
                    {
                        title: 'Lorem ipsum dolor sit.',
                        meeting: 'Lab room from 9 to 6',
                        date: new Date().toDateString(),
                        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ad quos asperiores sit, iusto rerum minus, id atque odit aspernatur corporis tenetur modi aut vero consectetur sunt autem officiis excepturi?",
                        image: "https://images.unsplash.com/photo-1524683745036-b46f52b8505a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8464bc4ae15f5ba50c812d9b66151509&auto=format&fit=crop&w=500&q=60"
                    },
                    {
                        title: 'Lorem ipsum dolor sit.',
                        meeting: 'Lab room from 9 to 6',
                        date: new Date().toDateString(),
                        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ad quos asperiores sit, iusto rerum minus, id atque odit aspernatur corporis tenetur modi aut vero consectetur sunt autem officiis excepturi?",
                        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eb99de7c333b241530872220aa87e93c&auto=format&fit=crop&w=500&q=60"
                    }
                ]
            }            
        }
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
    }
   
    render() {
        return (
            <div className="content--med  blog">
                {/* <Header title={this.state.blog.title} /> */}
                              
                <div className="container--small"> 
                    <div className="title">
                        <h1>Blog</h1>
                    </div>                     
                        {/* {console.log(this.state.blog.posts)} */}
                        {this.state.blog.posts.map( (post, index) => { 
                            return (  
                                <div key={`post-${index}`} className="box box--block">            
                                    <div className="box__content">
                                        <div className="box__content-title">
                                            <h1 className="h1"> {post.date}  </h1>                               
                                            <h3> {post.title} </h3>
                                            <p> <strong>Time: </strong>{post.meeting} </p>
                                        </div>
                                        <hr className="hr"/>
                                        <div className="box__content-text">                                
                                            <p>{post.body}</p>
                                            <img className="img-fluid thumbnail" src={post.image} alt="" />
                                            <p>{post.body}</p>
                                            <img className="img-fluid thumbnail" src={post.image} alt="" />
                                            <img className="img-fluid thumbnail" src={post.image} alt="" />
                                            <p>{post.body}</p>                                        
                                        </div>
                                    </div>
                                </div>
                            )                            
                        })}                
                    </div>                                    
            </div>      
        );
    }
}

export default Blog;