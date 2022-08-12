import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setInput } from '../../redux/book.actions';

import Image from 'next/image';

import van from '../../../../public/book/assets/van10.png';
import sedan from '../../../../public/book/assets/sedan10.png';

import { selectVehicle } from '../../redux/book.selectors';

import { BookVehicleTypeContainer } from './book-vehicle-type.styles';
import Button from '../../../_global/components/button/button.component';

type VehicleTypes = 'sedan' | 'van';

interface InputOptions {
  name: 'vehicle';
  value: VehicleTypes;
}

const VehicleType = () => {
  const dispatch = useDispatch();
  const vehicleType = useSelector<VehicleTypes>(selectVehicle);

  const setVehicleType = (inputOptions: InputOptions) => {
    dispatch(setInput(inputOptions));
  };

  return (
    <BookVehicleTypeContainer>
      <div
        className={`
          ${vehicleType === 'sedan' ? 'text-yellow' : 'text-green-light'}
          bg-primary-dark
          vehicle-type-card
          vehicle-type-card__first
        `}
        onClick={() => setVehicleType({ name: 'vehicle', value: 'sedan' })}>
        <Image
          className={`
            vehicle-img
            ${vehicleType === 'van' && 'vehicle-img-opacity'}
          `}
          src={sedan}
          alt="Sedan"
          width={300}
          height={150}
          layout="responsive"
        />

        <div>
          <h3 className="vehicle-title">SEDAN</h3>
          <ul className="vehicle-card-text">
            <li>$2.95 / MILE </li>
            <li>1-4 PASSENGERS</li>
          </ul>

          <Button
            type="button"
            handleClick={() => setVehicleType({ name: 'vehicle', value: 'sedan' })}
            primary={vehicleType === 'sedan'}
            secondary={vehicleType === 'van'}>
            SEDAN
          </Button>
        </div>
      </div>

      <div
        className={`
          ${vehicleType === 'van' ? 'text-yellow' : 'text-green-light'}
          bg-primary-dark
          vehicle-type-card
        `}
        onClick={() => setVehicleType({ name: 'vehicle', value: 'van' })}>
        <Image
          className={`
            vehicle-img
            ${vehicleType === 'sedan' && 'vehicle-img-opacity'}
          `}
          src={van}
          alt="Van"
          width={300}
          height={150}
          layout="responsive"
        />

        <div>
          <h3 className="vehicle-title">VAN</h3>
          <ul className="vehicle-card-text">
            <li>$3.95 / MILE </li>
            <li>1-7 PASSENGERS</li>
          </ul>

          <Button
            handleClick={() => setVehicleType({ name: 'vehicle', value: 'van' })}
            primary={vehicleType === 'van'}
            secondary={vehicleType === 'sedan'}>
            VAN
          </Button>
        </div>
      </div>
    </BookVehicleTypeContainer>
  );
};

//!! refactored to react-redux hooks instead of using code below
// const mapStateToProps = createStructuredSelector({
//   vehicle: selectVehicle,
// })

// const mapDispatchToProps = dispatch => ({
//   setInput: (options) => dispatch(setInput(options)),
// })

export default VehicleType;
