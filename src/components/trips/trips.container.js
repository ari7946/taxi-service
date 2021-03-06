import React, { Fragment } from 'react';
import TripList from './trip-list/trip-list.component';
import './trips.styles.css';
import { selectAuthRole } from '../../redux/auth/auth.selectors';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function TripContainer({ authRole }) {

  return (
    <Fragment>
      {authRole !== 'user' && authRole !== 'admin' && <h3 className="text-green-light mb-3">Login required to view trips</h3>}
      {authRole === 'user' || authRole === 'admin' ? (
        <TripList />
      ) : null}
    </Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
  authRole: selectAuthRole,
})

export default connect(mapStateToProps)(TripContainer);
