import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import './node_modules/semantic-ui-css/semantic.min.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// import Nav from './components/Nav';



ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

