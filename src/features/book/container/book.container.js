import React, { Suspense } from 'react';
import TaxiForm from '../components/book-form/book-form.component';
import Loading from '../components/book-loading/book-loading.component';
import MapHeader from '../components/book-map-header/book-map-header.component';
import Addresses from '../components/book-addresses/book-addresses.component';
import Estimate from '../components/book-estimate/book-estimate.component';
import VehicleType from '../components/book-vehicle-type/book-vehicle-type.component';
import TripInfoMain from '../components/book-trip-info-main/book-trip-info-main.component';
import { BookContainer as Book } from './book.styles';

const Map = React.lazy(() => import('../components/book-map/book-map.component'));

const BookContainer = function() {

  return (
    <Book>
      <MapHeader />
      <div className="main-content">
        <div className="aside">
          <Suspense fallback={<Loading />} >
            <Map />
          </Suspense>
          <Addresses />
          <TripInfoMain />
        </div>

        <div className="main">
          <VehicleType />
          <Estimate />
          <TaxiForm />
        </div>
      </div>
    </Book>
  )
} 

export { BookContainer };
