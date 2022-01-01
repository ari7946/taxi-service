import styled from 'styled-components'

export const EstimateContainer = styled.div` 
  background-color: var(--color-primary-dark) !important;
  color: var(--color-green-light);
  border: none !important;
  font-family: var(--font-monospaced-bold);
  letter-spacing: 0.25rem;
  margin: 2rem 0;
  text-transform: uppercase;

  .estimate-info {
    margin: 0 auto;
    text-align: center;

    .fare {
      margin-left: 1rem;  
    }

    .plus-sign {
      margin-right: .8rem;
      font-size: 20px;
    }

    .fare, .drop-fee {
      margin: .4rem auto;
    }

    .price {
      color: var(--color-grey-light-2);
      border-top: solid 1px var(--color-grey-light-2);
      padding-top: .5rem;
    }
  }

  @media (max-width: 1200px) {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    font-family: var(--font-monospaced);
    letter-spacing: 0.2rem;
  }

  @media (max-width: 415px) {
    letter-spacing: 0.1rem;
  }
`