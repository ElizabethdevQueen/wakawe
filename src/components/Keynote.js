import React, { Component } from 'react'


// the styling is contained in App.css;
// this information is just after the banner;
export default class Keynote extends Component {
    render() {
        return (
            <div className="keynote-content">
                <div className="ui container comments">
                    <div className="comment">
                        <a href="/" className="icons">
                            <i class="fa fa-book" aria-hidden="true"></i>
                        </a>

                        <div className="text">
                            <h1>Get access to our updated <br/>library of great books</h1>
                            <p>With packed variety of industry professionals</p>
                        </div>
                    </div>
                </div>
                <div className="ui container comments">
                    <div className="comment">
                        <a href="/" className="icons">
                            <i class="fa fa-laptop" aria-hidden="true"></i>
                        </a>

                        <div className="text">
                            <h1>Our library offers various topics <br/>ranging from leadership...</h1>
                            <p>Wakawe provides you a study room online</p>
                        </div>
                    </div>
                </div>
                <div className="ui container comments">
                    <div className="comment">
                        <a href="/" className="icons">
                            <i class="fa fa-university" aria-hidden="true"></i>
                        </a>

                        <div className="text">
                            <h1>Hone your skill with <br/>our accessible e-library</h1>
                            <p>Readers are leaders</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
