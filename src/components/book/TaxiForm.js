import React, { Fragment } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Label, Input, Spinner, ListGroupItem, Alert } from 'reactstrap';
import TripInfoButton from './TripInfo';
import { connect } from 'react-redux';
import { setInput, submitForm, submitError, submitSuccess } from '../../redux/book/book.actions';
import axios from 'axios';

const TaxiForm = ({ 
  // action creators
  submitForm, submitError, submitSuccess, setInput, 
  // form fields
  name, email, comments, phone, date, time, 
  // other 
  direction, loading, submitted, valid, invalidFields, alertSuccess, passengers,
  startAddress, endAddress, username, distance, vehicle, price, status, 
}) => {
  const processForm = async () => {
    const formFields = { name, comments, phone, email, date, time }
    const body = { 
      distance, startAddress, endAddress, price, passengers, direction, vehicle, status, username, 
      ...formFields 
    }
    try {
      const res = await axios.post(`${process.env.REACT_APP_TRIPS}/api/trips`, body)
      if (res) {
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

  return (
    <div className=''>
      <ListGroupItem className="book-form">
        <Form onSubmit={(e) => handleSubmitForm(e)}>
          {/* NAME */}
          <FormGroup>
            <Label for="exampleEmail">Name:</Label>
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
            <Label for="exampleNumber">Phone:</Label>
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
            <Label for="exampleEmail">Email:</Label>
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
            <Label for="exampleDate">Date</Label>
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
            <Label for="exampleTime">Time</Label>
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
            <Label for="exampleText">Comments:</Label>
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
                      ? invalidFields.length === 2 ? null : ', '
                      : null}
                    {secondToLast
                      ? invalidFields.length === 2 ? ' and ' : 'and '
                      : null}
                  </Fragment>
                )
              })}
            </p>
          )}

          {/* ALERT USER IF SUBMIT FORM WAS SUCCESSFUL */}
          { alertSuccess && <Alert color="success">Thank you. We have booked your request for a taxi</Alert>}

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
    </div>
  );
}

const mapStateToProps = (state) => {
 const { startAddress, endAddress, distance, vehicle, price, status, 
  name, email, comments, phone, passengers, direction, 
  loading, submitted, valid, invalidFields, date, time, alertSuccess } = state.book;

 return { startAddress, endAddress, distance, vehicle, price, status, 
  name, email, comments, phone, passengers, direction, 
  loading, submitted, valid, invalidFields, date, time, alertSuccess };
}

const mapDispatchToProps = dispatch => ({
  setInput: (options) => dispatch(setInput(options)),
  submitForm: () => dispatch(submitForm()),
  submitSuccess: () => dispatch(submitSuccess()),
  submitError: (errorMessage) => dispatch(submitError(errorMessage)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TaxiForm);