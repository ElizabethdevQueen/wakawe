import React from 'react';
import '../index.css';
import Nav from '../components/Nav';
import Keynote from '../components/Keynote';
import RandomQuotes from '../components/RandomQuotes';
import BookDisplay from '../components/BookDisplay';
import Routes from './Routes';

function Home() {
    return (
        <div className="App">
            <Nav />
            <Routes />
            <Keynote />
            <RandomQuotes />
            <BookDisplay />
        </div>
    );
}

export default Home;
