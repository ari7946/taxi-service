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
import brand from '../assets/my-taxi-cab-brand.jpg';
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
        <Row>
          <Col sm={{ size: 6, offset: 0 }}>
            <img src={brand} className="my-3 brand" width="270" height="88" />
          </Col>
          <Col sm={{ size: 6, offset: 0}}>
            <img src={contactus} className="my-3 contactus" />
          </Col>
        </Row>
        <Navbar id="navbar" color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>

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