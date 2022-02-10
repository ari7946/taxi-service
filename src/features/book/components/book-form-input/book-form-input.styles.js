import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  height: 100%;
  margin-bottom: .8rem;
`

export const Label = styled.label`
  text-transform: capitalize;
  font-size: 16px;
  color: var(--color-yellow);

  .required {
    color: var(--color-gray-light-2);
    text-transform: lowercase;
    margin-left: 1rem;
    font-size: 13px;
  }
`

export const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  padding: .3rem 1rem;
  font-size: 14px;

  &:focus {
    border: 1px solid var(--color-yellow);
  }
`

export const TextArea = styled(Input)`
  min-height: 65px;
  padding: 11px 20px;
  border-radius: 4px;
  background-color: #f8f8f8;
`