import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { MobileMenuOpenProvider } from '../context/MobileMenuOpenProvider';

import NavbarDefault from '../components/navbar-wrapper/navbar-wrapper-default.component';
import NavbarAdmin from '../components/navbar-wrapper/navbar-wrapper-admin.component';
import NavbarUser from '../components/navbar-wrapper/navbar-wrapper-user.component';

import { selectAuthRole } from '../../auth/redux/auth.selectors';

const NavbarContainer = ({ authRole }) => {
  return (
    <MobileMenuOpenProvider>
      {authRole !== 'admin' && authRole !== 'user' && <NavbarDefault />}
      {authRole === 'admin' && <NavbarAdmin />}
      {authRole === 'user' && <NavbarUser />}
    </MobileMenuOpenProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  authRole: selectAuthRole,
});

export default connect(mapStateToProps)(NavbarContainer);
