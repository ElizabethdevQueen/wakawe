import React, { Component } from 'react';
import '../App.css';
import InfoBanner from './InfoBanner';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <section className="navbar">
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
                        <Link>
                            <li>
                                About Us
                            </li>
                        </Link>
                        <Link>
                            <li>
                                Blog
                            </li>
                        </Link>
                        <li>
                            Gallery
                        </li>
                        <li>
                            Contact Us
                        </li>
                        <button className="nav-btn">
                            LOGIN
                        </button>
                    </ul>
                </nav>
                <InfoBanner />
            </section>
        )
    }
}
