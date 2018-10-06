import React, { Component } from "react";

import Info from './Info';
import Content from './Content';
import Header from './Header';

import '../../styles/info.css'

class Landing extends Component {

  render() {
    return (
      <div>
        <Header />
        <Info className="info" />
        <Content />
      </div>
    );
  }
};

export default Landing;