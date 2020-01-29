import React from 'react';
import { FormGroup, Label, CustomInput, Row, Col, Container } from 'reactstrap';

function VehicleType(props) {
  const { dispatch } = props;
  const { vehicle } = props.state;

  return (
    <FormGroup>
      <Container className="mx-auto">
        <Row>
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
            SEDAN<br />
            $2.95 / Mi
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
            VAN<br />
            $3.95 / Mi
          </CustomInput>
        </Row>
      </Container>
    </FormGroup>
  )
}

export default VehicleType;