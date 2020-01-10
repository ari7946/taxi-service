import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'

const Landing = (props) => {
  return (
    <Container>
      <Jumbotron>
        <h1 className="display-4">Welcome to Cerritos Yellow Cab!</h1>
        <hr className="my-2" />
        <p className="lead">Our professional, rigorously trained drivers will accomodate your needs.</p>
        <p>Use our online system to book a taxi and get rate right away</p>
          <Button color="warning">
            <Link to="/book" style={{ textDecoration: 'none', color: 'black' }}>Book a Taxi</Link>
          </Button>
      </Jumbotron>
    </Container>
  );
};

export default Landing;