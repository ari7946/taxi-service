import React from 'react'
import { render, screen } from '../../../../_global/test-utils'
import BookTripInfoMain from '../book-trip-info-main.component'

const initialBookState = {
  distance: 0,
  startAddress: '',
  endAddress: '',

  passengers: '1-4',
  dropFee: 10,
  vehicle: 'sedan',

  alertSuccess: false,
  direction: 'oneWay',
  price: 0,
  loading: false,
  error: false,
  errorMessage: '',
  invalidFields: [],
  valid: false,
  status: 'pending',
  submitted: false,
}

describe('BookTripInfoMain', () => {
  test('should display tripInfoButton', () => {
    const { } = render(<BookTripInfoMain />, {
      preloadedState: {
        book: {
          ...initialBookState,
          startAddress: 'American Spectrum, 19100 Von Karman Avenue, Irvine, CA 92612',
          endAddress: 'Tustin Auto Glass Repair, 150 El Camino Real, Tustin, CA 92780',
        }
      }
    })
    const tripInfoButton = screen.getByRole('button', { name: /Trip Details/i});
    expect(tripInfoButton).toBeInTheDocument();
  })

  test('should display correct rate and distance when given start and end addresses', () => {
    const { debug } = render(<BookTripInfoMain />, {
      preloadedState: {
        book: {
          ...initialBookState,
          startAddress: 'American Spectrum, 19100 Von Karman Avenue, Irvine, CA 92612',
          endAddress: 'Tustin Auto Glass Repair, 150 El Camino Real, Tustin, CA 92780',
        }
      }
    })
    const totalMilesHeading = screen.getByRole('heading', { name: /miles/i});
    expect(totalMilesHeading).toBeInTheDocument();

    const rateHeading = screen.getByRole('heading', { name: '$2.95 per mile'});
    // debug(rateHeading)
    expect(rateHeading).toBeInTheDocument();
  })


  test('should display correct distance and estimate for sedan', () => {
    const { debug } = render(<BookTripInfoMain />, {
      preloadedState: {
        book: {
          ...initialBookState,
          startAddress: 'American Spectrum, 19100 Von Karman Avenue, Irvine, CA 92612',
          endAddress: 'Tustin Auto Glass Repair, 150 El Camino Real, Tustin, CA 92780',
          distance: 7.8
        }
      }
    })
    const totalDistanceHeading = screen.getByRole('heading', { name: '7.8 miles'});
    expect(totalDistanceHeading).toBeInTheDocument();
  })

  test('should display correct price and passengers for van', () => {
    const { debug } = render(<BookTripInfoMain />, {
      preloadedState: {
        book: {
          ...initialBookState,
          startAddress: 'American Spectrum, 19100 Von Karman Avenue, Irvine, CA 92612',
          endAddress: 'Tustin Auto Glass Repair, 150 El Camino Real, Tustin, CA 92780',
          distance: 7.8,
          vehicle: 'van',
          price: 44.81,
          passengers: '1-7'
        }
      }
    })
    const priceHeading = screen.getByRole('heading', { name: '$ 44.81'});
    expect(priceHeading).toBeInTheDocument();

    const passengerHeading = screen.getByRole('heading', { name: '1-7 Passengers'});
    expect(passengerHeading).toBeInTheDocument();
  })
})