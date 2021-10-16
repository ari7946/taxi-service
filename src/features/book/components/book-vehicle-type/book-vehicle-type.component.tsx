import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setInput } from '../../redux/book.actions';


import van from '../../assets/van10.png';
import sedan from '../../assets/sedan10.png';

import { selectVehicle } from '../../redux/book.selectors';

import { BookVehicleTypeContainer } from './book-vehicle-type.styles'


type VehicleType = 'sedan' | 'van';

interface InputOptions {
  name: 'vehicle',
  value: VehicleType
}

const VehicleType = () : React.ReactElement => {
  const dispatch = useDispatch();
  const vehicleType = useSelector<VehicleType>(selectVehicle);

  const setVehicleType = (inputOptions: InputOptions) => {
    dispatch(setInput(inputOptions))
  }

  return (
    <BookVehicleTypeContainer>
      <div 
        className={`
          ${vehicleType === 'sedan' ? 'text-yellow' : 'text-green-light'}
          bg-green-dark
          vehicle-type-card
        `}
        onClick={() => setVehicleType({ name: 'vehicle', value:'sedan' })}
      >   
        <img 
          className={`
            vehicle-img
            ${vehicleType === 'van' && 'vehicle-img-opacity'}
          `} 
          src={sedan} 
          alt="Sedan" 
        />

        <div>
          <h3 className="vehicle-title">SEDAN</h3>
          <ul className="vehicle-card-text">
            <li>$2.95 / MILE </li>
            <li>1-4 PASSENGERS</li>
          </ul>

          <button 
            className={`
              ${vehicleType === 'sedan' ? 'bg-yellow' : 'bg-green-light'}
              vehicle-type-button
            `}
            onClick={() => setVehicleType({ name: 'vehicle', value:'sedan' })}
          >
            SEDAN
          </button>
        </div>
      </div>

      <div 
        className={`
          ${vehicleType === 'van' ? 'text-yellow' : 'text-green-light'}
          bg-green-dark
          vehicle-type-card
        `}
        onClick={() => setVehicleType({ name: 'vehicle', value: 'van' })}
      >
        <img 
          className={`
            vehicle-img
            ${vehicleType === 'sedan' && 'vehicle-img-opacity'}
          `}
          src={van} 
          alt="Van" 
        />

        <div>
          <h3 className="vehicle-title">VAN</h3>
          <ul className="vehicle-card-text">
            <li>$3.95 / MILE </li>
            <li>1-7 PASSENGERS</li>
          </ul>

          <button 
            className={`
              ${vehicleType === 'van' ? 'bg-yellow' : ' bg-green-light'}
              vehicle-type-button
            `}
            onClick={() => setVehicleType({ name: 'vehicle', value: 'van' })}
          >
            VAN
          </button>
        </div>
      </div>
    </BookVehicleTypeContainer>
  )
}

//!! refactored to react-redux hooks instead of using code below
// const mapStateToProps = createStructuredSelector({
//   vehicle: selectVehicle,
// })

// const mapDispatchToProps = dispatch => ({
//   setInput: (options) => dispatch(setInput(options)),
// })

export default VehicleType;