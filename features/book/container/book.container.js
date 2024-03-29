/* eslint-disable import/no-unresolved */
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

import TaxiForm from '../components/book-form/book-form.component';
import { Spinner } from '../../_global/components';
import Header from '../components/book-header/book-header.component';
import Addresses from '../components/book-addresses/book-addresses.component';
import Estimate from '../components/book-estimate/book-estimate.component';
import VehicleType from '../components/book-vehicle-type/book-vehicle-type.component';
import TripInfoMain from '../components/book-trip-info-main/book-trip-info-main.component';
import Indicator from '../components/book-indicator/book-indicator.component';
import BookAlertSuccess from '../components/book-alert-success/book-alert-success.component';

import {
  selectAreAddressesAndVehicleValid,
  selectIndicatorSection,
  selectAlertSuccess,
  selectStartAddressAndEndAddressAreValid,
} from '../redux/book.selectors';

import * as Styled from './book.styles';

const Map = dynamic(() => import('../components/book-map/book-map.component'), {
  ssr: false,
  suspense: true,
});

const BookContainer = function () {
  const indicatorSection = useSelector(selectIndicatorSection);
  const areAddressesAndVehicleValid = useSelector(selectAreAddressesAndVehicleValid);
  const alertSuccess = useSelector(selectAlertSuccess);

  return (
    <Styled.BookContainer>
      <Styled.MapHeader>
        <Styled.HeaderIndicatorWrapper>
          <Indicator num={1} isActive={indicatorSection === 'map'} />
          <Header sectionName="map" />
        </Styled.HeaderIndicatorWrapper>
      </Styled.MapHeader>

      <Styled.Map>
        <Suspense fallback={<Spinner />}>
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
        <Styled.HeaderIndicatorWrapper>
          <Indicator num={2} isActive={indicatorSection === 'vehicle'} />
          <Header sectionName="vehicle" />
        </Styled.HeaderIndicatorWrapper>
        <VehicleType />
        <Estimate />
      </Styled.VehicleType>

      {areAddressesAndVehicleValid && (
        <Styled.TaxiForm>
          <Styled.HeaderIndicatorWrapper>
            <Indicator num={3} isActive={indicatorSection === 'form'} sectionName="form" />
            <Header sectionName="form" />
          </Styled.HeaderIndicatorWrapper>
          <TaxiForm />
        </Styled.TaxiForm>
      )}

      {/* ALERT USER IF SUBMIT FORM WAS SUCCESSFUL */}
      {selectStartAddressAndEndAddressAreValid && alertSuccess && (
        <Styled.AlertSuccess>
          <BookAlertSuccess />
        </Styled.AlertSuccess>
      )}
    </Styled.BookContainer>
  );
};

export { BookContainer };
