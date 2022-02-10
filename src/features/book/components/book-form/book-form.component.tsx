import React, { Fragment } from 'react';
import { Button, ButtonGroup, Form, Spinner, Alert } from 'reactstrap';
import './book-form.styles.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TripInfoButton from '../book-trip-info-button/book-trip-info-button.component';
import BookFormRequiredFields from '../book-form-required-fields/book-form-required-fields';
import { FormFields } from '../../types/book.types';
import BookFormInput from '../book-form-input/book-form-input.component';

import {
  selectStartAddress,
  selectEndAddress,
  selectLoading,
  selectAlertSuccess,
} from '../../redux/book.selectors';

import { submitForm } from '../../redux/book.actions';

interface ActionCreators {
  submitForm: (obj: FormFields) => any;
}

interface ReduxProps {
  loading: boolean;
  alertSuccess: boolean;
  startAddress: string;
  endAddress: string;
}

const initialFormFields: FormFields = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  comments: '',
};

interface Action {
  type: 'SET_VALUE';
  payload: { [name: string]: string };
}

const bookFormReducer = (state: FormFields, action: Action) => {
  switch (action.type) {
    case 'SET_VALUE': {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

type TaxiFormProps = ActionCreators & ReduxProps;

const TaxiForm = function ({
  // action creators
  submitForm,
  // redux props
  loading,
  alertSuccess,
  startAddress,
  endAddress,
}: TaxiFormProps): React.ReactElement {
  const [values, dispatch] = React.useReducer(bookFormReducer, initialFormFields);

  const handleChange = (name: string, value: string) => {
    const updatedValue = { [name]: value };
    return dispatch({ type: 'SET_VALUE', payload: updatedValue });
  };

  const handleSubmitForm = (e): void => {
    e.preventDefault();
    const { name, email, comments, phone, date, time }: FormFields = values;
    submitForm({ name, email, comments, phone, date, time });
  };

  console.log('form values', values);

  return (
    <div className="book-form">
      <Form onSubmit={(e) => handleSubmitForm(e)}>
        {/* NAME */}
        <BookFormInput
          id="form-name"
          type="text"
          name="name"
          placeholder="name"
          dataTestId="form-name"
          handleChange={handleChange}
          value={values.name}
          required
        />

        {/*  PHONE */}
        <BookFormInput
          id="form-phone"
          type="phone"
          name="phone"
          placeholder="###-###-####"
          dataTestId="form-phone"
          handleChange={handleChange}
          value={values.phone}
          required
        />

        {/*  EMAIL */}
        <BookFormInput
          id="form-email"
          type="email"
          name="email"
          placeholder="email"
          dataTestId="form-email"
          handleChange={handleChange}
          value={values.email}
          required
        />

        {/* DATE */}
        <BookFormInput
          id="form-date"
          type="date"
          name="date"
          placeholder="date"
          dataTestId="form-date"
          handleChange={handleChange}
          value={values.date}
          required
        />

        {/* TIME */}
        <BookFormInput
          id="form-time"
          type="time"
          name="time"
          placeholder="time"
          dataTestId="form-time"
          handleChange={handleChange}
          value={values.time}
          required
        />

        {/* COMMENTS */}
        <BookFormInput
          id="form-comments"
          type="textarea"
          name="comments"
          placeholder="luggage, pets, wheelchair, ect"
          dataTestId="form-comments"
          handleChange={handleChange}
          value={values.comments}
        />

        {/* REQUIRED FIELDS */}
        <BookFormRequiredFields />

        {/* ALERT USER IF SUBMIT FORM WAS SUCCESSFUL */}
        {alertSuccess && (
          <Alert color="success">Thank you. We have booked your request for a taxi</Alert>
        )}

        {/* SUBMIT BUTTON */}
        <ButtonGroup className="mt-3 mb-5">
          <Button className="px-5 mr-3 book-button bg-yellow" color="warning" name="submit">
            {!loading && 'Book'}
            {loading && (
              <>
                <Spinner className="mx-2" size="sm" color="light" />
                <span className="text-dark ml-2">Processing...</span>
              </>
            )}
          </Button>

          {startAddress && endAddress && <TripInfoButton />}
        </ButtonGroup>
      </Form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  startAddress: selectStartAddress,
  endAddress: selectEndAddress,
  loading: selectLoading,
  alertSuccess: selectAlertSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: (values: FormFields) => dispatch(submitForm(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaxiForm);
