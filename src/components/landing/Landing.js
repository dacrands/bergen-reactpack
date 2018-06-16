import React, {Component} from "react";
import { Link } from "react-router-dom";

import Info from './Info';
import Content from './Content';
import Video from '../Video';
import Header from './Header';
import Trianglify from "./Triangle";

import '../../styles/info.css'

class Landing extends Component {

    render() {
        return (
            <div>
                <Header />
                <Info className="info"/>
                <Content />
            </div>            
        );
    }
};

export default Landing;