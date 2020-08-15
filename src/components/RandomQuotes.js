import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomQuotes = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const quoteAPI = async () => {
        let arrayOfQuotes = [];
        try {
            const data = await axios.get("https://api.quotable.io/random")
            arrayOfQuotes = data.data;
            console.log(arrayOfQuotes)
        }catch(error) {
            console.log(error);
        }
        try {
            setQuote(arrayOfQuotes.content);
            setAuthor(arrayOfQuotes.author);
        }catch(error) {
            console.log(error);
        }
    };
        useEffect(() => {
           quoteAPI ()
        }, []);
    return (
        <div className="quotes">
            <div className="quoteBox">
                <div className="container">
                    <div className="quote"><h2>{quote}</h2></div>
                    <div className="author">{author}</div>
                    <div className="quoteButton">
                        <button className="quotebtn" onClick={quoteAPI}>More Quotes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default RandomQuotes;