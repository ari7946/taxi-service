import styled from 'styled-components';
import { Button } from '../../../_global/components';

export const TripInfoModalWrapper = styled.div`
  position: relative;
`;

export const ButtonWrapper = styled(Button)`
  position: fixed;
  top: -10px;
  right: -3px;
  color: red;
`;

export const Heading = styled.h4`
  display: inline-block;
  margin-block: 0.8rem;
`;
