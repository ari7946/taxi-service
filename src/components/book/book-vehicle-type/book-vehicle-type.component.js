import React from 'react';
import { 
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody, Col, Row
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faShuttleVan } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { setInput } from '../../../redux/book/book.actions';

import './book-vehicle-type.styles.css';
import van from '../../../assets/van10.png';
import sedan from '../../../assets/sedan10.png';

import { createStructuredSelector } from 'reselect';
import { selectVehicle } from '../../../redux/book/book.selectors';

const VehicleType = ({ setInput, vehicle }) => {
  return (
    <div className="vehicle-type">
      <Row>
        <Col xs="6">
          <Card 
            className={`
              ${vehicle === 'sedan' ? 'text-yellow border-warning' : 'border-light text-green-light'}
              bg-green-dark
              vehicle-type-card
            `}
            value="sedan"
            onClick={() => setInput({name: 'vehicle', value:'sedan'})}
          >   
            <CardImg 
              className={`
                vehicle-img
                ${vehicle === 'van' && 'vehicle-img-opacity'}
              `}
              top 
              width="100%" 
              src={sedan} 
              alt="Card image cap" 
            />
            <CardBody>
              <CardTitle>SEDAN</CardTitle>
              <CardText>
                <ul className="vehicle-card-text">
                  <li>$2.95 / mile </li>
                  <li>1-4 Passengers</li>
                </ul>
              </CardText>
              <Button 
                className={`
                  ${vehicle === 'sedan' ? 'text-dark bg-yellow border-warning' : 'border-light bg-green-light text-dark'}
                  w-100
                `}
                onClick={() => setInput({name: 'vehicle', value:'sedan'})}
              >SEDAN</Button>
            </CardBody>
          </Card>
        </Col>

        <Col xs="6">
          <Card 
            className={`
              ${vehicle === 'van' ? 'text-yellow border-warning' : 'border-light text-green-light'}
              bg-green-dark
              vehicle-type-card
            `}
            value="van"
            onClick={() => setInput({ name: 'vehicle', value: 'van' })}
          >
            <CardImg 
              className={`
                vehicle-img
                ${vehicle === 'sedan' && 'vehicle-img-opacity'}
              `}
              top 
              width="100%" 
              src={van} 
              alt="Card image cap" 
            />
            <CardBody>
              <CardTitle>VAN</CardTitle>
              <CardText>
                <ul className="vehicle-card-text">
                  <li>$3.95 / mile </li>
                  <li>1-7 Passengers</li>
                </ul>
              </CardText>
              <Button 
                className={`
                  ${vehicle === 'van' ? 'text-dark bg-yellow border-warning' : 'border-light bg-green-light text-dark'}
                  w-100
                `}
                onClick={() => setInput({ name: 'vehicle', value: 'van' })}
              >VAN</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  vehicle: selectVehicle,
})

const mapDispatchToProps = dispatch => ({
  setInput: (options) => dispatch(setInput(options)),
})

export default connect(mapStateToProps, mapDispatchToProps)(VehicleType);