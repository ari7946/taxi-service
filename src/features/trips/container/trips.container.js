import React, { Fragment } from 'react';
import TripList from '../components/trip-list/trip-list.component';
import { selectAuthRole } from '../../auth/redux/auth.selectors';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function TripContainer({ authRole }) {
  return (
    <div className="w-100">
      {authRole !== 'user' && authRole !== 'admin' && (
        <h3 className="text-green-light mb-3">Login required to view trips</h3>
      )}
      {authRole === 'user' || authRole === 'admin' ? <TripList /> : null}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  authRole: selectAuthRole,
});

export default connect(mapStateToProps)(TripContainer);
