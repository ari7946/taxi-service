import React from 'react';
import { Container } from 'reactstrap';
import './user.styles.css';
import { Redirect } from 'react-router-dom';
import UserLogin from './user-login.component';
import { useAuth } from '../../auth/use-auth';

const UserContainer = () => {
  const { auth } = useAuth();
  // const [trips, setTrips] = useState([]);
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState('');

  // const getTrips = async () => {
  //   setLoading(true);
  //   try {
  //     const result = await axios.get(`${process.env.REACT_APP_TRIPS}/api/trips`, authHeaders);
  //     setTrips(result.data);
  //     setLoading(false)
  //   } catch (error) {
  //     setLoading(false);
  //     setError('Unable to get requested trips')
  //   }
  // }

  // useEffect(() => {
  //   getTrips();
  // }, [])

  // if (loading) {
  //   return <Spinner />
  // }

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