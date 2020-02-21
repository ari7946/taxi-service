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
      <Jumbotron className='landing bg-dark'>
        <div className='landing-header'>
          <h1 className="display-4 text-white">Coastal <span className='text-warning'>Yellow</span> Cabs</h1>
          <hr className="my-2" />
          <h2 className="text-white lead">Our professional, rigorously trained drivers will accomodate your needs.</h2>
          <p className="text-white">Use our online system to book a taxi and get rate right away</p>
        </div>
        <Button color="warning btn-lg">
          <Link to="/book" style={{ textDecoration: 'none', color: 'black' }}>Book a Taxi</Link>
        </Button>
        <Button className="ml-3" color="warning btn-lg">
          <Link to="/book" style={{ textDecoration: 'none', color: 'black' }}>Get An Estimate</Link>
        </Button>
      </Jumbotron>
    </Container>
  );
};

export default Landing;