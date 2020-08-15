import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Login from './components/Login';
import BookApp from './components/BookApp';



function App() {
  return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Home} ></Route>
          <Route path="/about" component={About} ></Route>
          <Route path="/blog" component={Blog} ></Route>
          <Route path="/bookapp" component={BookApp} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
        </Switch> 
      </React.Fragment>
  );
}

export default App;
