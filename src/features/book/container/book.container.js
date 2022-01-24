/* eslint-disable import/no-unresolved */
import React, { Suspense } from 'react';
import TaxiForm from '../components/book-form/book-form.component';
import Loading from '../components/book-loading/book-loading.component';
import MapHeader from '../components/book-map-header/book-map-header.component';
import Addresses from '../components/book-addresses/book-addresses.component';
import Estimate from '../components/book-estimate/book-estimate.component';
import VehicleType from '../components/book-vehicle-type/book-vehicle-type.component';
import TripInfoMain from '../components/book-trip-info-main/book-trip-info-main.component';
import Indicator from '../components/book-indicator/book-indicator.component';

import * as Styled from './book.styles';

const Map = React.lazy(() => import('../components/book-map/book-map.component'));

const BookContainer = function() {

  return (
    <Styled.BookContainer>
      <Styled.MapHeader>
        <MapHeader />
      </Styled.MapHeader>

      <Styled.Map>
        <Indicator num={1} />
        <Suspense fallback={<Loading />} >
          <Map />
        </Suspense>
      </Styled.Map>

      <Styled.Addresses>
        <Addresses />
      </Styled.Addresses>

      <Styled.TripInfoMain>
        <TripInfoMain />
      </Styled.TripInfoMain>

      <Styled.VehicleType>
        <Indicator num={2} />
        <VehicleType />
      </Styled.VehicleType>

      <Styled.Estimate>
        <Estimate />
      </Styled.Estimate>

      <Styled.TaxiForm>
        <Indicator num={3} />
        <TaxiForm />
      </Styled.TaxiForm>
    </Styled.BookContainer>
  )
} 

export { BookContainer };
