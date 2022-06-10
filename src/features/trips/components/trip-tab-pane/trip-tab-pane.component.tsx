import React from 'react';

import TripItem from '../trip-item/trip-item.component';
import { Trip, TabState } from '../../types/trips.types';

import * as Styled from './trip-tab-pane.styles';

interface TripTabPaneProps {
  activeTab: TabState;
  trips: Trip[];
}

const TripTabPane = ({ activeTab, trips }: TripTabPaneProps) => {
  return (
    <Styled.TapPaneWrapper>
      {trips.length > 0 ? (
        <div>
          {trips.map((trip) => (
            <TripItem key={trip.id} trip={trip} />
          ))}
        </div>
      ) : (
        <h4 className="text-green-light">There are no {activeTab} trips.</h4>
      )}
    </Styled.TapPaneWrapper>
  );
};

export default TripTabPane;
