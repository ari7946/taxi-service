import React, { useState } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';
import { useHistory } from "react-router-dom";
import './admin.styles.css';

import { createStructuredSelector } from 'reselect';
import { selectAuthLoading } from '../../redux/auth.selectors';
import { connect } from 'react-redux';
import { adminLogin } from '../../redux/auth.actions';

const AdminLogin = ({ adminLogin, loading }) => {
  const [username, setAdmin] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();
 
  return (
    <Container className="text-green-light auth" fluid>
      <p className="small text-green-light"> Feel free to Log in as a guest for development or demo purposes. No username or password required</p>
      <h1 className="mb-3">Admin Login</h1>
      {loading && <Spinner size="md" color="light"></Spinner>}
      <Form 
        className='' 
        onSubmit={ async (event) => {
          event.preventDefault();
          await adminLogin(username, password);
          history.push('/trips');
        }}
      >
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
          onClick={ async (event) => {
            event.preventDefault();
            // third argument is true that user is signing in as a guest
            await adminLogin({ username, password, guestAdmin: true });
            history.push('/trips');
          }}
        >
          Guest Admin Login
        </Button>
      </Form>
    </Container>  
  )
}

const mapStateToProps = createStructuredSelector({
  loading: selectAuthLoading,
})

const mapDispatchToProps = dispatch => ({
  adminLogin: (adminLoginData) => 
    dispatch(adminLogin({ ...adminLoginData }))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);