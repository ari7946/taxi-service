import React, { useState } from 'react';
import { TabPane, ListGroup } from 'reactstrap';
import TripItem from '../trip-item/trip-item.component';
import { Trip as TripObj, TripStatus, TabState } from '../../types/trips.types';

const TripTabPane = ({
  tabId,
  tripStatus,
  trips,
}: {
  tabId: TabState;
  tripStatus: TripStatus;
  trips: TripObj[];
}) => {
  return (
    <TabPane tabId={tabId}>
      {trips.length ? (
        <div>
          {trips.map((trip) => (
            <TripItem key={trip.id} trip={trip} />
          ))}
        </div>
      ) : (
        <h4 className="text-green-light">There are no {tripStatus} trips.</h4>
      )}
    </TabPane>
  );
};

export default TripTabPane;
