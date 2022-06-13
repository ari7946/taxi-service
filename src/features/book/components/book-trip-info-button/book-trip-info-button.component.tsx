import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Button } from '../../../_global/components';
import Modal from 'react-modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

import * as Styled from './book-trip-info-button.styles';

import { createStructuredSelector } from 'reselect';
import {
  selectDistance,
  selectStartAddress,
  selectEndAddress,
  selectValidEstimate,
  selectVehicle,
  selectDropFee,
} from '../../redux/book.selectors';

Modal.setAppElement(document.getElementById('root'));

const customStyles = {
  content: {
    top: '65%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0,0,0,.9)',
  },
};

const TripInfoModal = ({
  distance,
  startAddress,
  endAddress,
  estimate,
  vehicle,
}: {
  distance: number;
  startAddress: string;
  endAddress: string;
  estimate: number;
  vehicle: string;
}): React.ReactElement => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!modalIsOpen);

  return (
    <Styled.TripInfoModalWrapper>
      <Button handleClick={toggle} width="9rem" secondary>
        View Info
      </Button>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        shouldCloseOnOverlayClick
        preventScroll={true}
        contentLabel="Trip Details">
        <Styled.ButtonWrapper width="5rem" handleClick={() => toggle()}>
          <FontAwesomeIcon size="lg" icon={faWindowClose} />
        </Styled.ButtonWrapper>

        <Styled.Heading className="text-green-light">Starting Point: </Styled.Heading>
        <p className="text-grey-light-2">{startAddress}</p>

        <Styled.Heading className="text-green-light">Destination: </Styled.Heading>
        <p className="text-grey-light-2">{endAddress}</p>

        <Styled.Heading className="text-green-light">Distance: </Styled.Heading>
        <p className="text-grey-light-2">{distance} miles</p>

        <Styled.Heading className="text-green-light">Rate: </Styled.Heading>
        <p className="text-grey-light-2">
          {vehicle === 'sedan' ? '$2.95 per mile' : '$3.95 per mile'}
        </p>

        <Styled.Heading className="text-green-light">Vehicle: </Styled.Heading>
        <p className="text-grey-light-2">{vehicle}</p>

        <Styled.Heading className="text-green-light">passengers: </Styled.Heading>
        <p className="text-grey-light-2">{vehicle === 'sedan' ? '1 - 4' : '1 - 7'}</p>

        <Styled.Heading className="text-green-light">Estimate: </Styled.Heading>
        <p className="text-grey-light-2">${estimate}</p>
      </Modal>
    </Styled.TripInfoModalWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  distance: selectDistance,
  startAddress: selectStartAddress,
  endAddress: selectEndAddress,
  estimate: selectValidEstimate,
  vehicle: selectVehicle,
  dropFee: selectDropFee,
});

export default connect(mapStateToProps)(TripInfoModal);
