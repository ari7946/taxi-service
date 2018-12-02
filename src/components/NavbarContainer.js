import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Container,
} from 'reactstrap';
import brand from '../assets/cerritos-brand.jpg';
import contactus from '../assets/contact-us.jpg';
import { Link } from 'react-router-dom';


export default class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Container>
        {/* <Row>
          <Col sm={{ size: 6, offset: 0 }}>
            <img src={brand} className="my-3 brand" width="180" height="70" />
          </Col>
          <Col sm={{ size: 6, offset: 0}}>
            <img src={contactus} className="my-3 contactus" />
          </Col>
        </Row> */}

        <Navbar className="mb-4" id="navbar" color="light" light expand="md">
          <NavbarBrand className="pl-0" href="/"><img src={brand} className="brand" width="180" height="70" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto"  navbar>

              <NavItem>
                <NavLink className="pr-5" href="/">
                  <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="pr-5" href="/">
                  <Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="pr-5" href="/">
                  <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}