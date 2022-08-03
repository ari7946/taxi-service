import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TripInfoButton from '../book-trip-info-button/book-trip-info-button.component';
import BookFormRequiredFields from '../book-form-required-fields/book-form-required-fields';
import { FormFields } from '../../types/book.types';
import LabeledInput from '../../../_global/components/labeled-input/labeled-input.component';
import Button from '../../../_global/components/button/button.component';

import {
  selectStartAddress,
  selectEndAddress,
  selectLoading,
  selectAlertSuccess,
} from '../../redux/book.selectors';

import { submitForm } from '../../redux/book.actions';
import * as Styled from './book-form.styles';

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

  return (
    <Styled.BookFormWrapper onSubmit={(e) => handleSubmitForm(e)}>
      {/* NAME */}
      <LabeledInput
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
      <LabeledInput
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
      <LabeledInput
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
      <LabeledInput
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
      <LabeledInput
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
      <LabeledInput
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

      {/* SUBMIT BUTTON */}
      <Styled.ButtonWrapper>
        <Button type="submit" name="submit" width="8rem" primary disabled={loading ? true : false}>
          {!loading && 'BOOK'}
          {loading && (
            <span>
              <span className="text-dark ml-2">Processing...</span>
            </span>
          )}
        </Button>

        {startAddress && endAddress && <TripInfoButton />}
      </Styled.ButtonWrapper>
    </Styled.BookFormWrapper>
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
