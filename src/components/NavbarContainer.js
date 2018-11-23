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
                <NavLink className="pr-5" href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="pr-5" href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="pr-5" href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}