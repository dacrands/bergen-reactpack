import React from 'react';
import {
  BrowserRouter as Router,
  Route,
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
import Edit from './projects/Edit';
import Delete from './projects/Delete';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';
import Blogs from "./projects/Blogs";

const App = () => (
  <Router>
    <ScrollToTop>
      <div>
        <Menu />
        <Route
          exact path="/"
          component={Landing}
        />
        <Route path="/3sp" component={Scholars} />
        <Route path="/contact" component={Contact} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/a/new" component={New} />
        <Route exact path={"/projects/:id/blog"} component={Blogs} />
        <Route path={"/projects/:id/edit"} component={Edit} />
        <Route path={"/projects/:id/delete"} component={Delete} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Footer />
      </div>
    </ScrollToTop>
  </Router>
);

export default App;
