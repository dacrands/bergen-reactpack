import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Menu from './Menu';
import Footer from './Footer';
import Scholars from './Scholars';
import Calendar from './Calendar';
import Contact from './Contact';
import Benefits from './Benefits';
import Landing from './landing/Landing';
import Blog from './projects/Blog';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isLanding: false };        
  }

  setLanding() {
    this.state.isLanding
    ? this.setState({ isLanding:false })
    : this.setState({ isLanding:true })
  }


  render() {
    return(
      <Router>
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
            <Route path="/blog" component={Blog} />
          <Footer />
        </div>
      </Router>
    );
  }  
};

export default App;