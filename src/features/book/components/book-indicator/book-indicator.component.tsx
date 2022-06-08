import React from 'react';
import * as Styled from './book-indicator.styles';

interface IndicatorProps {
  num: number;
  isActive: boolean;
  sectionName: 'map' | 'form' | 'vehicle';
}

const Indicator = function ({ num, isActive, sectionName }: IndicatorProps) {
  return (
    <Styled.IndicatorWrapper isActive={isActive} sectionName={sectionName}>
      {num}
    </Styled.IndicatorWrapper>
  );
};

export default Indicator;
