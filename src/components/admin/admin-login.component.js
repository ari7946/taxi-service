import React, { useState } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';
import { useHistory } from "react-router-dom";
import './admin.styles.css';
import axios from 'axios';
import { useAuth } from '../../auth/use-auth';

const Login = () => {
  const [username, setAdmin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  const { adminLogin } = useAuth();

  const handleFormSubmit = async (formSubmitEvent) => {
    formSubmitEvent.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_TRIPS}/api/admin`, { username, password });
      if (response) {
        setLoading(false);
        adminLogin(response.data.token, response.data.username);
        history.push('admin/trips');
      }
    } catch (error) {
      setLoading(false)
      console.log('error', error);
    }
  }

  const handleGuestSubmit = async (formSubmitEvent) => {

    const username = process.env.REACT_APP_GUEST_USERNAME;
    const password = process.env.REACT_APP_GUEST_PASSWORD;

    try {
      setLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_TRIPS}/api/admin`, { username, password });
      if (response) {
        setLoading(false);
        adminLogin(response.data.token, response.data.username);
        history.push('admin/trips');
        window.location.reload();
      }
    } catch (error) {
      setLoading(false)
      console.log('error', error);
    }
  }
 
  return (
    <Container className="text-green-light auth" fluid>
      <p className="small text-green-light"> Feel free to Log in as a guest for development or demo purposes. No username or password required</p>
      <h1 className="mb-3">Admin Login</h1>
      {loading && <Spinner size="md" color="light"></Spinner>}
      <Form className='' onSubmit={(e) => handleFormSubmit(e)}>
        <FormGroup>
          <Label for="admin">Username</Label>
          <Input 
            type="text" 
            name="admin" 
            onChange={e => setAdmin(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="admin">Password</Label>
          <Input 
            type="password" 
            name="password" 
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button className="text-green-light">
          Login
        </Button>
        <Button
          className="text-green-light ml-3"
          onClick={(e) => handleGuestSubmit(e)}
        >
          Guest Admin Login
        </Button>
      </Form>
    </Container>  
  )
}

export default Login;