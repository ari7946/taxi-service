import styled from 'styled-components'

export const BookVehicleTypeContainer = styled.div` 
  .vehicle-type-card {
    border: none !important;
    cursor: pointer;
  }

  ul.vehicle-card-text {
    margin-left: 0 !important;
    padding-left: 1rem !important;
    letter-spacing: 2px;
    font-family: var(--font-monospaced);
    font-size: 18px;
  }

  .vehicle-img {
    height: 9rem;
    width: 90% !important;
    margin: 0 auto;
  }

  .vehicle-img-opacity {
    opacity: 50%;
  }

  @media (max-width: 1200px) {
    & {
      margin-bottom: 1rem;
    }

    .vehicle-type button {
      font-size: 14px;
    }
  }

  @media (max-width: 1100px) {
    & .vehicle-img {
      height: 6rem;
    }
  }

  @media (max-width: 600px) {
    & {
      margin-top: 2rem;
    }
  }

  @media (max-width: 415px) {
    & .vehicle-type-text {
      display: none;
    }
  }
`