import styled from 'styled-components';

export const EstimateContainer = styled.div`
  background-color: var(--color-primary-dark) !important;
  color: var(--color-green-light);
  border: none !important;
  font-family: var(--font-monospaced-bold);
  letter-spacing: 0.25rem;
  margin: 2rem 0 0 0;
  text-transform: uppercase;

  .estimate-info {
    margin: 0 auto;
    text-align: center;

    .fare {
      margin-left: 1rem;
      padding-left: 1rem;
    }

    .plus-sign {
      margin-right: 0.8rem;
      font-size: 20px;
    }

    .fare,
    .drop-fee {
      margin: 0.7rem auto;
      font-size: 1.3rem;
    }

    .price {
      color: var(--color-grey-light-2);
      border-top: solid 1px var(--color-grey-light-2);
      padding-top: 0.5rem;
      font-size: 1.7rem;
    }
  }
`;
