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
          Accent: "&#8942;",
          Desc: "At Bergen Community College, our mission is to provide our STEM students with the skills essential to success at 4-year institutions and beyond.",
          LinkText: "Learn More",
          Link: "#"
        },
        {
          Title: "Research",
          Accent: "<span>&#8942;</span>",
          Desc: "From rockets to algae biodiesel, Bergen Community college offers STEM students a wide variety of research opportunities.",
          LinkText: "Student Projects",
          Link: "Projects"
        }, 
        {
          Title: "Join STEM",
          Accent: "<span>&#8942;</span>",
          Desc: "Learn some of the benefits of pursuing a career in Science, Technology, Engineering, and Mathematics. ",
          LinkText: "Benefits of STEM",
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
              <h2><span>&#8942;</span>   {x.Title}              
              </h2>              
              <p>{x.Desc}</p>
              <Link to={x.Link}>{x.LinkText}</Link>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Info;
