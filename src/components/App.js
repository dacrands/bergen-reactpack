import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import ScrollToTop from './ScrollToTop';
import Menu from './Menu';
import Landing from './landing/Landing';
import Scholars from './Scholars';
import Contact from './Contact';
import Calendar from './Calendar';
import About from './About';
import Projects from './projects/Projects';
import New from './projects/New';
import Project from './projects/Project';
import Edit from './projects/Edit';
import Delete from './projects/Delete';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';
import Blogs from "./projects/Blogs";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isLanding: false,
      currProject: '235'
    };        

    this.getProjectId = this.getProjectId.bind(this);
  }

  setLanding() {
    this.state.isLanding
    ? this.setState({ isLanding:false })
    : this.setState({ isLanding:true })
  }

  getProjectId(id) {
    console.log('inside')
    this.setState({
      currProject: id
    })
  }


  render() {
    return(
      <Router>
        <ScrollToTop>
          <div>
            <Menu isLanding={this.state.isLanding} />
              <Route 
                exact path="/" 
                component={Landing}               
                onLoad={this.setLanding.bind(this)}
              />
              <Route path="/3sp" component={Scholars} />
              <Route path="/contact" component={Contact} />        
              <Route path="/calendar" component={Calendar} />
              <Route path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/projects/a/new" component={New} />              
              <Route exact path={"/projects/:id"} component={Project} />
              <Route path={"/projects/:id/edit"} component={Edit} />
              <Route path={"/projects/:id/delete"} component={Delete} />
              <Route path={"/blogs/:id"} component={Blogs} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }  
};

export default App;