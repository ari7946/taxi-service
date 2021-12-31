import styled from 'styled-components'

export const BookContainer = styled.section` 
  display: grid;
  gap: 10px;
  grid-template-areas:
    "map-header"
    "map"
    "addresses"
    "trip-info-main"
    "vehicle-type"
    "estimate"
    "taxi-form";

  margin: 2rem;
  @media (max-width: 750px) {
    margin: 0 .6rem;
  }
`

export const MapHeader = styled.div`
  grid-area: map-header;
`

export const Map = styled.div`
  grid-area: map;
`

export const Addresses = styled.div`
  grid-area: addresses;
`

export const TripInfoMain = styled.div`
  grid-area: trip-info-main;
`

export const VehicleType = styled.div`
  grid-area: vehicle-type;
`

export const Estimate = styled.div`
  grid-area: estimate;
`

export const TaxiForm = styled.div`
  grid-area: taxi-form;
`

//   .main-content {
//     display: flex;
//     margin: 0 auto;
//     width: 100%;

//     .aside {
//       width: 50%;
//       padding-right: 5rem;
//       @media (max-width: 750px) {
//         width: 100%;
//         padding-right: 0;
//       }
//     }

//     .main {
//       width: 50%;
//       @media (max-width: 750px) {
//         width: 100%;
//       }
//     }

//     @media (max-width: 750px) {
//       flex-direction: column;
//     }
//   }
// `
