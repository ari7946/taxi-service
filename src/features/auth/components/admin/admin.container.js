import React from 'react';
import { Container } from 'reactstrap';
import './admin.styles.ts';
import { Redirect } from 'react-router-dom';
import AdminLogin from './admin-login.component';

import { selectAuthRole } from '../../redux/auth.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const AdminContainer = ({ authRole }) => {
  return <Container>{authRole === 'user' ? <Redirect to="/trips" /> : <AdminLogin />}</Container>;
};

const mapStateToProps = createStructuredSelector({
  authRole: selectAuthRole,
});

export default connect(mapStateToProps)(AdminContainer);
