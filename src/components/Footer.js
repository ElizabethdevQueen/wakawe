import React, { Component } from 'react';
import '../Gallery.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h1><span>WakawE</span>.com</h1>
                        <p>Our library offers various topics ranging from leadership.
                        Wakawe provides you a study room online</p>
                        <div className="contact">
                            <span><i className="fas fa-phone"></i>&nbsp; +2348170012944 </span>
                            <span><i className="fas fa-envelope"></i>&nbsp; elizabethaderemi@gmail.com </span>
                        </div>
                        <div className="socials">
                            <a href="https://web.facebook.com/elizabethsegajiboye/"><i className="fab fa-facebook"></i></a>
                            <a href=" https://www.instagram.com/duhneedesignz/"><i className="fab fa-instagram"></i></a>
                            <a href=" https://twitter.com/elizadevqueen?s=09"><i className="fab fa-twitter"></i></a>
                            <a href=" https://www.youtube.com/channel/UCGMD_Y47GwueAn7r7lmKV8g/featured?view_as=subscriber"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="footer-section links">
                        <h2>Quick Links</h2>
                        <br />
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/duhneedesignz/">Events</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/duhneedesignz/">Teams</a>
                            </li>
                            <li>
                                <a href="https://twitter.com/elizadevqueen?s=09">Study Groups</a>
                            </li>
                            <li>
                                <a href="https://twitter.com/elizadevqueen?s=09">Gallery</a>
                            </li>
                            <li>
                                <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRb-t8rTru7NataV03tREt6NYHh-HD7WQgCxQ&usqp=CAU">Terms and conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section contact-form">
                        <h2>Contact Us</h2>
                        <br/>
                        <form action="index.html" method="post">
                            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
                            <textarea name="" className="text-input contact-input" placeholder="Your message..." />
                            <br />
                            <button type="submit" className="btn btn-big contact-btn">
                                <i className="fas fa-envelope"></i>
                                SEND
                            </button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; wakawe.com | Designed by Elizabethdevqueen
                </div>
            </div>
        )
    }
}
