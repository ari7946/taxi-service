import styled from 'styled-components';

export const BookAddressContainer = styled.div`
  .instructions {
    font-weight: 300 !important;
    font-size: 22px;
    color: var(--color-grey-light-2);
    margin-top: 2rem;

    .register-cta {
      color: var(--color-yellow);
    }
  }

  ol li {
    margin: 0.8rem 0;
  }

  .book-address {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    margin-top: 0;
    padding-top: 0;
    color: var(--color-grey-light-2);
  }

  .book-address p {
    font-family: var(--font-monospaced-bold);
  }

  .address-heading-starting {
    color: var(--color-yellow);
    font-weight: bold;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  .address-heading-destination {
    color: var(--color-flat-orange);
    font-weight: bold;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 1100px) {
    .instructions {
      font-weight: 300 !important;
      font-size: 20px;
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 1200px) {
    .book-address {
      margin-bottom: 0.2rem;
      padding-top: 0 0 !important;
      color: var(--color-grey-light-2);
    }

    .address-heading-starting {
      color: var(--color-yellow);
      font-weight: bold !important;
    }

    .address-heading-destination {
      color: var(--color-flat-orange);
      font-weight: bold !important;
    }
  }

  @media (max-width: 600px) {
    .book-address p {
      font-family: var(--font-monospaced);
      margin: 0;
      padding: 0;
    }

    .instructions {
      font-size: 17px;
    }
  }
`;
