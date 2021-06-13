import React from 'react';
import Landing from '../Landing/Landing.js';
import Nav from '../Nav/Nav.js'
import './App.css';
import Footer from '../Footer/Footer.js'
import ChallengeSection from './ChallengeSection/ChallengeSection.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* nav section */}
        <Nav />
        {/* landing section */}
        <Landing />
        {/* challenge section */}
        <ChallengeSection />
        {/* FOoter */}
        <Footer />
      </div>
    );
  }

}

export default App;
