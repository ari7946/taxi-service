import styled from 'styled-components'

export const BookContainer = styled.section` 
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  grid-template-areas:
    "map-header" 
    "map"
    "addresses"
    "trip-info-main"
    "vehicle-type"
    "estimate"
    "taxi-form";
  
  @media (min-width: 800px) {
    grid-column-gap: 5%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "map-header map-header map-header ." 
      "map map vehicle-type vehicle-type"
      "addresses addresses estimate estimate" 
      "trip-info-main trip-info-main taxi-form taxi-form";
  }

  @media (min-width: 1200px) {
    grid-column-gap: 5%;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      "map-header map-header map-header . ." 
      "map map map vehicle-type vehicle-type"
      "addresses addresses estimate estimate estimate" 
      "trip-info-main trip-info-main taxi-form taxi-form taxi-form";
  }

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
  align-self: center;
`

export const Estimate = styled.div`
  grid-area: estimate;
  @media (min-width: 1200px) {
    align-self: center;
  }
`

export const TaxiForm = styled.div`
  grid-area: taxi-form;
`
