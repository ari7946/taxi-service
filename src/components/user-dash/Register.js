import React, { useState } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../../auth/use-auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  const { userRegister } = useAuth();

  const handleFormSubmit = async (formSubmitEvent) => {
    formSubmitEvent.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_TRIPS}/api/register`, { username, password, name, email, phone });
      if (response) {
        setLoading(false);
        userRegister(response.data.token, response.data.username);
        history.push('/dashboard');
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
        <FormGroup>
          <Label for="admin">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={e => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="admin">Email</Label>
          <Input
            type="text"
            name="email"
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="admin">Phone</Label>
          <Input
            type="text"
            name="phone"
            onChange={e => setPhone(e.target.value)}
          />
        </FormGroup>
        <Button className="text-green-light">
          Login
        </Button>
      </Form>
    </Container>
  )
}

export default Login;