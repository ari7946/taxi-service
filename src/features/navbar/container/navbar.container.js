import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import NavbarDefault from '../components/navbar-default/navbar-default.component';
import NavbarAdmin from '../components/navbar-default/navbar-admin.components';
import NavbarUser from '../components/navbar-default/navbar-user.components';

import { selectAuthRole } from '../../auth/redux/auth.selectors';

const NavbarContainer = ({ authRole }) => {
  return (
    <>
      {authRole !== 'admin' && authRole !== 'user' && <NavbarDefault />}
      {authRole === 'admin' && <NavbarAdmin />}
      {authRole === 'user' && <NavbarUser />}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  authRole: selectAuthRole,
});

export default connect(mapStateToProps)(NavbarContainer);
