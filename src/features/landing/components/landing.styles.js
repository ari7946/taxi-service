import styled from 'styled-components'
import img from '../assets/cab-blue2.png'

export const LandingPageContainer = styled.div` 
  & {
    height: 80vh; 
    width: 100%;
    margin: 0 1.5rem;
    position: relative;
  }

  &::before {
    background-image: url(${img}); 
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    content: "";
    position: absolute;
    top: 100px;
    bottom: 0px;
    right: -230px;
    left: 0;
    z-index: 0;
  }

  .landing-title {
    margin-top: 4rem;
    font-weight: lighter;
    font-size: 50px;
    text-transform: uppercase;
    color: #fff;

    span {
      color: var(--color-yellow);
    }
  }

  .landing-subtitle {
    font-size: 35px;
    font-weight: 200;
    color: var(--color-grey-light-2);
    margin-top: 1rem;
  }

  .landing-message {
    font-size: 25px;
    color: var(--color-grey-light-2);
    margin-top: 1.5rem;
    font-weight: 200;
  }

  .landing-buttons {
    padding-top: 2rem;
  }

  .landing-button {
    background-color: var(--color-yellow);
    position: relative;
    z-index: 2;
    margin-right: 1.5rem;
    padding: 1rem 3.5rem;
    font-size: 20px;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
  }

  .phone-cab {
    height: 9rem;
    width: 10rem;
    margin-top: 4rem;
  }

  @media (max-width: 1200px) {
    .landing-title {
      font-size: 45px;
    }

    .landing-subtitle {
      font-size: 25px;
    }

    .landing-message {
      font-size: 20px;
    }
  }

  @media (max-width: 850px) {
    .phone-cab {
      height: auto;
      width: 9rem;
      margin-top: 2rem;
    }

    .landing-title {
      margin-top: 2rem;
    }

    &::before {
      background-position: top; 
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: .5;
    }

    .landing-subtitle {
      font-size: 30px;
      font-weight: 200;
      /* width: 80%; */
    }

    .landing-message {
      font-size: 20px;
    }

    .landing-buttons {
      margin-top: .5rem;
    }
  }

  @media (max-width: 600px) {
    .landing-title {
      font-size: 2rem;
      margin-bottom: .5rem;
    }

    .landing-subtitle {
      font-size: 25px;
      font-weight: 200;
      margin-top: 2rem;
      margin-right: 1rem;
    }

    .landing-buttons {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 80%;
      font-size: 15px;
    }

    .landing-button {
      padding-top: .5rem;
      font-size: 17px;
      padding: .5rem 1rem;
      text-align: center;
    }

    .phone-cab {
      display: none;
    }
  }

  @media (max-width: 415px) {

    .landing-message {
      display: none;
    }

    .landing-title {
      font-size: 1.8rem;
      color: #fff;
      z-index: 2;
    }
  }
`
