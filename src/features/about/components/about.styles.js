import styled, { css } from 'styled-components';

export const AboutPageContainer = styled.section`
  width: 90%;
  min-height: 90vh;
  margin: 5rem auto 0 auto;
`

export const AboutSectionContainer = styled.section`
  margin: 2rem 0;
  height: auto;
  display: flex;
  width: 100%;

  img {
    display: block;
    margin: 0 auto;
  }

  .left {
    width: 75%;
  }
  .right {
    width: 75%;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    .left {
      width: 100%;
      div {
        margin-bottom: 2rem;
      }
    }
    .right {
      width: 100%;
    }
  }
`

export const AboutSectionMiddle = styled(AboutSectionContainer)`
  padding: 3rem 0;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    .left {
      width: 100%;
      div {
        margin-bottom: 0;
      }
    }
    .right {
      width: 100%;
      div {
        margin-bottom: 2rem;
      }
    }
  }
`

// heading and description
export const AboutHeading = styled.h3`
  color: var(--color-yellow);
  margin-bottom: 1rem;
`

export const AboutDescription = styled.p`
  line-height: 25px;
  font-weight: 300;
  font-size: 18px;
  color: var(--color-grey-light-2) !important;
`

// Images
const AboutImgContainerTop = css` 
  border-left: 2px solid var(--color-yellow);
`

const AboutImgContainerMiddle = css` 
  margin-top: 1rem;
  border-right: 2px solid var(--color-yellow);
`

const AboutImgContainerBottom = css` 
  border-left: 2px solid var(--color-yellow);
  padding-bottom: 1rem;
`

const getImgContainerStyles = props => {
  if (props.top) {
    return AboutImgContainerTop
  } else if (props.middle) {
    return AboutImgContainerMiddle
  } else if (props.bottom) {
    return AboutImgContainerBottom
  }
} 

export const AboutImgContainer = styled.div` 
  ${getImgContainerStyles}

  img {
    width: 10rem;
    height: 10rem;
    margin-top: 2rem;
    border: 1px solid var(--color-yellow);
    padding: 1.5rem 1.5rem;
    border-radius: 50%;
  }
`

