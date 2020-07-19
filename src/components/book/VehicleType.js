import React from 'react';
import { FormGroup, ButtonGroup, Row, Container, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faShuttleVan } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { setInput } from '../../redux/book/book.actions';

const VehicleType = ({ setInput, vehicle }) => {
  return (
    <FormGroup>
      <Container>
        <Row>
          <div className="mx-auto vehicle-type">
            <ButtonGroup>
              <Button
                className={`
                  ${vehicle === 'sedan' ? 'text-yellow border-warning' : 'border-light text-green-light'}
                  mr-4
                  bg-green-dark
                `}
                value="sedan"
                onClick={() => setInput({name: 'vehicle', value:'sedan'})}
              >
                <FontAwesomeIcon className="fa-lg mr-2" icon={faCar} />
                <span className="vehicle-type-text mr-2">SEDAN</span>
                $2.95/mi <br />
                1-4 Passengers
              </Button>

              <Button
                className={`
                  ${vehicle === 'van' ? 'text-yellow border-warning' : 'border-light text-green-light'}
                  bg-green-dark
                  border-warning
                `}
                value="van"
                onClick={() => setInput({ name: 'vehicle', value: 'van' })}
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

const mapStateToProps = state => {
  const { vehicle } = state.book;
  return { vehicle };
}

const mapDispatchToProps = dispatch => ({
  setInput: (options) => dispatch(setInput(options)),
})

export default connect(mapStateToProps, mapDispatchToProps)(VehicleType);