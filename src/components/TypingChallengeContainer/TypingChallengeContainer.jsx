import React from 'react'
import './TypingChallengeContainer.css'

const TypingChallengeContainer = ({ words, characters, wpm }) => {
    return (
        <div className="typing-challenge-container">
            {/* Details Section */}
            <div className="details-container">
                {/* Words Typed */}
                <p> 1 </p>
                {/* Characters Typed */}
                <p>2</p>
                {/* Speed */}
                <p>3</p>
            </div>
            {/* Challenge (Typing workspace) */}
            <div className="typewriter-container">
                realchallenge
            </div>
        </div>
    );
}
export default TypingChallengeContainer;