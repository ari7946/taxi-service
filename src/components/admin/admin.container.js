import React from 'react';
import { Container } from 'reactstrap';
import './admin.styles.css';
import { Redirect } from 'react-router-dom';
import AdminLogin from './admin-login.component';
import { useAuth } from '../../auth/use-auth';
import TripList from '../trips';

const AdminContainer = () => {
  const { auth } = useAuth();

  return (
    <Container>
      {auth === 'user'
        ? <Redirect to='/trips' />
        : <AdminLogin />
      }
    </Container>
  )
}

export default AdminContainer;