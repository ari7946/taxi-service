import React, { Fragment } from 'react';
import TripList from './admin-trip-list.component';
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/use-auth';
import './admin.styles.css';

function Container() {
  const { auth } = useAuth();
  return (
    <Fragment>
      {auth === 'admin' ? (
        <>          
          <h1 className="h3 container-fluid text-center text-white">Admin Panel</h1>
          <p className="small text-white text-center container-fluid">NOTE: These trips and users are fictitious and intended for demo purposes. Feel free to click around or even delete trips </p>
          <TripList /> 
        </>
        ) : (
          <div className="container">
            <h3 className="text-green-light mb-3">Login required to view trips</h3>
            <Link className="btn px-4 btn-light" to="/admin">Login</Link>
          </div>
        )
      }
    </Fragment>
  )
}

export default Container;