import React from 'react'
import './Landing.css'
import flash from './../../assets/flash.jpg'
import Typewriter from 'typewriter-effect'

const Landing = () => {
    return (
        <div className="landing-container">
            <div data-aos="fade-left" className="landing-left">
                <h1 className="landing-header">Can You Type...</h1>
                <div className="typewriter-component">
                    <Typewriter options={{
                        strings: ['Fast?', 'Correct?', 'Quick?'],
                        autoStart: true,
                        loop: true,
                    }} />
                </div>

            </div>

            <div className="landing-right">
                <img
                    data-aos="fade-right"
                    className="flash-image"
                    src={flash}
                    alt="hero">

                </img>
            </div>
        </div>
    )
}

export default Landing;