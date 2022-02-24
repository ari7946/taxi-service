import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  .address-heading-start {
    color: var(--color-yellow);
    font-weight: bold;
  }

  .address-heading-end {
    color: var(--color-flat-orange);
    font-weight: bold;
  }

  .heading {
    color: #fff;
    margin-bottom: 0;
    font-size: 1.7rem;

    @media (max-width: 1200px) {
      font-size: 1.5rem;
    }

    @media (max-width: 500px) {
      font-size: 1.2rem;
    }
  }
`;
