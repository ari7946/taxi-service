import styled, { css } from 'styled-components';

export const AboutPageContainer = styled.div`
  padding: 1rem 1.5rem;
`

export const AboutSectionContainer = styled.div`
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
  padding-top: 2rem;
`

const AboutImgContainerMiddle = css` 
  margin-top: 1rem;
  border-right: 2px solid var(--color-yellow);

  img {
    width: 15rem;
  }
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
`

