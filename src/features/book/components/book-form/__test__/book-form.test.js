import React from 'react'
import { render, screen } from '../../../../_global/test-utils'
import userEvent from '@testing-library/user-event'
import BookForm from '../book-form.component'

describe('BookForm', () => {
  it('should render BookForm', async () => {
    const { debug } = render(
      <BookForm />
    )
    const nameInput = screen.getByTestId('form-name')
    expect(nameInput).toBeInTheDocument()

    userEvent.type(nameInput, "Shred Flanders")

    expect(nameInput).toHaveValue("Shred Flanders")

  })
})
