import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



import Menu from './Menu';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import ScrollToTop from './ScrollToTop';
import Scholars from './Scholars';
import Calendar from './Calendar';
import Contact from './Contact';
import Benefits from './Benefits';
import Landing from './landing/Landing';
import Projects from './projects/Projects';
import Project from './projects/Project';



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
              <Route path="/benefits" component={Benefits} />
              <Route exact path="/projects" component={Projects} />
              {/* <Route path={`/projects/${this.state.currProject}`} render={() => <Project id={this.state.currProject} getId={this.getProjectId} />} /> */}
              <Route path={"/projects/:id"} component={Project} />
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