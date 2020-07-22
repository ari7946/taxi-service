import React, { Fragment, useState } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Label, Input, Spinner, ListGroupItem, Alert } from 'reactstrap';
import './book.styles.css';
import { NavLink } from 'react-router-dom';

import TripInfoButton from './book-trip-info.component';
import { connect } from 'react-redux';
import axios from 'axios';
import { createStructuredSelector } from 'reselect';

import { selectStartAddress, selectEndAddress, selectDistance, selectVehicle, 
  selectPrice, selectStatus, selectName, selectEmail, selectComments, 
  selectPhone, selectPassengers, selectDirection, selectLoading, selectSubmitted, 
  selectValid, selectInvalidFields, selectDate, selectTime, selectAlertSuccess 
} from '../../redux/book/book.selectors';
// import action creators
import { setInput, submitForm, submitError, submitSuccess } from '../../redux/book/book.actions';

const adminMessage = <p className="text-white">
  <NavLink exact to="/admin" className="bg-light mt-2 px-2">Click here</NavLink> to log in as a "Guest Admin" to see the admin panel. (No login/registeration required as a guest)<br /> <br />
</p>


const TaxiForm = ({ 
  // action creators
  submitForm, submitError, submitSuccess, setInput, 
  // form fields
  name, email, comments, phone, date, time, 
  // other 
  direction, loading, submitted, valid, invalidFields, alertSuccess, passengers,
  startAddress, endAddress, username, distance, vehicle, price, status, 
}) => {
  const [demo, setDemo] = useState(true);
  const processForm = async () => {
    const formFields = { name, comments, phone, email, date, time }
    const body = { 
      distance, startAddress, endAddress, price, passengers, direction, vehicle, status, username, 
      ...formFields 
    }
    try {
      const response = await axios.post(`${process.env.REACT_APP_TRIPS}/api/trips`, body)
      if (response) {
        submitSuccess()
      }
    } catch (error) {
      submitError({ errorMessage: error });
    }
  }

  if (submitted && valid) {
    processForm()
  } else if (submitted && !valid) {
    submitError({ errorMessage: 'One or more fields are invalid' })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    submitForm();
  }
  console.log('demo', demo)
  return (
    <Fragment>
      <ListGroupItem className="book-form">
        <Form onSubmit={(e) => handleSubmitForm(e)}>
          {/* DEMO */}
          <Label className="mr-3 text-white">DEMO MODE:</Label>
          <FormGroup check inline>
            <Label check check>
              <Input 
                type="radio" 
                name="demo"
                defaultChecked={demo}
                onClick={() => setDemo(true)}            
              />
              <span className="text-white">Yes</span>
            </Label>
          </FormGroup>
          <FormGroup check inline className="mb-2 ml-2">
            <Label check>
              <Input 
                type="radio" 
                name="demo" 
                onClick={() => setDemo(false)} 
              />
              <span className="text-white">No</span>
            </Label> 
          </FormGroup>
          <p className="text-white small">NOTE: DEMO MODE makes the form below optional.</p>

          {/* NAME */}
          <FormGroup>
            <Label for="exampleEmail">Name: <span className="text-flat-orange small ml-2">{demo && 'optional'}</span></Label>
            <Input
              type="text"
              name="name"
              id="form-name"
              placeholder="name"
              bsSize="sm"
              onChange={(e) => setInput({
                type: 'input',
                name: 'name',
                value: e.target.value,
              })}
              value={name}
            />
          </FormGroup>

          {/*  PHONE */}
          <FormGroup>
            <Label for="exampleNumber">Phone: <span className="text-flat-orange small ml-2">{demo && 'optional'}</span></Label>
            <Input
              type="text"
              name="phone"
              id="exampleNumber"
              placeholder="###-###-####"
              bsSize="sm"
              onChange={(e) => setInput({
                type: 'input',
                name: 'phone',
                value: e.target.value,
              })}
              value={phone}
            />
          </FormGroup>

          {/*  EMAIL */}
          <FormGroup form>
            <Label for="exampleEmail">Email: <span className="text-flat-orange small ml-2">{demo && 'optional'}</span></Label>
            <Input
              type="email"
              name="email"
              id="form-email"
              placeholder="email"
              bsSize="sm"
              onChange={(e) => setInput({
                type: 'input',
                name: 'email',
                value: e.target.value,
              })}
              value={email}
            />
          </FormGroup>

          {/* DATE */}
          <FormGroup>
            <Label for="exampleDate">Date: <span className="text-flat-orange small ml-2">{demo && 'optional'}</span></Label>
            <Input
              type="date"
              name="date"
              placeholder="date"
              bsSize="sm"
              onChange={(e) => setInput({
                type: 'input',
                name: 'date',
                value: e.target.value,
              })}
              value={date}
            />
          </FormGroup>

          {/* TIME */}
          <FormGroup>
            <Label for="exampleTime">Time: <span className="text-flat-orange small ml-2">{demo && 'optional'}</span></Label>
            <Input
              type="time"
              name="time"
              placeholder="time"
              bsSize="sm"
              onChange={(e) => setInput({
                type: 'input',
                name: 'time',
                value: e.target.value,
              })}
              value={time}
            />
          </FormGroup>

          {/* COMMENTS */}
          <FormGroup>
            <Label for="exampleText">Comments: <span className="text-flat-orange small ml-2">optional</span></Label>
            <Input
              type="textarea"
              name="comments"
              id="form-comments"
              placeholder="luggage, pets, wheelchair, ect"
              onChange={(e) => setInput({
                type: 'input',
                name: 'comments',
                value: e.target.value,
              })}
              value={comments}
            />
          </FormGroup>

          {/* REQUIRED FIELDS */}
          {!!invalidFields && (invalidFields.length > 0) && (
            <p className="text-flat-orange mb-0">Required fields:  < br />
              {invalidFields.map(field => {
                let lastField = field === invalidFields[invalidFields.length - 1] ? true : false;
                let secondToLast = field === invalidFields[invalidFields.length - 2] ? true : false;
                return (
                  <Fragment>
                    {field}{!lastField
                      ? invalidFields.length === 2 
                        ? null : ', ' : null}
                    {secondToLast
                      ? invalidFields.length === 2 
                        ? ' and ' : 'and ' : null}
                  </Fragment>
                )
              })}
            </p>
          )}

          {/* ALERT USER IF SUBMIT FORM WAS SUCCESSFUL */}
          { alertSuccess && <Alert color="success">Thank you. We have booked your request for a taxi</Alert>}

          {/* DISPLAY MESSAGE IF USER SETS DEMO MODE TO TRUE AND IF THEY PROVIDE BOTH startAddress and endAddress */}
          {(demo && startAddress && endAddress) && adminMessage}

          {/* SUBMIT BUTTON */}
          <ButtonGroup className="mt-3 mb-5">
            <Button className="px-5 mr-3 book-button bg-yellow" color="warning">
              {!loading && !submitted && (
                <Fragment>Book</Fragment>
              )}
              {loading && submitted && (
                <Fragment>
                  <Spinner className="mr-2" size="sm" color="white" />
                  <span className="text-green-light"></span>
                </Fragment>
              )}
            </Button>

            {startAddress && endAddress && <TripInfoButton />}
          </ButtonGroup>
        </Form>

      </ListGroupItem>
    </Fragment>
  );
}

const mapStateToProps = createStructuredSelector({ 
  startAddress: selectStartAddress, 
  endAddress: selectEndAddress, 
  distance: selectDistance, 
  vehicle: selectVehicle, 
  price: selectPrice, 
  status: selectStatus, 
  name: selectName, 
  email: selectEmail, 
  comments: selectComments, 
  phone: selectPhone, 
  passengers: selectPassengers, 
  direction: selectDirection, 
  loading: selectLoading, 
  submitted: selectSubmitted, 
  valid: selectValid, 
  invalidFields: selectInvalidFields, 
  date: selectDate, 
  time: selectTime, 
  alertSuccess: selectAlertSuccess,
})

const mapDispatchToProps = dispatch => ({
  submitError: (errorMessage) => dispatch(submitError(errorMessage)),
  setInput: (options) => dispatch(setInput(options)),
  submitSuccess: () => dispatch(submitSuccess()),
  submitForm: () => dispatch(submitForm()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TaxiForm);