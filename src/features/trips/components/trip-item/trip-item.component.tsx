import React from 'react';
import TripStatusButtonGroup from '../trip-status/trip-status.component';
import * as Styled from './trip-item.styles';
import { Trip } from '../../types/trips.types';

const TripItem = ({ trip }: { trip: Trip }) => {
  return (
    <Styled.TripItemWrapper>
      <Styled.List>
        <Styled.ListItem>
          <span className="list-heading">name:</span>
          <span className="list-value">{trip.name}</span>
        </Styled.ListItem>

        <Styled.ListItem>
          <span className="list-heading">phone:</span>
          <span className="list-value">{trip.phone}</span>
        </Styled.ListItem>

        <Styled.ListItem>
          <span className="list-heading">email:</span>
          <span className="list-value">{trip.email}</span>
        </Styled.ListItem>

        <Styled.ListItem>
          <span className="list-heading">vehicle:</span>
          <span className="list-value">{trip.vehicle}</span>
        </Styled.ListItem>

        <Styled.ListItem>
          <span className="list-heading">distance:</span>
          <span className="list-value">{trip.distance} miles</span>
        </Styled.ListItem>

        <Styled.ListItem>
          <span className="list-heading">start address:</span>
          <span className="list-value">{trip.startAddress}</span>
        </Styled.ListItem>
      </Styled.List>

      <Styled.List>
        <Styled.ListItem>
          <span className="list-heading">date:</span>
          <span className="list-value">{trip.date}</span>
        </Styled.ListItem>

        <Styled.ListItem>
          <span className="list-heading">time:</span>
          <span className="list-value">{trip.time}</span>
        </Styled.ListItem>

        <Styled.ListItem>
          <span className="list-heading">estimate:</span>
          <span className="list-value">${trip.price}</span>
        </Styled.ListItem>

        <Styled.ListItem>
          <span className="list-heading">requested-at:</span>
          <span className="list-value">{trip.created_at}</span>
        </Styled.ListItem>

        <Styled.ListItem>
          <span className="list-heading">direction:</span>{' '}
          <span className="list-value">{trip.direction === 'oneWay' ? 'one way' : 'two way'}</span>
        </Styled.ListItem>

        <Styled.ListItem>
          <span className="list-heading">destination:</span>
          <span className="list-value">{trip.endAddress}</span>
        </Styled.ListItem>
      </Styled.List>

      <TripStatusButtonGroup tripId={trip.id} tripStatus={trip.status} />
    </Styled.TripItemWrapper>
  );
};

export default TripItem;
