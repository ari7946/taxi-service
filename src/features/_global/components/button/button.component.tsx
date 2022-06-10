import React from 'react';
import * as Styled from './button.styles';

interface ButtonProps {
  children: any;
  className?: string;
  name?: string;
  primary?: boolean | undefined | null;
  secondary?: boolean | undefined | null;
  type?: 'button' | 'submit' | 'reset';
  width?: string;
  handleClick?: (event: any) => any;
}

function Button({
  children,
  name,
  className = '',
  primary = null,
  secondary = null,
  type = 'button',
  width = '100%',
  handleClick = null,
}: ButtonProps) {
  return (
    <Styled.ButtonWrapper
      type={type}
      name={name}
      width={width}
      primary={primary}
      secondary={secondary}
      className={className}
      onClick={handleClick}>
      {children}
    </Styled.ButtonWrapper>
  );
}

export default Button;
