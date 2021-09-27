import styled from 'styled-components'

export const MapContainer = styled.div` 
  & {
    margin-top: .5rem;
    border: 1px solid var(--color-grey-light-2);
    max-height: 40vh;
    width: 100%;
    width: auto;
    height: 60vh;
    border-radius: 5px;

    @media (max-width: 600px) {
      width: 100%;
      height: 30vh;
      margin: 0 auto;
    }
  }
`