import React, { Component } from 'react'

// the styling is contained in App.css with the media query
// this banner is exported into the navbar
export default class InfoBanner extends Component {
    render() {
        return (
            <div className="book-info">
                <img src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/19a14fb2a_175267.jpg" alt="" />
                <div className="bk-title">
                    <h1>RICH DAD POOR DAD</h1>
                    <p>What the rich teach their kids about Money<br/>--that the poor and middle class do not</p>
                    <button className="bk-btn">READ MORE</button>
                </div>
            </div>
        )
    }
}
