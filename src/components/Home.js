import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import '../index.css';
import Nav from '../components/Nav';
import Keynote from '../components/Keynote';
import RandomQuotes from '../components/RandomQuotes';
import BookDisplay from '../components/BookDisplay';
import BookApp from './BookApp';



function Home() {
    return (
        <React.Fragment>
            <div className="App">
                <Nav />
                <Keynote />
                <BookApp />
                <RandomQuotes />
                <BookDisplay />
                
            </div>
        </React.Fragment>
    )
}

export default Home;
