import styled from 'styled-components';
import img from '../assets/cab-blue2.png';

export const LandingPageContainer = styled.section`
  & {
    height: 70vh;
    width: 95%;
    margin: 0 1.5rem;
  }

  .landing-header {
    display: flex;
    margin-top: 8rem;
    height: inherit;
    flex-direction: column;

    @media (max-width: 500px) {
      margin-top: 4rem;
    }
  }

  .landing-title {
    font-weight: lighter;
    font-size: 4.6rem;
    text-transform: uppercase;
    color: #fff;

    @media (max-width: 800px) {
      font-size: 3rem;
      margin-top: 2rem;
    }

    span {
      color: var(--color-yellow);
    }
  }

  .landing-subtitle {
    font-size: 35px;
    font-weight: 200;
    color: var(--color-grey-light-2);
    margin-top: 1rem;

    @media (max-width: 500px) {
      font-size: 30px;
    }
  }

  .landing-message {
    font-size: 25px;
    color: var(--color-grey-light-2);
    margin-top: 5rem;
    font-weight: lighter;

    @media (max-width: 500px) {
      font-size: 20px;
    }
  }

  .landing-buttons {
    padding-top: 2rem;
    display: flex;
    gap: 1rem;
    wrap: nowrap;
  }

  .landing-button a {
    background-color: var(--color-yellow);
    z-index: 2;
    margin-right: 1.3rem;
    padding: 0.8rem 3rem;
    font-size: 18px;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }

    @media (max-width: 500px) {
      font-size: 15px;
      padding: 0.8rem 1rem;
    }
  }

  .bottom-filler {
    position: absolute;
    background-color: #222831;
    border-radius: 95% 0 0 0;
    width: 50%;
    height: 35rem;
    bottom: 0;
    right: 0;
    border-top: 20px solid var(--color-yellow);
    @media (max-width: 600px) {
      display: none;
    }
  }
`;
