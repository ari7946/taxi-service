import React from 'react';
import { FormGroup, Label, CustomInput, Row, Col, Container } from 'reactstrap';

function VehicleType(props) {
  const { dispatch } = props;
  const { vehicle, distance } = props.state;

  return (
    <FormGroup>
      <Container>
        <Row>
          <div className="mx-auto">
          <CustomInput
            className="mr-4"
            inline checked
            type="radio"
            id="sedan"
            name="vehicle"
            value="sedan"
            onChange={(e) => dispatch({
              type: 'input',
              name: 'vehicle',
              value: e.target.value,
            })}
            checked={vehicle === 'sedan'}
          >
            Sedan $2.95 / Mi <br />
            1 - 4 Passengers
          </CustomInput>

          <CustomInput
            inline
            type="radio"
            id="van"
            name="vehicle"
            value="van"
            onChange={(e) => dispatch({
              type: 'input',
              name: 'vehicle',
              value: e.target.value,
            })}
            checked={vehicle === 'van'}
          >
            Van $3.95 / Mi<br />
            1 - 7 Passengers
          </CustomInput>
          <ul className="pt-3">
            <li>Distance: {distance}</li>
            <li>Rate: {vehicle === 'sedan' ? "$2.95 per mile" : '3.95 per mile'}</li>
            <li>Vehicle: {vehicle}</li>
            <li>passengers: {vehicle === 'sedan' ? '1 - 4' : '1 - 7'}</li>
          </ul>
          </div>
        </Row>
      </Container>
    </FormGroup>
  )
}

export default VehicleType;