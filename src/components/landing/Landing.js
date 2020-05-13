import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'

const Landing = (props) => {
  return (
    <Container>
      {/* <Jumbotron className='landing'>
        <div className='landing-header'>
          <h1 className="display-4 text-warning">Welcome to Cerritos Yellow Cab!</h1>
          <hr className="my-2" />
          <p className="lead">Our professional, rigorously trained drivers will accomodate your needs.</p>
          <p>Use our online system to book a taxi and get rate right away</p>
        </div>
        <Button color="warning">
          <Link to="/book" style={{ textDecoration: 'none', color: 'black' }}>Book a Taxi</Link>
        </Button>
      </Jumbotron> */}
      <Jumbotron className='landing'>
        <div className='landing-header'>
          <h1 className="display-4 text-white text-uppercase">Coastal <span className='landing-yellow'>Yellow</span> Cabs</h1>
          <hr className="my-2" />
          <h2 className="text-white lead">Our professional, rigorously trained drivers will accomodate your needs.</h2>
          <p className="text-white">Use our online system to book a taxi and get rate right away</p>
        </div>
        <Link className="btn btn-lg landing-button" to="/book" style={{ textDecoration: 'none', color: 'black' }}>Book a Taxi</Link>
        <Link className="btn btn-lg ml-3 landing-button" to="/book" style={{ textDecoration: 'none', color: 'black' }}>Get An Estimate</Link>
      </Jumbotron>
    </Container>
  );
};

export default Landing;