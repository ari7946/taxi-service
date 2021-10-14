import React, { Fragment } from 'react';
import DefaultNavbar from './navbar-default.component';
import AdminNavbar from './navbar-admin.component';
import UserNavbar from './navbar-user.component';
import { selectAuthRole } from '../auth/redux/auth.selectors';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const NavbarContainer = ({ authRole }) => {

  return (
    <Fragment>
      {authRole !== 'admin' && authRole !== 'user' && <DefaultNavbar />}
      {authRole === 'admin' && <AdminNavbar /> }
      {authRole === 'user' && <UserNavbar /> }
    </Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
  authRole: selectAuthRole,
})

export default connect(mapStateToProps)(NavbarContainer);