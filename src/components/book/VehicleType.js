import React, { useState } from 'react';
import { FormGroup, ButtonGroup, Row, Container, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faShuttleVan } from '@fortawesome/free-solid-svg-icons';
import { useBookApi } from './BookApi';

function VehicleType(props) {
  const { state, setInput } = useBookApi();

  return (
    <FormGroup>
      <Container>
        <Row>
          <div className="mx-auto vehicle-type">
            <ButtonGroup>
              <Button
                className={`
                  ${state.vehicle === 'sedan' ? 'text-yellow border-warning' : 'border-light text-green-light'}
                  mr-4
                  bg-green-dark
                `}
                value="sedan"
                onClick={() => setInput('input', 'vehicle', 'sedan' )}
              >
                <FontAwesomeIcon className="fa-lg mr-2" icon={faCar} />
                <span className="vehicle-type-text mr-2">SEDAN</span>
                $2.95/mi <br />
                1-4 Passengers
              </Button>

              <Button
                className={`
                  ${state.vehicle === 'van' ? 'text-yellow border-warning' : 'border-light text-green-light'}
                  bg-green-dark
                  border-warning
                `}
                onClick={(e) => setInput('input', 'vehicle', 'van')}
              >
                <FontAwesomeIcon className="fa-lg mr-2" icon={faShuttleVan} />
                <span className="vehicle-type-text mr-2">VAN</span>
                $3.95/mi<br />
                1-7 Passengers
              </Button>
            </ButtonGroup>
          </div>
        </Row>
      </Container>
    </FormGroup>
  )
}

export default VehicleType;