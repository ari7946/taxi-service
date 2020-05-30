import React from 'react';
import './landingStyle.css';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

const Landing = (props) => {
  return (
    <Container fluid>
      <div className='landing'>
        <div className='landing-header'>
          <h1 className="display-4 text-white text-uppercase">Coastal <span className='landing-yellow'>Yellow</span> Cabs</h1>
          <h2 className="text-white lead">Our professional, rigorously trained drivers will accomodate your needs.</h2>
          <p className="text-white">Use our online system to book a taxi and get rate right away</p>
          <Link className="btn btn-lg landing-button" to="/book" style={{ textDecoration: 'none', color: 'black' }}>Book a Taxi</Link>
          <Link className="btn btn-lg ml-3 landing-button" to="/book" style={{ textDecoration: 'none', color: 'black' }}>Get An Estimate</Link>
        </div>
      </div>
    </Container>
  );
};

export default Landing;