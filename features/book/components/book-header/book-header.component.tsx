import React from 'react';
import { useSelector } from 'react-redux';
import ReactTextTransition, { presets } from 'react-text-transition';

import {
  selectStartAddress,
  selectEndAddress,
  selectStartAddressAndEndAddressAreValid,
  selectAreAddressesAndVehicleValid,
  selectVehicle
} from '../../redux/book.selectors';

import * as Styled from './book-header.styles';

interface HeaderProps {
  sectionName: 'map' | 'vehicle' | 'form';
}

const Header = ({ sectionName }: HeaderProps) => {
  const [showText, setShowText] = React.useState(false);

  const startAddress: string = useSelector(selectStartAddress);
  const endAddress: string = useSelector(selectEndAddress);
  const startAddressAndEndAddressAreValid: boolean = useSelector(
    selectStartAddressAndEndAddressAreValid
  );
  const areAddressesAndVehicleValid: boolean = useSelector(selectAreAddressesAndVehicleValid);
  const vehicle: string = useSelector(selectVehicle);

  const isSectionMap = sectionName === 'map';
  const isSectionVehicle = sectionName === 'vehicle';
  const isSectionForm = sectionName === 'form';

  React.useEffect(() => {
    const timer = setTimeout(() => setShowText(!showText), 500);

    return () => clearTimeout(timer);
  }, []);

  const startHeading = (
    <span className="address-heading-start">
      {'Starting Point'.split('').map((letter, i) => (
        <ReactTextTransition
          key={i}
          text={letter}
          style={
            letter === ' ' && {
              margin: '0 5px'
            }
          }
          delay={i * 40}
          springConfig={presets.molasses}
          inline
          noOverflow
        />
      ))}
    </span>
  );
  const destinationHeading = (
    <span className="address-heading-end">
      {showText &&
        'Destination'.split('').map((letter, i) => (
          <ReactTextTransition
            key={i}
            text={letter}
            style={
              letter === ' ' && {
                margin: '0 5px'
              }
            }
            delay={i * 60}
            springConfig={presets.molasses}
            inline
            noOverflow
          />
        ))}
    </span>
  );

  return (
    <Styled.HeaderWrapper data-testid="mapheader-container">
      {/* Map Section */}
      {!startAddress && !endAddress && isSectionMap && (
        <h2 data-testid="startAddress-and-endAddress-invalid" className="heading">
          Please Select {startHeading} <br />
          and {destinationHeading}
        </h2>
      )}

      {!startAddress && endAddress && isSectionMap && (
        <h2 data-testid="startAddress-invalid" className="heading">
          Please Select {startHeading}
        </h2>
      )}

      {startAddress && !endAddress && isSectionMap && (
        <h2 data-testid="endAddress-invalid" className="heading">
          Please Select {destinationHeading}
        </h2>
      )}

      {/* Vehicle Section */}
      {startAddressAndEndAddressAreValid && isSectionVehicle && !vehicle && showText && (
        <h2 className="heading">
          {'Please Select a Vehicle'.split('').map((letter, i) => (
            <ReactTextTransition
              key={i}
              text={letter}
              style={
                letter === ' ' && {
                  margin: '0 5px'
                }
              }
              delay={i * 40}
              springConfig={presets.molasses}
              inline
              noOverflow
            />
          ))}
        </h2>
      )}
      {/* Form Section */}
      {areAddressesAndVehicleValid && isSectionForm && (
        <h2 className="heading">
          {'Book a Taxi Below'.split('').map((letter, i) => (
            <ReactTextTransition
              key={i}
              text={letter}
              style={
                letter === ' ' && {
                  margin: '0 5px'
                }
              }
              delay={i * 60}
              springConfig={presets.molasses}
              inline
              noOverflow
            />
          ))}
        </h2>
      )}
    </Styled.HeaderWrapper>
  );
};

export default Header;
