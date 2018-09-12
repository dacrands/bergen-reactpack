import React, {Component} from 'react';
import {EditorState, convertToRaw, ContentState} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import createResizeablePlugin from 'draft-js-resizeable-plugin';
import "../../styles/textEditor.css";
import {stateToHTML} from "draft-js-export-html";

export default class Blogs extends Component {
  constructor(props) {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
      showMenu: false,
      showInput: false,
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
    };

    this.showBlogMenu = this.showBlogMenu.bind(this);
    this.plugins = [
      createResizeablePlugin()
    ];
  }

  componentDidMount() {
    fetch('/api/projects/getAllProjectMeta', {
      method: 'post',
    }).then(result => {
      return result.json()
    }).then((response) => {
      this.setState({
        loaded: true,
        projects: response
      });
    }).catch(e => console.log(e));


    window.addEventListener('scroll', () => {
      if (window.scrollY > this.refs.blog.offsetTop) {
        this.refs.blogMenu.classList.add('blog__menu--fixed')
      } else {
        this.refs.blogMenu.classList.remove('blog__menu--fixed')
      }
    })
  }

  showBlogMenu() {
    this.refs.blogMenu.classList.toggle('blog__menu--show')
    const tempBool = this.state.showMenu;
    this.setState({showMenu: !tempBool})
  };

  onEditorStateChange = (editorState) => {
    this.setState({editorState})
  };

  uploadImage(file) {
    return new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.imgur.com/3/image');
        xhr.setRequestHeader('Authorization', 'Client-ID 97dba846f0fd51f');
        const data = new FormData();
        data.append('image', file);
        xhr.send(data);
        xhr.addEventListener('load', () => {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        });
        xhr.addEventListener('error', () => {
          const error = JSON.parse(xhr.responseText);
          reject(error);
        });
      }
    );
  };

  componentWillMount(){
    fetch("/api/projects/userCanPost", {
      method: "POST",
      body: JSON.stringify({
        projectID: document.location.pathname.substr(7)
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    }).then(x => x.json()).then(x => {
      if(x.allow === true)
        this.setState({showInput: true});
    }).catch(x => console.log(x));
  }

  handleBlogSubmit = () => {
    let rawHTML = stateToHTML(this.state.editorState.getCurrentContent());
    fetch("/api/projects/createProjectPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        projectID: document.location.pathname.substr(7),
        type: "BLOGPOST",
        postedBy: "USER",
        data: rawHTML
      })
    }).then(x => x.text()).then(x => console.log(x)).catch(x => console.log(x));
  };

  render() {
    return (
      <div className="content--med  blog" ref="blog">
        {/* <nav className="blog__menu blog__menu--show" ref="blogMenu"> */}
        <nav className="blog__menu blog__menu--show" ref="blogMenu">
          <div className="blog__menu-container">
            <button className={"form__button"} onClick={this.showBlogMenu}>
              {
                this.state.showMenu
                  ? "\u2716"
                  : "\u203A"
              }
            </button>
            <ul>
              <li>{this.props.meeting}</li>
              <li>{this.props.contact}</li>
            </ul>
          </div>
        </nav>
        <div className="container--small">
          <div className="title">
            <h1>Blog</h1>
          </div>
          {this.state.showInput === true ? (
            <div className="box box--block">
              <h1 className="h1">Create a new post</h1>
              <Editor
                editorState={this.state.editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
                plugins={this.plugins}
                toolbar={{
                  image: {
                    uploadCallback: this.uploadImage,
                    defaultSize: {width: "100%", height: "auto"},
                    alt: {present: true, mandatory: false}
                  }
                }}
              />
              <button id={"submit_blog_post"} onClick={this.handleBlogSubmit}>Submit Blog Post</button>
            </div>
          ) : null }
          {this.state.blog.posts.map((post, index) => {
            return (
              <div key={`post-${index}`} className="box box--block">
                <div className="box__content">
                  <div className="box__content-title">
                    <h1 className="h1"> {post.date}  </h1>
                    <h3> {post.title} </h3>
                    <p><strong>Time: </strong>{post.meeting} </p>
                  </div>
                  <hr className="hr"/>
                  <div className="box__content-text">
                    <p>{post.body}</p>
                    <img className="img-fluid thumbnail" src={post.image} alt=""/>
                    <p>{post.body}</p>
                    <img className="img-fluid thumbnail" src={post.image} alt=""/>
                    <img className="img-fluid thumbnail" src={post.image} alt=""/>
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