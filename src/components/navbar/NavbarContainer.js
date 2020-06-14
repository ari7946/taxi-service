import React, { Fragment } from 'react';
import { useAuth } from '../../auth/use-auth';
import DefaultNavbar from './DefaultNavbar';
import AdminNavbar from './AdminNavbar';
import UserNavbar from './UserNavbar';

const NavbarContainer = () => {
  const { auth } = useAuth();

  return (
    <Fragment>
      {auth !== 'admin' && auth !== 'user' && <DefaultNavbar />}
      {auth === 'admin' && <AdminNavbar /> }
      {auth === 'user' && <UserNavbar /> }
    </Fragment>
  )
}

export default NavbarContainer;