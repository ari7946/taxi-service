import React from 'react';
import * as Styled from './book-indicator.styles';

const Indicator = function ({ num }: { num: number }) {
  return <Styled.IndicatorWrapper>{num}</Styled.IndicatorWrapper>;
};

export default Indicator;
