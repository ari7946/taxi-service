import styled from 'styled-components';

export const BookTripInfoMainContainer = styled.div`
  h2 {
    color: white;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.2rem;
    border-bottom: 1px solid #fff;
    padding-bottom: 0.3rem;
  }

  .trip-info-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .trip-info-item {
      margin-bottom: 2.4rem;
      background-color: var(--color-primary-dark);
      color: var(--color-grey-light-2);
      text-align: center;
    }

    .trip-info-item-value {
      font-family: var(--font-monospaced-bold);
      font-size: 1rem;
      padding: 0;
      margin: 0;
      margin-top: 1rem;
    }

    .trip-info-item-heading {
      color: var(--color-green-light);
      font-weight: bold;
      font-size: 1.6rem;
    }
  }

  @media (max-width: 600px) {
    & {
      width: 97%;
    }
  }
`;
