import React from 'react';
import { render, screen } from '../../../../_global/test-utils';
import BookFormRequiredFields from '../book-form-required-fields.tsx';
import BookForm from '../../book-form/book-form.component';
import userEvent from '@testing-library/user-event';

describe('BookFormRequiredFields', () => {
  it('should output correct text', async () => {
    const { debug, getAllByTestId, getByRole } = render(<BookForm />);
    const submitButton = getByRole('button', { name: 'Book' });
    userEvent.click(submitButton);

    const formFields = getAllByTestId('required-fields-container');
    expect(Array.isArray(formFields)).toBeTruthy();
  });
});
