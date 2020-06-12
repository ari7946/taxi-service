import React, { useState } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../../auth/use-auth';
//TODO reproduce Login functionality using okta

const Login = () => {
  const [username, setAdmin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  const { login } = useAuth();

  const handleFormSubmit = async (formSubmitEvent) => {
    formSubmitEvent.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_TRIPS}/api/admin`, { username, password });
      if (response) {
        setLoading(false);
        login(response.data.token);
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
        login(response.data.token);
        history.push('admin/trips');
      }
    } catch (error) {
      setLoading(false)
      console.log('error', error);
    }
  }

  return (
    <Container className="text-green-light">
      <p className="small text-green-light">Log in as a guest for development purposes. No username or password required</p>
      <h1 className="mb-3">Admin Login</h1>
      {loading && <Spinner size="md" color="light"></Spinner>}
      <Form className='w-50' onSubmit={(e) => handleFormSubmit(e)}>
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
          onClick={() => handleGuestSubmit()}
        >
          Guest Login
        </Button>
      </Form>
    </Container>
  )
}

export default Login;