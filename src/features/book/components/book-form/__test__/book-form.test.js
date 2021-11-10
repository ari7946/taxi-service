import React from 'react'
import { render, screen } from '../../../../_global/test-utils'
import userEvent from '@testing-library/user-event'
import BookForm from '../book-form.component'

describe('BookForm', () => {
  it('should render nameInput', () => {
   render(
      <BookForm />
    )
    const nameInput = screen.getByTestId('form-name')
    expect(nameInput).toBeInTheDocument()

  })

  it('should have input value set when user types', () => {
    render(
      <BookForm />
    )
    const nameInput = screen.getByTestId('form-name')
    userEvent.type(nameInput, "Shred Flanders")
    expect(nameInput).toHaveValue("Shred Flanders")
  })

  it('should have invalid fields component in the document when user clicks submit button',  async () => {
    const { debug, getByRole } = render(
      <BookForm />
    )
    const submitButton = getByRole('button', { name: "Book" })
    userEvent.click(submitButton);

    // debug( await screen.findByTestId('required-fields'))
    expect(await screen.findByTestId('required-fields')).toBeInTheDocument()
  })
})
