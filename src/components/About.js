import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import city from '../assets/city.jpg';
import arrow from '../assets/arrow.jpg';
import licensed from '../assets/licensed.jpg';
import driver from '../assets/driver.jpg';

export default class About extends React.Component {
  render() {
    return (
      <Container>
        <Row className="about-section">
          <Col sm={6}><img className="about-img rounded mx-auto d-block" src={city} alt="city" width="200" height="200" /></Col>
          <Col className="order-first order-sm-2" sm={6}>
            <h3 className="about-heading">La Mirada My Taxi Cabs</h3>
            <p className="about-description text-justify">We are a full taxi cab company in the City of La Mirada, California, that specializes in providing better-quality taxi cab and airport shuttle service throughout all of Los Angeles County with the capacity to drop off anywhere in California. OUR EXTENSIVE SERVICE AREA INCLUDES La Mirada, Santa Fe Springs, Whittier, Norwalk, Cerritos, Bellflower, Artesia, La Palma, Buena Park, Hacienda Heights, Rowland Heights, City of Industry, La Habra, etc.</p>
          </Col>
        </Row>

        <Row className="about-section">
          <Col sm={{ size: 6, offset: 0 }}>
            <h3 className="about-heading">Our Mission And Goal</h3>
            <p className="about-description text-justify">We grant the most excellent taxi cab and airport shuttle service in a fair and honest way by drawing on the strengths of quality drivers who possess the highest level of integrity and magnificent customer service skills as well as insuring that all taxi cabs are always clean and well maintained.
OUR GOAL is to guarantee the most comfortable, secure and exceptional taxi cab experience to make certain that all our customers arrive safely, in a timely fashion manner to any destination and are fully satisfied with their taxi cab experience.</p>
          </Col>
          <Col sm={{ size: 6, offset: 0 }}><img className="about-img rounded mx-auto d-block" src={arrow} alt="city" width="200" height="200" /></Col>
        </Row>

        <Row className="about-section">
          <Col sm={{ size: 6, offset: 0 }}><img className="about-img rounded mx-auto d-block" src={licensed} alt="city" width="200" height="200" /></Col>
          <Col  className="order-first order-sm-2" sm={{ size: 6, offset: 0 }}>
            <h3 className="about-heading">Our Taxi Cabs Are Licensed</h3>
            <p className="about-description text-justify">We are subject to regular inspections to ensure that all aspects of the vehicle are properly and regularly maintained.
Our on board taxicab digital meters are calibrated by the Department of Weights and Measures to guarantee that customers are always provided the lowest rate possible.
They are also equipped with built in credit card machines which allow our customers to use their VISA, MasterCard, American Express, Discover, Diner’s, and JCB credit cards. It only takes approximately 30 second to complete your credit card transaction.
Furthermore, all My Taxi Cabs are set up with the most advance tracking GPS and digital data transfer system (mms) which allows an ideal communication between our dispatch team and My Taxi Cabs drivers.</p>
          </Col>
        </Row>

        <Row className="about-section">
          <Col sm={{ size: 6, offset: 0 }}>
            <h3 className="about-heading">La Mirada My Taxi Cabs Drivers</h3>
            <p className="about-description text-justify">Our drivers are safety and sensibility trained in order to grant better service to those with special needs.
In addition, we screen our drivers very carefully to make sure that they uphold the highest level of integrity and can provide exceptional levels of Customer Satisfaction.
Also they are all are extremely familiar with the Orange County area and can be called upon for recommendations to restaurants, bars, amusement parks, cinemas, sporting and entertainment venues.</p>
          </Col>
          <Col sm={{ size: 6, offset: 0 }}><img className="about-img rounded mx-auto d-block" src={driver} alt="city" width="200" height="200" /></Col>
        </Row>

        <Row className="about-section">
          <Col sm={{ size: 6, offset: 0 }}><img className="about-img rounded mx-auto d-block" src={city} alt="city" width="200" height="200" /></Col>
          <Col  className="order-first order-sm-2" sm={{ size: 6, offset: 0 }}>
            <h3 className="about-heading">Options</h3>
            <p className="about-description text-justify">
              <span className="font-weight-bold">Airport Taxi/Shuttle Service</span><br />
              MY TAXI CABS provides transportation to the following Southern California Airports LAX, SNA, LGB, SAN, ONT, PSP, and BUR from anywhere in Los Angeles County<br />
              <span className="font-weight-bold">Immediate Taxi Needs</span><br />
              MY TAXI CABS can accommodate your needs for immediate taxi services. Our average response time is less than 20 minutes.<br />
              <span className="font-weight-bold">Hotel Stay Transportation</span><br />
              MY TAXI CABS will arrange customers transportation needs whenever it is necessary for them to leave the Hotel.<br />
              <span className="font-weight-bold">Multiple Stops</span><br />
              MY TAXI CABS can take the customer from stop to stop at affordable mileage and wait time rates.<br />
              <span className="font-weight-bold">Taxi Cab Courier Service</span><br />
              MY TAXI CABS can pick up and hand deliver your package.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}