import styled, { css } from 'styled-components';

export const IndicatorWrapper = styled.div`
  border: 5px solid lightgray;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  padding: 1rem;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isActive }) => isActive && css`
    border: 5px solid var(--color-yellow);
  `}

  ${({ sectionName }) => sectionName === 'form' && css`
    margin-bottom: .8rem;
  `}

`