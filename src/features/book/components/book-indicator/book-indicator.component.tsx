import React from 'react';
import * as Styled from './book-indicator.styles';

import { selectStartAddressAndEndAddressAreValid } from '../../redux/book.selectors';

const Indicator = function ({ num, isActive }: { num: number; isActive: boolean }) {
  return <Styled.IndicatorWrapper isActive={isActive}>{num}</Styled.IndicatorWrapper>;
};

export default Indicator;
