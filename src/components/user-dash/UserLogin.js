import React, { useState } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/use-auth';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  const { userLogin, auth } = useAuth();

  const handleFormSubmit = async (formSubmitEvent) => {
    formSubmitEvent.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_TRIPS}/api/login`, { username, password });
      if (response) {
        setLoading(false);
        userLogin(response.data.token, response.data.username);
        history.push('/dashboard');
      }
    } catch (error) {
      setLoading(false)
      console.log('error', error);
    }
  }

  return (
    <Container className="text-green-light auth" fluid>
      <h1 className="mb-3">Login</h1>
      {loading && <Spinner size="md" color="light"></Spinner>}
      <Form className='' onSubmit={(e) => handleFormSubmit(e)}>
        <FormGroup>
          <Label for="admin">Username</Label>
          <Input
            type="text"
            name="username"
            onChange={e => setUsername(e.target.value)}
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
        <span className="ml-4">
          Need to register?
          <Link className="ml-3 text-grey-light-2" to="/register">Register here</Link>
        </span>
      </Form>
    </Container>
  )
}

export default UserLogin;