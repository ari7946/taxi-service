import styled, { css } from 'styled-components';
import { space, color } from 'styled-system';

export const ButtonWrapper = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  text-align: center;
  cursor: pointer;
  width: 100%;
  padding: ${(props) => props.padding || '0.5rem'};
  margin-top: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: ${(props) => props.width || '100%'};
  ${(props) =>
    props.primary &&
    css`
      background: var(--color-yellow);
    `}
  ${(props) =>
    props.secondary &&
    css`
      background: var(--color-green-light);
    `}
    @media (max-width: 1200px) {
    font-size: 14px;
  }
  ${space}
  ${color}
`;
