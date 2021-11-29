import React, { useState } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';
import './user.styles.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { userAuth } from '../../redux/auth.actions'
import { selectAuthLoading } from '../../redux/auth.selectors';
import { UserAuth } from '../../types/auth.types'

import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const UserLogin = ({ userAuth, loading }) => {
  const [currentUsername, setCurrentUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  let history = useHistory();

  return (
    <Container className="text-green-light auth" fluid>
      <h1 className="mb-3">Login</h1>
      {loading && <Spinner size="md" color="light"></Spinner>}
      <Form 
        onSubmit={ async (event) => {
          event.preventDefault();
          await userAuth({
            authType: 'login', 
            username: currentUsername, 
            password: currentPassword
          });
          history.push('/trips');
        }}
      >
        <FormGroup>
          <Label for="admin">Username</Label>
          <Input
            type="text"
            name="username"
            onChange={e => setCurrentUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="admin">Password</Label>
          <Input
            type="password"
            name="password"
            onChange={e => setCurrentPassword(e.target.value)}
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

const mapStateToProps = createStructuredSelector({
  loading: selectAuthLoading,
})

const mapDispatchToProps = dispatch => ({
  userAuth: (userLoginData: UserAuth) => 
    dispatch(userAuth({ ...userLoginData }))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);