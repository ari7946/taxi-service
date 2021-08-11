import styled from 'styled-components'

export const MapHeaderContainer = styled.div` 
  & {
    margin-bottom: 1.5rem;
  }

  .address-heading-starting {
    color: var(--color-yellow);
    font-weight: bold;
  }

  .address-heading-destination {
    color: var(--color-flat-orange);
    font-weight: bold;
  }

  .map-heading {
    color: #fff;
    margin-bottom: 0;

    @media (max-width: 600px) {
      font-weight: 700;
      font-size: 18px;
    }
  }

`