/* eslint-disable react/display-name */
import React from 'react';
import * as Styled from './button.styles';

interface ButtonProps {
  children: any;
  className?: string;
  href?: string;
  name?: string;
  primary?: boolean | undefined | null;
  secondary?: boolean | undefined | null;
  type?: 'button' | 'submit' | 'reset';
  width?: string;
  padding?: string;
  handleClick?: (event: any) => any;
  as?: string;
  disabled?: boolean;
}

const Button = React.forwardRef(
  (
    {
      children,
      name,
      href = '',
      className = '',
      primary = null,
      secondary = null,
      type = 'button',
      width = '100%',
      handleClick = undefined,
      padding = '',
      as,
      disabled = false,
    }: ButtonProps,
    ref
  ) => {
    return (
      <Styled.ButtonWrapper
        type={type}
        name={name}
        width={width}
        padding={padding}
        primary={primary}
        secondary={secondary}
        className={className}
        onClick={handleClick}
        href={as === 'a' ? href : undefined}
        ref={ref}
        disabled={disabled}
        as={as}>
        {children}
      </Styled.ButtonWrapper>
    );
  }
);

export default Button;
