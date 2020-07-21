import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'reactstrap';
import './user.styles.css';

import UserLogin from './user-login.component';
import axios from 'axios';
import { useAuth } from '../../auth/use-auth';
import TripList from './user-trip-list.component';

const UserContainer = () => {
  const { authHeaders, auth } = useAuth();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('');

  const getTrips = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${process.env.REACT_APP_TRIPS}/api/trips`, authHeaders);
      setTrips(result.data);
      setLoading(false)
    } catch (error) {
      setLoading(false);
      setError('Unable to get requested trips')
    }
  }

  useEffect(() => {
    getTrips();
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <Container>
      {auth === 'user' && loading === false
        ? <TripList trips={trips} />
        : <UserLogin />
      }
    </Container>
  )
}

export default UserContainer;