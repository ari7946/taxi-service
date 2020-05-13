import React, { useState } from 'react';
import { FormGroup, Label, Button, CustomInput, Row, Col, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faShuttleVan } from '@fortawesome/free-solid-svg-icons'

function VehicleType(props) {
  const { dispatch } = props;
  const { vehicle } = props.state;

  return (
    <FormGroup>
      <Container>
        <Row>
          <div className="mx-auto">
            <CustomInput
              className={`
                ${vehicle === 'sedan' ? 'text-warning' : null}
              mr-4
              `}
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
              <FontAwesomeIcon className="fa-lg mr-2" icon={faCar} />
              Sedan $2.95 / mile <br />
              1 - 4 Passengers
            </CustomInput>

            <CustomInput
              className={`
                ${vehicle === 'van' ? 'text-warning' : null}
              `}
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
              <FontAwesomeIcon className="fa-lg mr-2" icon={faShuttleVan} />
              Van $3.95 / mile<br />
              1 - 7 Passengers
            </CustomInput>
          </div>
        </Row>
      </Container>
    </FormGroup>
  )
}

export default VehicleType;