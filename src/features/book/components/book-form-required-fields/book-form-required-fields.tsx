import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectInvalidFields } from '../../redux/book.selectors';

const BookFormRequiredFields = () => {
  const invalidFields = useSelector(selectInvalidFields);

  return (
    <Fragment>
      {(invalidFields.length > 0) && (
        <div data-testid="required-fields" className="text-flat-orange mb-0">Required:  < br />
          {invalidFields.map(field => {
            let lastField = field === invalidFields[invalidFields.length - 1] ? true : false;
            let secondToLast = field === invalidFields[invalidFields.length - 2] ? true : false;
            return (
              <Fragment key={field}>
                {field}{!lastField
                  ? invalidFields.length === 2 
                    ? null : ', ' : null}
                {secondToLast
                  ? invalidFields.length === 2 
                    ? ' and ' : 'and ' : null}
              </Fragment>
            )
          })}
        </div>
      )}
    </Fragment>
  )
}

export default BookFormRequiredFields;