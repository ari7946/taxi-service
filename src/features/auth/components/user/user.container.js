import React from 'react';
import { Container } from 'reactstrap';
import { useSelector } from 'react-redux';
import './user.styles.ts';
import { Redirect } from 'react-router-dom';
import UserLogin from './user-login.component';
import { selectAuthRole } from '../../redux/auth.selectors';

const UserContainer = () => {
  const auth = useSelector(selectAuthRole);

  return <Container>{auth === 'user' ? <Redirect to="trips" /> : <UserLogin />}</Container>;
};

export default UserContainer;
