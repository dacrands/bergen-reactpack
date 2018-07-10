import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../../styles/info.css";

class Info extends Component{
  constructor(){
    super();
    this.state = {
      Info: [
        {
          Title: "About",
          Accent: "\u24D8",
          Desc: "At Bergen Community College, our mission is to provide our STEM students with the skills essential to success at 4-year institutions and beyond.",
          LinkText: "Learn More\u25B8",
          Link: "#"
        },
        {
          Title: "Research",
          Accent: "\u2699",
          Desc: "From rockets to algae biodiesel, Bergen Community college offers STEM students a wide variety of research opportunities.",
          LinkText: "Student Projects\u25B8",
          Link: "Projects"
        }, 
        {
          Title: "Join STEM",
          Accent: "\u2A1D",
          Desc: "Learn some of the benefits of pursuing a career in Science, Technology, Engineering, and Mathematics. ",
          LinkText: "Benefits of STEM\u25B8",
          Link: "benefits"
        }
      ]
    }
  }

  render(){
    let iterate = 0;
    return(
      <div className="info">
        {this.state.Info.map(x => {
          iterate++;
          return (
            <div key={iterate} className="info__content">
            {/* {iterate % 2 === 0 ? <span>&#8942;</span> : <span>&#8943;</span>} */}
              <div>
              <span>{x.Accent}</span>
                <h2>{x.Title}</h2>
                
                </div>      
              
              <p>{x.Desc}</p>
              <Link className="info__link" to={x.Link}>{x.LinkText}</Link>

              <div>
              
              </div>
              
            </div>
            
          )
        })}
      </div>
    )
  }
}

export default Info;
