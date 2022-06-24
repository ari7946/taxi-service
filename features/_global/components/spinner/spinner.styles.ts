import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    -webkit-transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.span`
  display: inline-block;
  self-align: baseline;
  width: 25px;
  height: 25px;
  border: 4px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: black;
  animation: ${spin} 0.2s ease-in-out infinite;
  -webkit-animation: ${spin} 0.4s ease-in-out infinite;
`;
