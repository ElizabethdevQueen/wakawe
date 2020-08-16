import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import '../index.css';
// import Nav from '../components/Nav';
import Keynote from '../components/Keynote';
import RandomQuotes from '../components/RandomQuotes';
import BookDisplay from '../components/BookDisplay';
// import BookApp from './BookApp';
import InfoBanner from './InfoBanner';
import Footer from '../components/Footer';



function Home() {
    return (
        <React.Fragment>
            <div className="App">
                <InfoBanner />
                <Keynote />
                <RandomQuotes />
                <BookDisplay />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Home;
