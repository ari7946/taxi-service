import React, { Fragment } from 'react';
import { useAuth } from '../../auth/use-auth';
import DefaultNavbar from './default-navbar.component';
import AdminNavbar from './admin-navbar.component';
import UserNavbar from './user-navbar.component';

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