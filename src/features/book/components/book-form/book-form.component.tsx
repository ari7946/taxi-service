import React, { Fragment } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Label, Input, Spinner, Alert } from 'reactstrap';
import './book-form.styles.css';

import TripInfoButton from '../book-trip-info-button/book-trip-info-button.component';
import BookFormRequiredFields from '../book-form-required-fields/book-form-required-fields';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectStartAddress, selectEndAddress, selectLoading, selectAlertSuccess 
} from '../../redux/book.selectors';

import { submitForm  } from '../../redux/book.actions';
import { bindActionCreators } from 'redux';

interface ActionCreators {
  submitForm: (obj: FormFields) => any,
}

interface ReduxProps {
  loading: boolean,
  alertSuccess: boolean,
  startAddress: string,
  endAddress: string
}

interface FormFields {
  name: string,
  email: string,
  phone: string,
  date: string,
  time: string,
  comments?: string
}

const initialFormFields: FormFields = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  comments: '',
}

interface Action {
  type: "SET_VALUE";
  payload: { [name: string]: string };
}

const bookFormReducer = (state: FormFields, action: Action) => {
  switch(action.type) {
    case "SET_VALUE": {
      return { ...state, ...action.payload}
    }
    default: {
      return state
    }
  }
}

type TaxiFormProps = ActionCreators & ReduxProps;

const TaxiForm = ({ 
  // action creators
  submitForm,
  // redux props 
  loading, 
  alertSuccess,
  startAddress, 
  endAddress,
} : TaxiFormProps) : React.ReactElement => {
  const [values, dispatch] = React.useReducer(bookFormReducer, initialFormFields);

  const handleChange = (name: string, value: string) => {
    const updatedValue = { [name]: value };
    return dispatch({ type: "SET_VALUE", payload: updatedValue });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { name, email, comments, phone, date, time } = values;
    submitForm({ name, email, comments, phone, date, time });
  }

  return (
    <div className="book-form">
      <Form onSubmit={(e) => handleSubmitForm(e)}>

        {/* NAME */}
        <FormGroup>
          <Label for="exampleEmail">Name: <span className="text-flat-orange small ml-2">required</span></Label>
          <Input
            type="text"
            name="name"
            placeholder="name"
            bsSize="sm"
            onChange={(event) => 
              handleChange(event.target.name, event.target.value)}
            value={values.name}
          />
        </FormGroup>

        {/*  PHONE */}
        <FormGroup>
          <Label for="exampleNumber">Phone: <span className="text-flat-orange small ml-2">required</span></Label>
          <Input
            type="text"
            name="phone"
            id="exampleNumber"
            placeholder="###-###-####"
            bsSize="sm"
            onChange={(event) => 
              handleChange(event.target.name, event.target.value)}
            value={values.phone}
          />
        </FormGroup>

        {/*  EMAIL */}
        <FormGroup>
          <Label for="exampleEmail">Email: <span className="text-flat-orange small ml-2">required</span></Label>
          <Input
            type="email"
            name="email"
            id="form-email"
            placeholder="email"
            bsSize="sm"
            onChange={(event) => 
              handleChange(event.target.name, event.target.value)}
            value={values.email}
          />
        </FormGroup>

        {/* DATE */}
        <FormGroup>
          <Label for="exampleDate">Date: <span className="text-flat-orange small ml-2">required</span></Label>
          <Input
            type="date"
            name="date"
            placeholder="date"
            bsSize="sm"
            onChange={(event) => 
              handleChange(event.target.name, event.target.value)}
            value={values.date}
          />
        </FormGroup>

        {/* TIME */}
        <FormGroup>
          <Label for="exampleTime">Time: <span className="text-flat-orange small ml-2">required</span></Label>
          <Input
            type="time"
            name="time"
            placeholder="time"
            bsSize="sm"
            onChange={(event) => 
              handleChange(event.target.name, event.target.value)}
            value={values.time}
          />
        </FormGroup>

        {/* COMMENTS */}
        <FormGroup>
          <Label for="exampleText">Comments: </Label>
          <Input
            type="textarea"
            name="comments"
            id="form-comments"
            placeholder="luggage, pets, wheelchair, ect"
            onChange={(event) => 
              handleChange(event.target.name, event.target.value)}
            value={values.comments}
          />
        </FormGroup>

        {/* REQUIRED FIELDS */}
        <BookFormRequiredFields />

        {/* ALERT USER IF SUBMIT FORM WAS SUCCESSFUL */}
        { alertSuccess && <Alert color="success">Thank you. We have booked your request for a taxi</Alert>}

        {/* SUBMIT BUTTON */}
        <ButtonGroup className="mt-3 mb-5">
          <Button className="px-5 mr-3 book-button bg-yellow" color="warning">
            Book
            {loading && (
              <Fragment>
                <Spinner className="mx-2" size="sm" color="light" />
                <span className="text-white">processing...</span>
              </Fragment>
            )}
          </Button>

          {startAddress && endAddress && <TripInfoButton />}
        </ButtonGroup>
      </Form>

    </div>
  );
}

const mapStateToProps = createStructuredSelector({ 
  startAddress: selectStartAddress, 
  endAddress: selectEndAddress, 
  loading: selectLoading,  
  alertSuccess: selectAlertSuccess,
})

const mapDispatchToProps = dispatch => ({
  submitForm: (values: FormFields) => dispatch(submitForm(values)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TaxiForm);