import React, {Component} from 'react';
import ReactDOM from  'react-dom';
import App from './components/App';
import "./styles/main.css";

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!'); 
}

const html = document.getElementsByTagName('html');
html.lang = 'en';

// const meta=document.createElement('meta');
// meta.name='viewport';
// meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');

const app = document.createElement('div');
app.id = "app"

const triangleLink = document.createElement('script');
triangleLink.src = "https://cdnjs.cloudflare.com/ajax/libs/trianglify/1.1.0/trianglify.min.js";

const triangleScript = document.createElement('script');
console.log(triangleScript);
// debugger;
// triangleScript.innerHTML = "(varpattern=Trianglify({width:window.innerWidth,cell_size:15,variance:60,stroke_width:5,x_colors:[\"#290238\",\"#421155\",\"#7A4A8D\",\"#9A73A9\"],y_colors:\"match_x\"}).canvas(document.getElementById(\"myCanvas\"))})();"
// document.querySelector('body').appendChild(triangleLink);
// document.querySelector('body').appendChild(triangleScript);
// const script = document.createElement('script');
// script.src = "https://cdnjs.cloudflare.com/ajax/libs/trianglify/1.1.0/trianglify.min.js";


// document.getElementsByTagName('head')[0].appendChild(meta);
document.querySelector('body').appendChild(app);

ReactDOM.render(<App />, document.getElementById('app'));

