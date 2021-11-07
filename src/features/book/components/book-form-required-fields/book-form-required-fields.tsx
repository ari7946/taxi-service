import React, { Fragment } from 'react';

const BookFormRequiredFields = ({ 
  invalidFields 
} : { 
  invalidFields: string[] 
}) => {
  return (
    <div className="text-flat-orange mb-0">Required:  < br />
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
  )
}

export default BookFormRequiredFields;