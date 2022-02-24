import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import NavbarDefault from '../components/navbar-default/navbar-default.component';
import AdminNavbar from '../components/navbar-admin.component';
import UserNavbar from '../components/navbar-user.component';
import { selectAuthRole } from '../../auth/redux/auth.selectors';

const NavbarContainer = ({ authRole }) => {
  return (
    <>
      {authRole !== 'admin' && authRole !== 'user' && <NavbarDefault />}
      {authRole === 'admin' && <AdminNavbar />}
      {authRole === 'user' && <UserNavbar />}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  authRole: selectAuthRole,
});

export default connect(mapStateToProps)(NavbarContainer);
