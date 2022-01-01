import styled from 'styled-components'

export const BookAddressContainer = styled.div` 

  & {
    margin-top: 2rem;
  }
  
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
    margin-bottom: 0.8rem !important;
    margin-top: 0 !important;
    padding-top: 0 !important;
    background-color: var(--color-primary-dark) !important;
    color: var(--color-grey-light-2);
  }

  .book-address p {
    font-family: var(--font-monospaced-bold);
  }

  .address-heading-starting {
    color: var(--color-yellow);
    font-weight: bold !important;
  }

  .address-heading-destination {
    color: var(--color-flat-orange);
    font-weight: bold !important;
  }

  @media (max-width: 1100px) {
    .instructions {
      font-weight: 300 !important;
      font-size: 20px;
    }
  }

  @media (max-width: 1200px) {
    .book-address {
      margin-bottom: 0.2rem;
      padding-top: 0 0 !important;
      background-color: var(--color-green-dark) !important;
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
`