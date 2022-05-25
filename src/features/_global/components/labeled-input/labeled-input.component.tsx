import React from 'react';

import * as Styled from './labeled-input.styles';

interface LabeledInputProps {
  id: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (name: string, value: string) => void;
  dataTestId?: string | null;
  required?: boolean;
}

export default function LabeledInput({
  id,
  type,
  name,
  placeholder,
  handleChange,
  value,
  dataTestId = null,
  required = false,
}: LabeledInputProps) {
  return (
    <Styled.LabeledInputWrapper>
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
    </Styled.LabeledInputWrapper>
  );
}
