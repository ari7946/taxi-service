import React from 'react';
import { 
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody, Col, Row
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faShuttleVan } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { setInput } from '../../redux/book/book.actions';
import './book.styles.css';
import vanYellow from '../../assets/van-yellow2.png';
import sedanYellow from '../../assets/sedan-yellow.png';
import vanWhite from '../../assets/van-white2.png';
import sedanWhite from '../../assets/sedan-white.png';

import { createStructuredSelector } from 'reselect';
import { selectVehicle } from '../../redux/book/book.selectors';

const VehicleType = ({ setInput, vehicle }) => {
  return (
    // <FormGroup>
    //   <Container>
    //     <Row>
    //       <div className="mx-auto vehicle-type">
    //         <ButtonGroup>
    //           <Button
              //   className={`
              //     ${vehicle === 'sedan' ? 'text-yellow border-warning' : 'border-light text-green-light'}
              //     mr-4
              //     bg-green-dark
              //   `}
              //   value="sedan"
              //   onClick={() => setInput({name: 'vehicle', value:'sedan'})}
              // >
    //             <FontAwesomeIcon className="fa-lg mr-2" icon={faCar} />
    //             <span className="vehicle-type-text mr-2">SEDAN</span>
    //             $2.95/mi <br />
    //             1-4 Passengers
    //           </Button>

    //           <Button
                // className={`
                //   ${vehicle === 'van' ? 'text-yellow border-warning' : 'border-light text-green-light'}
                //   bg-green-dark
                //   border-warning
                // `}
                // value="van"
                // onClick={() => setInput({ name: 'vehicle', value: 'van' })}
    //           >
    //             <FontAwesomeIcon className="fa-lg mr-2" icon={faShuttleVan} />
    //             <span className="vehicle-type-text mr-2">VAN</span>
    //             $3.95/mi<br />
    //             1-7 Passengers
    //           </Button>
    //         </ButtonGroup>
    //       </div>
    //     </Row>
    //   </Container>
    // </FormGroup>
    <div>
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
          <CardImg className="vehicle-img" top width="100%" src={vehicle === 'sedan' ? sedanYellow : sedanWhite} alt="Card image cap" />
          <CardBody>
            <CardTitle>SEDAN</CardTitle>
            {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
            <CardText>
              <ul className="vehicle-card-text">
                <li>$2.95 / mile </li>
                <li>1-4 Passengers</li>
              </ul>
            </CardText>
            <Button 
              className={`
                ${vehicle === 'sedan' ? 'text-dark bg-yellow border-warning' : 'border-light text-green-light'}
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
          <CardImg className="vehicle-img" top width="100%" src={vehicle === "van" ? vanYellow : vanWhite} alt="Card image cap" />
          <CardBody>
            <CardTitle>VAN</CardTitle>
            {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
            <CardText>
              <ul className="vehicle-card-text">
                <li>$3.95 / mile </li>
                <li>1-7 Passengers</li>
              </ul>
            </CardText>
            <Button 
              className={`
                ${vehicle === 'van' ? 'text-dark bg-yellow border-warning' : 'border-light text-green-light'}
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