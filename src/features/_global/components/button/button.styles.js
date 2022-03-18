import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
  border-radius: 3px;
  width: 100%;
  padding: 0.3rem;
  margin-top: 0.5rem;
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
`;
