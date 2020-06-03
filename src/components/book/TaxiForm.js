import React, { Fragment } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Label, Input, Spinner, ListGroupItemHeading, ListGroupItem, Badge, Alert } from 'reactstrap';
import TripInfoButton from './TripInfo';
import axios from 'axios';
import { useBookApi } from './BookApi';

function TaxiForm(props) {
  const { setInput, submitForm, state } = useBookApi();
  const { startAddress, endAddress, distance, vehicle, price, status, name, email, comments, phone, passengers, direction, loading, submitted, valid, invalidFields, date, time, alertSuccess } = state;

  return (
    <div className=''>
      <ListGroupItem className="book-form">
        <Form onSubmit={(e) => submitForm(e)}>
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
          {invalidFields.length > 0 && (
            <p className="text-flat-orange mb-0">Required fields: < br />
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

            {startAddress && endAddress && <TripInfoButton {...props} />}
          </ButtonGroup>
        </Form>

      </ListGroupItem>
    </div>
  );
}

export default TaxiForm;