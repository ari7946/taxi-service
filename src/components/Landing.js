import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'

const Landing = (props) => {
  return (
    <Container fluid className='pb-5'>
      <Jumbotron className='landing'>
        <div className='landing-header'>
          <h1 className="display-4 text-white">Welcome to Cerritos <span className='text-warning'>Yellow</span> Cab!</h1>
          <hr className="my-2" />
          <p className="lead">Our professional, rigorously trained drivers will accomodate your needs.</p>
          <p>Use our online system to book a taxi and get rate right away</p>
        </div>
        <Button color="warning">
          <Link to="/book" style={{ textDecoration: 'none', color: 'black' }}>Book a Taxi</Link>
        </Button>
      </Jumbotron>
    </Container>
  );
};

export default Landing;