import React from 'react'
import './TryAgain.css'

const TryAgain = ({ words,
    characters,
    wpm }) => {
    return (
        <div className="try-again-container">
            <h1>Test Results</h1>
            <div className="result-container">
                <p>
                    <b>Characters:  </b> {characters}
                </p>
                <p>
                    <b>Words:  </b> {words}
                </p>
                <p>
                    <b>Speed:  </b> {wpm} wpm
                </p>
            </div>
            <div>
                <button className="social start-again-btn">Re-Try</button>
                <button onClick={() => { window.open("https://www.facebook.com/sharer/sharer.php?u=CheckItOut", "facebook-share-dialog", "width=800, height=600") }} className="social share-btn">Share</button>
                <button onClick={() => { window.open("https://www.twitter.com/intent/tweet?text=CheckItOut", "Twitter", "width=800, height=600") }} className="social tweet-btn">Tweet</button>
            </div>
        </div>
    );
}

export default TryAgain