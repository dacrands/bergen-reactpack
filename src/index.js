import React, {Component} from 'react';
import ReactDOM from  'react-dom';
import App from './components/App';
import "./styles/main.css";

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!'); 
}
const app = document.createElement('div');
app.id = "app"
document.querySelector('body').appendChild(app);

ReactDOM.render(<App />, document.getElementById('app'));

