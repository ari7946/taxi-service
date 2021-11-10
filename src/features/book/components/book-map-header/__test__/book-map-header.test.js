import React from 'react'
import { render, screen } from '../../../../_global/test-utils'
import BookMapHeader from '../book-map-header.component.tsx'

describe('BookMapHeader', () => {
  it('should prompt user to submit taxi form', async () => {
   render(<BookMapHeader />, {
     preloadedState: {
       book: {
         startAddress: 'American Spectrum, 19100 Von Karman Avenue, Irvine, CA 92612',
         endAddress: 'Tustin Auto Glass Repair, 150 El Camino Real, Tustin, CA 92780',
       }
     }
   })
    expect(screen.getByText(/Please submit the form to book a taxi/i)).toBeInTheDocument()
  })

it('should prompt user to select endAddress', async () => {
   render(<BookMapHeader />, {
     preloadedState: {
       book: {
         startAddress: "American Spectrum, 19100 Von Karman Avenue, Irvine, CA 92612",
         endAddress: '',
       }
     }
   })
    expect(screen.getByTestId('endAddress-invalid')).toBeInTheDocument()
  })

  it('should prompt user to to select startAddress', () => {
   const { debug } = render(<BookMapHeader />, {
     preloadedState: {
       book: {
         startAddress: '',
         endAddress: "Tustin Auto Glass Repair, 150 El Camino Real, Tustin, CA 92780",
       }
     }
   })
    expect(screen.getByTestId('startAddress-invalid')).toBeInTheDocument();
  })

  it('should prompt user to select both start and end addresses', () => {
   const { debug } = render(<BookMapHeader />, {
     preloadedState: {
       book: {
         startAddress: '',
         endAddress: '',
       }
     }
   })
    expect(screen.getByTestId('startAddress-and-endAddress-invalid')).toBeInTheDocument()
  })

})