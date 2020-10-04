import React from 'react';
import './landing.styles.css';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import phoneCab from '../../assets/phone-hand.png'

const Landing = (props) => {
  return (
    <Container fluid>
      <div className='landing'>
        <div className='landing-header'>
          <h1 className="text-white text-uppercase landing-title">Coastal <span className='text-yellow'>Yellow</span> Cabs</h1>
          <h2 className="text-grey-light-2 lead landing-subtitle lead mt-3">Our professional, rigorously trained drivers will accomodate your needs.</h2>
          <p className="text-grey-light-2 mt-5 lead landing-message">Use our online system to book a taxi and get rate right away.</p>

          <div className="landing-buttons">
            <Link className="btn btn-lg bg-yellow landing-button" to="/book" style={{ textDecoration: 'none', color: 'black' }}>BOOK TAXI</Link>
            <Link className="btn ml-3 btn-lg bg-yellow landing-button" to="/book" style={{ textDecoration: 'none', color: 'black' }}>GET ESTIMATE</Link>
          </div>
          <div>
            <img className="phone-cab" src={phoneCab} alt="user holding phone displaying a cab"/>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Landing;