import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import axios from 'axios';

function TaxiForm({ dispatch, startAddress, endAddress, name, phone, email, passengers, direction, comments, error, errorMessage, loading, invalidFields }) {

  
  const handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    dispatch({ type: 'validate' });
    if (!error) {
      dispatch({ type: 'loading' })
      // console.log('name', name)
      // console.log('phone', phone)   
      // console.log('email', email)
      // console.log('passengers', passengers)
      // console.log('direction', direction)
      // console.log('comments', comments)
      setTimeout(() => {
        dispatch({ type: 'success' })
        console.log('yooooo')
      }, 3000);
    }
  }

  return (
    <>
      <Form onSubmit={(e) => handleFormSubmit(e)}>
        <FormGroup>
          <Label for="exampleEmail">Name:</Label>
          <Input 
            type="text" 
            name="name" 
            id="form-name" 
            placeholder="name" 
            bsSize="sm" 
            onChange={(e) => dispatch({
              type: 'input',
              name: 'name',
              value: e.target.value,
            })} 
            value={name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleNumber">Phone:</Label>
          <Input 
            type="text" 
            name="phone" 
            id="exampleNumber" 
            placeholder="phone" 
            bsSize="sm" 
            onChange={(e) => dispatch({
              type: 'input',
              name: 'phone',
              value: e.target.value,
            })}
            value={phone}
          />
        </FormGroup>

        {/* <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleDate">Date</Label>
              <Input type="date" name="date" id="form-date" placeholder="date placeholder" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleTime">Time</Label>
              <Input type="time" name="time" id="form-time" placeholder="time placeholder" />
          </FormGroup>
        </Col>
        </Row> */}

        <FormGroup form>
          <Label for="exampleEmail">Email:</Label>
          <Input 
            type="email" 
            name="email" 
            id="form-email" 
            placeholder="email" 
            bsSize="sm" 
            onChange={(e) => dispatch({
              type: 'input',
              name: 'email',
              value: e.target.value,
            })}
            value={email}
          />
        </FormGroup>

        <Row form>
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
        </Row> 

        <FormGroup>
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
        </FormGroup>

        {/* <FormGroup>
          <Label for="exampleCheckbox">Payment:</Label>
          <div>
            <CustomInput inline checked type="radio" id="cash" name="payment" label="Cash" />
            <CustomInput inline type="radio" id="card" name="payment" label="Card" />
          </div>
        </FormGroup> */}


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

        <Button className="mt-3 mb-5 px-5" color="warning">Submit</Button>
      </Form>
    </>
  );
}

export default TaxiForm;