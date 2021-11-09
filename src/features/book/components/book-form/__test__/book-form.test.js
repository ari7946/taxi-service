import React from 'react'
import { render, screen } from '../../../../_global/test-utils'
import BookForm from '../book-form.component'

describe('BookForm', () => {
  it('should render BookForm', async () => {
    render(
      <BookForm />
    )
    const inputElement = screen.getByPlaceholderText('name');
    expect(inputElement).toBeInTheDocument()
  })
})
