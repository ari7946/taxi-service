import styled from 'styled-components'

export const BookTripInfoMainContainer = styled.div`
  & {
    margin: 3rem 0 2rem 0;
  }

  .trip-info-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .trip-info-item {
      margin-bottom: 2.4rem;
      background-color: var(--color-green-dark) !important;
      color: var(--color-grey-light-2);
      text-align: center;
    }

    .trip-info-item-value {
      font-family: var(--font-monospaced-bold);
    }

    .trip-info-item-heading {
      color: var(--color-green-light);
      font-weight: bold !important;
    }
  }

  .trip-info-button {
    width: 100%;
    display: block;
    padding: .3rem;
    margin: 0 auto;
    background-color: var(--color-yellow);
    text-align: center;
    border-radius: 3px;

    @media (max-width: 600px) {
      & {
        width: 97%;
      }
    }
  }
`