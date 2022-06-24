import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { MobileMenuOpenProvider } from '../context/MobileMenuOpenProvider';

import NavbarWrapper from '../components/navbar-wrapper/navbar-wrapper.component';

import { selectAuthRole } from '../../auth/redux/auth.selectors';

const NavbarContainer = ({ authRole }) => {
  return (
    <MobileMenuOpenProvider>
      <NavbarWrapper authRole={authRole} />
    </MobileMenuOpenProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  authRole: selectAuthRole,
});

export default connect(mapStateToProps)(NavbarContainer);
