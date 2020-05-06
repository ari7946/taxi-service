import React from 'react';
import { Col, Row, Button, ButtonGroup, Form, FormGroup, Label, Input, CustomInput, Spinner, ListGroupItemHeading, ListGroupItem, ListGroup, Badge } from 'reactstrap';
import TripInfoButton from '../TripInfo';
import axios from 'axios';

function TaxiForm(props) {
  const { startAddress, endAddress, distance, vehicle, price, status, name, email, comments, phone, passengers, direction, loading, submitted, valid, error, errorMessage, invalidFields, date, time, points } = props.state;
  const { dispatch } = props;

  React.useEffect(() => {
    if (submitted && valid) {
      processForm()
    } else if (submitted && !valid) {
      dispatch({ type: 'error', errorMessage: 'One or more fields are invalid' })
    }
  }, [submitted, valid])

  const handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    dispatch({ type: 'submit' })
  }

  const processForm = async () => {
    const body = { distance, startAddress, endAddress, price, name, comments, phone, passengers, email, direction, date, time, vehicle, status }
    try {
      const res = await axios.post(`${process.env.REACT_APP_TRIPS}/api/trips`, body)
      if (res) {
        dispatch({ type: 'success' })
      }
    } catch (error) {
      dispatch({ type: 'error', errorMessage: error });
    }
  }

  return (
    <div className=''>
      <ListGroupItem>
        <ListGroupItemHeading className="mb-3"> <Badge color="warning">Reserve Taxi</Badge></ListGroupItemHeading>
        <Form onSubmit={(e) => handleFormSubmit(e)}>
          {/* NAME */}
          <FormGroup>
            <Label for="exampleEmail">Name:</Label>
            <Input
              type="text"
              name="name"
              id="form-name"
              placeholder="name"
              bsSize="sm"
              {...!name
                ? { ...invalidFields.length && invalidFields.includes('name') ? { invalid: true } : null }
                : { ...name && (name && name.length > 2) ? { valid: true } : null }
              }
              onChange={(e) => dispatch({
                type: 'input',
                name: 'name',
                value: e.target.value,
              })}
              value={name}
            />
          </FormGroup>

          {/*  PHONE */}
          <FormGroup>
            <Label for="exampleNumber">Phone:</Label>
            <Input
              type="text"
              name="phone"
              id="exampleNumber"
              placeholder="###-###-####"
              bsSize="sm"
              {...!phone
                ? { ...invalidFields.length && invalidFields.includes('phone') ? { invalid: true } : null }
                : { ...phone && (phone && phone.length >= 7) ? { valid: true } : null }
              }
              onChange={(e) => dispatch({
                type: 'input',
                name: 'phone',
                value: e.target.value,
              })}
              value={phone}
            />
          </FormGroup>

          {/*  EMAIL */}
          <FormGroup form>
            <Label for="exampleEmail">Email:</Label>
            <Input
              type="email"
              name="email"
              id="form-email"
              placeholder="email"
              bsSize="sm"
              {...!email
                ? { ...invalidFields.length && invalidFields.includes('email') ? { invalid: true } : null }
                : { ...email && (email && email.length >= 5) ? { valid: true } : null }
              }
              onChange={(e) => dispatch({
                type: 'input',
                name: 'email',
                value: e.target.value,
              })}
              value={email}
            />
          </FormGroup>

          {/* PASSENGERS */}
          {/* <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleSelect">Passengers:</Label>
              <Input 
                type="select" 
                name="passengers" 
                id="form-occupants" 
                bsSize="sm" 
                onChange={(e) => dispatch({
                  type: 'input',
                  name: 'passengers',
                  value: e.target.value,
                })}
                value={passengers}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9 or more</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>  */}

          {/* DATE */}
          <FormGroup>
            <Label for="exampleDate">Date</Label>
            <Input
              type="date"
              name="date"
              placeholder="date"
              bsSize="sm"
              {...!date
                ? { ...invalidFields.length && invalidFields.includes('date') ? { invalid: true } : null }
                : { ...date && (date && date.length >= 6) ? { valid: true } : null }
              }
              onChange={(e) => dispatch({
                type: 'input',
                name: 'date',
                value: e.target.value,
              })}
              value={date}
            />
          </FormGroup>

          {/* TIME */}
          <FormGroup>
            <Label for="exampleTime">Time</Label>
            <Input
              type="time"
              name="time"
              placeholder="time"
              bsSize="sm"
              {...!time
                ? { ...invalidFields.length && invalidFields.includes('time') ? { invalid: true } : null }
                : { ...time && (time && time.length >= 4) ? { valid: true } : null }
              }
              onChange={(e) => dispatch({
                type: 'input',
                name: 'time',
                value: e.target.value,
              })}
              value={time}
            />
          </FormGroup>

          {/* DIRECTION */}
          {/* <FormGroup>
          <Label for="exampleCheckbox">Direction:</Label>
          <div>
            <CustomInput 
              inline checked 
              type="radio" 
              id="one-way" 
              name="direction"
              value="oneWay" 
              label="oneWay" 
              onChange={(e) => dispatch({
                type: 'input',
                name: 'direction',
                value: e.target.value,
              })}
              checked={direction === 'oneWay'} 
            />
            <CustomInput 
              inline 
              type="radio" 
              id="two-way" 
              name="direction" 
              value="twoWay" 
              label="twoWay"
              onChange={(e) => dispatch({
                type: 'input',
                name: 'direction',
                value: e.target.value,
              })}
              checked={direction === 'twoWay'} 
            />
          </div>
        </FormGroup> */}

          {/* COMMENTS */}
          <FormGroup>
            <Label for="exampleText">Comments:</Label>
            <Input
              type="textarea"
              name="comments"
              id="form-comments"
              placeholder="luggage, pets, wheelchair, ect"
              onChange={(e) => dispatch({
                type: 'input',
                name: 'comments',
                value: e.target.value,
              })}
              value={comments}
            />
          </FormGroup>

          {/* REQUIRED FIELDS */}
          {invalidFields.length > 0 ? (
            <p className="text-danger mb-0">Required fields: < br />
              {invalidFields.map(field => {
                let lastField = field === invalidFields[invalidFields.length - 1] ? true : false;
                let secondToLast = field === invalidFields[invalidFields.length - 2] ? true : false;
                if (field === 'startAddress') {
                  field = 'Starting Point'
                } else if (field === 'endAddress') {
                  field = 'Destination'
                } else if (field === 'price') {
                  field = 'Price'
                } else if (field === 'name') {
                  field = 'Name'
                } else if (field === 'comments') {
                  field = 'Comments'
                } else if (field === 'phone') {
                  field = 'Phone'
                } else if (field === 'email') {
                  field = "Email"
                } else if (field === 'date') {
                  field = 'Date'
                } else if (field === 'time') {
                  field = 'Time'
                }
                return (
                  <span>
                    {field}{!lastField
                      ? invalidFields.length === 2 ? null : ', '
                      : null}
                    {secondToLast
                      ? invalidFields.length === 2 ? ' and ' : 'and '
                      : null}
                  </span>
                )
              })}
            </p>
          ) : null}

          {/* SUBMIT BUTTON */}
          <ButtonGroup className="mt-3 mb-5">
            <Button className="px-5 mr-3" color="warning">
              {!loading && !submitted && (
                <span>Submit</span>
              )}
              {loading && submitted && (
                <>
                  <Spinner className="mr-2" size="sm" color="secondary" />
                  <span>Processing...</span>
                </>
              )}
            </Button>

            {startAddress && endAddress && <TripInfoButton {...props} />}
          </ButtonGroup>
        </Form>

      </ListGroupItem>
    </div>
  );
}

export default TaxiForm;