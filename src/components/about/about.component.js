import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './about.styles.css';
import city from '../../assets/phone-hand.png';
import license from '../../assets/license-driver.png';
import driver from '../../assets/driver-cab.png';
import cabFile from '../../assets/cab-file2.png';

export default class About extends React.Component {
  render() {
    return (
      <Container fluid className="about">
        <Row className="about-section about-section-top">
          <Col sm={6}>
            <div className="about-img-container-top">
              <img className="about-img rounded mx-auto d-block" src={city} alt="city" width="150" height="150" />
            </div>
            </Col>
          <Col className="order-first order-sm-2" sm={6}>
            <h3 className="about-heading">Coastal yellow Cab</h3>
            <p className="about-description text-justify">Coastal Yellow Cab offers efficient, reliable LA taxi service to meet the transportation needs of residents, visitors and our corporate clients. Our extensive service area includes Coastal, Artesia, Norwalk, Santa Fe Springs, La Mirada, La Palma, Downey, Pico Rivera, Bellflower, Whittier, Hawaiian Gardens, Etc.</p>
          </Col>
        </Row>

        <Row className="about-section about-section-middle">
          <Col sm={{ size: 6, offset: 0 }}>
            <h3 className="about-heading">Our Taxi Cabs Are Licensed</h3>
            <p className="about-description">At Coastal Yellow Cab, we employ only professional trained drivers. Our drivers are licensed and required to successfully complete a formal training program, which includes training in defensive driving and safety. In addition, we perform background checks and random drug testing to ensure your safety and give our customers the highest level of confidence in our reliable taxi service.</p>
          </Col>
          <Col sm={{ size: 6, offset: 0 }}>
            <div className="about-img-container-middle">
              <img className="about-img rounded mx-auto d-block" src={license} alt="city" width="150" height="150" />
            </div>
          </Col>
        </Row>

        <Row className="about-section about-section-bottom">
          <Col sm={{ size: 6, offset: 0 }}>
          <div className="about-img-container-bottom">
            <img className="about-img rounded mx-auto d-block" src={cabFile} alt="city" width="150" height="150" />
          </div>
          </Col>
          <Col  className="order-first order-sm-2" sm={{ size: 6, offset: 0 }}>
            <h3 className="about-heading">Services</h3>
            <p className="about-description text-justify">We offer a full range of taxi services. Call us for dependable service for airport shuttle, sightseeing tours, or for transportation to medical visits, social visits or shopping. We offer corporate accounts, which provide businesses with a convenient method for managing their corporate transportation needs. Please contact us to learn more about starting a corporate account for airport shuttle service, driving your clients or other taxi services.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}