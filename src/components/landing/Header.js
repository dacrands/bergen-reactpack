import React, { Component } from "react";
import "../../styles/landing-header.css";
// import Background from '../../images/bgs/bcc-bg.svg';


class Header extends Component{
  
  render(){
    return(
      <header className="landing__header" id="landingHeader">
        <div className="overlay">
          Bergen STEM
         </div>        
         {/* <Background style={{height:'100vh', width:'100%', position: 'absolute', zIndex:'-2'}}/> */}
        <canvas id="myCanvas" style={{}}>       
        </canvas>
      </header>
    )
  }
}

export default Header;
