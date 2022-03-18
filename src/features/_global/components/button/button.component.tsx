import React from 'react';
import * as Styled from './button.styles';

interface ButtonProps {
  children: any;
  primary?: string;
  secondary?: string;
  type?: 'button' | 'submit' | 'reset';
  name?: string;
  width?: string;
}

export default function Button({ children, primary, secondary, type, name, width }: ButtonProps) {
  return (
    <Styled.ButtonWrapper
      type={type}
      name={name}
      width={width}
      primary={primary && primary}
      secondary={secondary && secondary}>
      {children}
    </Styled.ButtonWrapper>
  );
}
