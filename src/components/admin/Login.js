import React, { useState} from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const Login = () => {
  const [username, setAdmin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_TRIPS}/api/login`, { username, password });
      if (response) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username);
        console.log('token', response.data.token);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <h1 className="mb-3">Login</h1>
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
        <Button>
          Submit
        </Button>
      </Form>
    </Container>  
  )
}

export default Login;