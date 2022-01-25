import styled from 'styled-components'

export const BookTripInfoMainContainer = styled.div`
  & {
    margin: 1rem 0 2rem 0;
  }

  h2 {
    color: lightblue;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
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
    }

    .trip-info-item-heading {
      color: var(--color-green-light);
      font-weight: bold;
      font-size: 1.5rem;
    }
  }



  @media (max-width: 600px) {
    & {
      width: 97%;
    }
  }
`