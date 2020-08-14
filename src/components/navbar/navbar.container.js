import React, { Fragment } from 'react';
import { useAuth } from '../../auth/use-auth';
import DefaultNavbar from './navbar-default.component';
import AdminNavbar from './navbar-admin.component';
import UserNavbar from './navbar-user.component';

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