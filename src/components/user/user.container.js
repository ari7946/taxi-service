import React from 'react';
import { Container } from 'reactstrap';
import './user.styles.css';
import { Redirect } from 'react-router-dom';
import UserLogin from './user-login.component';
import { useAuth } from '../../auth/use-auth';

const UserContainer = () => {
  const { auth } = useAuth();

  return (
    <Container>
      {auth === 'user'
        ? <Redirect to='trips' />
        : <UserLogin />
      }
    </Container>
  )
}

export default UserContainer;