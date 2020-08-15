import React, { Component } from 'react';
import '../App.css';
import InfoBanner from './InfoBanner';
import { Link, BrowserRouter as Router } from 'react-router-dom';
// import Routes from '../Pages/Routes';

export default class Nav extends Component {
    render() {
        return (
            <section className="navbar">
                <Router>
                <nav>
                    <input type="checkbox" id="check" />
                    <label for="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                    <label className="logo">
                        WakawE
                    </label>
                    <ul>
                        <Link to="/">
                            <li className="active">
                                Home
                            </li>
                        </Link>
                        
                        <Link to="/about">
                            <li>
                                About Us
                            </li>
                        </Link>
                        <Link to="/blog">
                            <li>
                                 Blog
                            </li>
                        </Link>
                        <Link to="/bookapp">
                        <li>
                                Book App
                        </li>
                        </Link>
                        <Link to="/gallery">
                            <li>
                                Gallery
                            </li>
                        </Link>
                        <Link to="/contact">
                            <li>
                                Contact Us
                            </li>
                        </Link>
                        <Link to="/login">
                            <button className="nav-btn">
                                LOGIN
                            </button>
                        </Link>
                    </ul>
                </nav>
                </Router>
                <InfoBanner />
            </section>
        )
    }
}
