import React from 'react';
import { render, screen } from '../../../../_global/test-utils';
import BookAddresses from '../book-addresses.component';

describe('BookAddresses', () => {
  test('should render instructions', () => {
    const { debug } = render(<BookAddresses />, {
      preloadedState: {
        book: {
          startAddress: '',
          endAddress: '',
        },
      },
    });

    // debug(screen.getByTestId('instructions'))
    expect(screen.getByTestId('instructions')).toBeInTheDocument();
  });

  test('should inlude starting address in the document', () => {
    const { debug } = render(<BookAddresses />, {
      preloadedState: {
        book: {
          startAddress: 'American Spectrum, 19100 Von Karman Avenue, Irvine, CA 92612',
          endAddress: '',
        },
      },
    });

    // debug(screen.getByTestId('addresses-starting-point'))
    expect(screen.getByTestId('addresses-starting-point')).toBeInTheDocument();
  });

  test('should include endingaddress in the document', () => {
    const { debug } = render(<BookAddresses />, {
      preloadedState: {
        book: {
          startAddress: '',
          endAddress: 'Tustin Auto Glass Repair, 150 El Camino Real, Tustin, CA 92780',
        },
      },
    });

    // debug(screen.getByTestId('addresses-destination'))
    expect(screen.getByTestId('addresses-destination')).toBeInTheDocument();
  });
});
