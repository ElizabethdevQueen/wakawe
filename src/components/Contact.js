import React from 'react';
import '../Gallery.css';
// import Nav from './Nav';


function Contact() {
    return (
        <div className="body">
            <div className="container">
            <h1>Connect with us</h1>
            <p>We would love to respond to your queries and help your study path. <br />Feel free to get in touch</p>

            <div className="contact-box">
                <div className="contact-left">
                    <h3>Send your request</h3>
                    <form>
                        <div className="input-row">
                            <div className="input-group">
                                    <label>Name</label>
                                    <input type="text" placeholder="Your name" />
                            </div>
                            <div className="input-group">
                                <label>Phone</label>
                                <input type="number" placeholder="Your mobile number" />
                            </div>
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your name" />
                            </div>
                            <div className="input-group">
                                <label>Subject</label>
                                <input type="text" placeholder="Available books" />
                            </div>
                        </div>

                        <label>Message</label>
                        <textarea rows="5" placeholder="Your message..."></textarea>
                        <button className="contact-butn" type="submit">SEND</button>
                    </form>
                </div>
                <div className="contact-right">
                    <h3>Reach Us</h3>
                    <table>
                        <tr>
                            <td>Email</td>
                            <td>wakawe@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>+2348170012944</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>Beachside View estate, chevron park<br/>New road, Lekki Lagos.</td>
                        </tr>
                    </table>
                </div>

            </div>
            </div>
        </div>
    );
}

export default Contact;