import React from 'react';
import './landingStyle.css';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import losangeles from '../../assets/los-angeles.jpg';

const Landing = (props) => {
  return (
    <Container fluid>
      <Jumbotron className='landing'>
        {/* <img className="background-image" src={losangeles} /> */}
        <div className='landing-header'>
          <h1 className="display-4 text-white text-uppercase">Coastal <span className='landing-yellow'>Yellow</span> Cabs</h1>
          <hr className="my-2" />
          <h2 className="text-white lead">Our professional, rigorously trained drivers will accomodate your needs.</h2>
          <p className="text-white">Use our online system to book a taxi and get rate right away</p>
          <Link className="btn btn-lg landing-button" to="/book" style={{ textDecoration: 'none', color: 'black' }}>Book a Taxi</Link>
          <Link className="btn btn-lg ml-3 landing-button" to="/book" style={{ textDecoration: 'none', color: 'black' }}>Get An Estimate</Link>
        </div>
      </Jumbotron>
    </Container>
  );
};

export default Landing;