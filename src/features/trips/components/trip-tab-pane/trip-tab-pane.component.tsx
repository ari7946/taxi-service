import React, { useState} from 'react';
import { TabPane, ListGroup } from 'reactstrap';
import Trip from '../trip-item/trip-item.component';

interface ObjectLiteral {
  [key: string]: any;
}

type TabState = 'viewAll' | 'viewConfirmed' | 'viewCompleted' | 'viewArchived';

type TripStatus = 'trips' | 'confirmed' | 'completed' | 'archived';

const TripTabPane = ({ 
  tabId, 
  tripStatus, 
  trips 
} : {
  tabId: TabState,
  tripStatus: TripStatus,
  trips: ObjectLiteral[]
}) => {
  return (
    <TabPane tabId={tabId}>
      {trips.length ? (
        <ListGroup>
          {trips.map(trip =>
            <Trip key={trip.id} trip={trip} />
          )}
        </ListGroup>     
        ) : (
          <h4 className="text-green-light">There are no {tripStatus} trips.</h4>
        )
      }
    </TabPane>
  )
}

export default TripTabPane;