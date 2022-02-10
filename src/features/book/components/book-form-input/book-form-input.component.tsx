import React from 'react';

import * as Styled from './book-form-input.styles';

interface BookFormInputProps {
  id: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (name: string, value: string) => void;
  dataTestId?: string;
  required?: boolean;
}

export default function BookFormInput({
  id,
  type,
  name,
  placeholder,
  dataTestId = null,
  handleChange,
  value,
  required = false,
}: BookFormInputProps) {
  return (
    <Styled.InputContainer>
      <Styled.Label htmlFor={id}>
        {name}:{required && <span className="required">*required</span>}
      </Styled.Label>

      <br />

      {type === 'textarea' ? (
        <Styled.TextArea
          key="text-area"
          as="textarea"
          data-testid={dataTestId}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={(event) => handleChange(event.target.name, event.target.value)}
          value={value}
        />
      ) : (
        <Styled.Input
          key="input"
          data-testid={dataTestId}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={(event) => handleChange(event.target.name, event.target.value)}
          value={value}
        />
      )}
    </Styled.InputContainer>
  );
}
