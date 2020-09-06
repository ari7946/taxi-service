import React from 'react';
import './landing.styles.css';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const Landing = (props) => {
  return (
    <Container fluid>
      <div className='landing'>
        <div className='landing-header'>
          <h1 className="text-white text-uppercase landing-title display-3">Coastal <span className='text-yellow'>Yellow</span> Cabs</h1>
          <h2 className="text-white lead landing-subtitle lead mt-3">Our professional, rigorously trained drivers <br />will accomodate your needs.</h2>
          <p className="text-white mt-5 lead landing-message">Use our online system to book a taxi and get rate right away.</p>

          <div className="landing-buttons">
            <Link className="btn btn-lg bg-yellow" to="/book" style={{ textDecoration: 'none', color: 'black' }}>Book a Taxi</Link>
            <Link className="btn ml-3 btn-lg bg-yellow" to="/book" style={{ textDecoration: 'none', color: 'black' }}>Get An Estimate</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Landing;