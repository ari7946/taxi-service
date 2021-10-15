import styled from 'styled-components'

export const BookContainer = styled.div`
  & {
    margin: 2rem;
    @media (max-width: 750px) {
      margin: 0 auto;
    }
  }

  .main-content {
    display: flex;
    margin: 0 auto;
    width: 100%;

    .aside {
      width: 50%;
      padding-right: 5rem;
      @media (max-width: 750px) {
        width: 100%;
        padding-right: 0;
      }
    }

    .main {
      width: 50%;
      @media (max-width: 750px) {
        width: 100%;
      }
    }

    @media (max-width: 750px) {
      flex-direction: column;
    }
  }
`
