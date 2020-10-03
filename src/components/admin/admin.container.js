import React from 'react';
import { Container } from 'reactstrap';
import './admin.styles.css';
import { Redirect } from 'react-router-dom';
import AdminLogin from './admin-login.component';
import { useAuth } from '../../auth/use-auth';
import TripList from '../trips';

const AdminContainer = () => {
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
        ? <Redirect to='/trips' />
        : <AdminLogin />
      }
    </Container>
  )
}

export default AdminContainer;