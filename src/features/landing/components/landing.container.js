import React from 'react';

import { LandingPageContainer } from './landing.styles'
import { Link } from 'react-router-dom';
import phoneCab from '../assets/phone-hand.png'

const LandingContainer = () => {
  return (
    <LandingPageContainer>
      <div className='landing-header'>
        <h1 className="landing-title">Coastal <span>Yellow</span> Cabs</h1>
        <h2 className="landing-subtitle">Our professional, rigorously trained drivers will accomodate your needs.</h2>
        <p className="landing-message">Use our online system to book a taxi and get rate right away.</p>

        <div className="landing-buttons">
          <Link className="landing-button" to="/book" style={{ textDecoration: 'none', color: 'black' }}>BOOK TAXI</Link>
          <Link className="landing-button" to="/book" style={{ textDecoration: 'none', color: 'black' }}>GET ESTIMATE</Link>
        </div>
        <div>
          <img className="phone-cab" src={phoneCab} alt="user holding phone displaying a cab"/>
        </div>
      </div>
    </LandingPageContainer>
  );
};

export default LandingContainer;
