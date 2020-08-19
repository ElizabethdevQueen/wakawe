import React from 'react';
import Books from './Books';
import '../App.css';


function BookApp () {
    return(
        <>
        <section className="bookapp">
            {/* <div className="header">
                <i className="fas fa-book fa-2x"></i>
                <h1>Book App</h1>
            </div> */}
            <Books />
        </section>
        </>
    )
}

export default BookApp;