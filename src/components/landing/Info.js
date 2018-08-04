import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/info.css';

import Books from '../../images/books.svg';
import School from '../../images/school.svg';
import Join from '../../images/join.svg';

class Info extends Component {
  constructor() {
    super();
    this.state = {
      Info: [
        {
          Title: 'About',
          accent: 'school',
          Desc: 'At Bergen Community College, our mission is to provide our STEM students with the skills essential to success at 4-year institutions and beyond.',
          LinkText: 'Learn More \u25B8',
          Link: 'about',
        },
        {
          Title: 'Research',
          accent: 'books',
          Desc: 'From rockets to algae biodiesel, Bergen Community college offers STEM students a wide variety of research opportunities.',
          LinkText: 'Student Projects \u25B8',
          Link: 'projects',
        },
        {
          Title: 'Join STEM',
          accent: 'join',
          Desc: 'Interested in joining a research project or submitting your own research proposal? Let us know!',
          LinkText: 'Contact us \u25B8',
          Link: 'contact',
        },
      ],
    };
  }

  renderIcon(accent) {
    if (accent === 'books') {
      return <Books />;
    } else if (accent === 'school') {
      return <School />;
    } else {
      return <Join />;
    }
    
  }

  render() {
    return (
      <div className="info">
        {this.state.Info.map((info, index) => (
          <div key={index} className="info__content">
              <div>
                {this.renderIcon(info.accent)}
                <h2>
                  {info.Title}
                </h2>
              </div>
              <p>
                {info.Desc}
              </p>
            <Link className="info__link" to={info.Link}>
                {info.LinkText}
              </Link>
          </div>
          ))}
      </div>
    );
  }
}

export default Info;
