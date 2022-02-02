import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectStartAddress,
  selectEndAddress,
  selectStartAddressAndEndAddressAreValid,
  selectAreAddressesAndVehicleValid,
  selectVehicle
} from '../../redux/book.selectors';

import { MapHeaderContainer } from './book-map-header.styles';

const MapHeader = ({ sectionName }: { sectionName: string }): React.ReactElement | null => {
  const startAddress: string = useSelector(selectStartAddress);
  const endAddress: string = useSelector(selectEndAddress);
  const startAddressAndEndAddressAreValid: boolean = useSelector(
    selectStartAddressAndEndAddressAreValid
  );
  const areAddressesAndVehicleValid: boolean = useSelector(selectAreAddressesAndVehicleValid);
  const vehicle: string = useSelector(selectVehicle);

  const isSectionMap = sectionName === 'header';
  const isSectionVehicle = sectionName === 'vehicle';
  const isSectionForm = sectionName === 'form';

  const startHeading = <span className="address-heading-starting">Starting Point</span>;
  const destinationHeading = <span className="address-heading-destination">Destination</span>;

  return (
    <MapHeaderContainer data-testid="mapheader-container">
      {!startAddress && !endAddress && isSectionMap && (
        <h4 data-testid="startAddress-and-endAddress-invalid" className="heading">
          Please Select {startHeading} <br />
          and {destinationHeading}
        </h4>
      )}

      {!startAddress && endAddress && isSectionMap && (
        <h4 data-testid="startAddress-invalid" className="heading">
          Please Select {startHeading}
        </h4>
      )}

      {startAddress && !endAddress && isSectionMap && (
        <h4 data-testid="endAddress-invalid" className="heading">
          Please Select {destinationHeading}
        </h4>
      )}

      {startAddressAndEndAddressAreValid && isSectionVehicle && !vehicle && (
        <h4 className="heading">Please Choose A Vehicle</h4>
      )}

      {areAddressesAndVehicleValid && isSectionForm && (
        <h4 className="heading">Book A Taxi Below</h4>
      )}
    </MapHeaderContainer>
  );
};

export default MapHeader;
