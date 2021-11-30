import styled from 'styled-components'

export const BookVehicleTypeContainer = styled.div` 
  & {
    width: 100%;
    display: flex;
    flex: 1 1 0;
    justify-content: space-between;
  }

  .vehicle-type-card {
    border: 1px solid red;
    padding: 1rem 1rem 1rem 0;
    cursor: pointer;
    border: none;

    @media (max-width: 415px) {
      padding: 0 .4rem;
    }
  }

  .vehicle-title {
    font-size: 20px;
    margin: .9rem 0;
  }

  .vehicle-card-text {
    margin: .5rem 0;
    padding-left: 1.2rem;
    letter-spacing: 1px;
    font-family: var(--font-monospaced);
    font-size: 18px;
  }

  .vehicle-img {
    display: block;
    height: 9rem;
    padding: 1rem 1rem 1rem 0;
    width: 30rem;
    margin: 0 auto;
  }

  .vehicle-type-button {
    border-radius: 3px;
    width: 100%;
    padding: .3rem;
  }

  .vehicle-img-opacity {
    opacity: 35%;
  }

  @media (max-width: 1200px) {
    & {
      margin-bottom: 1rem;
    }

    .vehicle-type-button {
      font-size: 14px;
    }
  }

  @media (max-width: 1100px) {
    .vehicle-img {
      height: 6rem;
    }
  }

  @media (max-width: 600px) {
    & {
      margin-top: 2rem;
    }
  }

  @media (max-width: 415px) {
    .vehicle-type-text {
      display: none;
    }
  }
`