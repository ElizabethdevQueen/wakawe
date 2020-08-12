import React from 'react';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Blog from './Blog';
import Login from './Login';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function Routes() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        </Router>
    );
}

export default Routes;
