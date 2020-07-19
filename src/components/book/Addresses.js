import React from 'react';
import { ListGroupItem, ListGroup, ListGroupItemText, ListGroupItemHeading  } from 'reactstrap';
import { useBookApi } from './BookApi';

function Addresses(props) {
  const { state } = useBookApi();
  console.log('rendering Address')
  return (
    <div>
      <ListGroup flush>
        {state.startAddress && (
            <ListGroupItem className="book-address">
              <ListGroupItemHeading className="address-heading-starting">Starting Point</ListGroupItemHeading>
            <ListGroupItemText>
              {state.startAddress}
            </ListGroupItemText>
          </ListGroupItem>
        )}

        {state.endAddress && (
            <ListGroupItem className="book-address">
              <ListGroupItemHeading className='address-heading-destination'>Destination</ListGroupItemHeading>
              <ListGroupItemText>
                {state.endAddress}
              </ListGroupItemText>
            </ListGroupItem>
        )}
      </ListGroup>
    </div>
  )
}

export default Addresses;