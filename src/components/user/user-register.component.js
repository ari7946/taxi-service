import React, { useState } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';
import './user.styles.css';

import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../../auth/use-auth';

const UserRegister = () => {
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
        history.push('/book');
      }
    } catch (error) {
      setLoading(false)
      console.log('error', error);
    }
  }

  return (
    <Container className="text-green-light auth" fluid>
      <h1 className="mb-3 color-grey-light-2">Register</h1>
      {loading && <Spinner size="md" color="light"></Spinner>}
      <Form className='' onSubmit={(e) => handleFormSubmit(e)}>
        <FormGroup>
          <Label for="admin">Username<span className="text-flat-orange small ml-2 text-center">required</span></Label>
          <Input
            type="text"
            name="username"
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="admin">Password<span className="text-flat-orange small ml-2">required</span></Label>
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
          Register
        </Button>
        <span className="ml-4">
          Already registered? 
          <Link className="ml-3 text-grey-light-2" to="/login">Login here</Link>
        </span>
        
      </Form>
    </Container>
  )
}

export default UserRegister;