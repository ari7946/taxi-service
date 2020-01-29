import React from 'react';
import { FormGroup, Label, CustomInput, Row, Col, Container } from 'reactstrap';

function VehicleType(props) {
  const { dispatch } = props;
  const { vehicle } = props.state;

  return (
    <Container>
    <FormGroup>
      <Label for="exampleCheckbox">Vehicle:</Label>
      <Row>
        <Col>
          <CustomInput
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
            SEDAN
          </CustomInput>
        </Col>

        <Col>
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
            VAN
          </CustomInput>
        </Col>
      </Row>
    </FormGroup>
    </Container>
  )
}

export default VehicleType;