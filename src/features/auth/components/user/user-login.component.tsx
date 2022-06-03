import React, { useState } from 'react';
import * as Styled from './user.styles';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { userAuth } from '../../redux/auth.actions';
import { selectAuthLoading } from '../../redux/auth.selectors';
import { UserAuth } from '../../types/auth.types';

import { useHistory, Link } from 'react-router-dom';

import LabeledInput from '../../../_global/components/labeled-input/labeled-input.component';
import Button from '../../../_global/components/button/button.component';

interface UserLoginProps {
  userAuth: (obj: Pick<UserAuth, 'username' | 'password' | 'authType'>) => any;
  loading: boolean;
}

const UserLogin = ({ userAuth, loading }: UserLoginProps) => {
  const [userCredentials, setUserCredentials] = useState<Pick<UserAuth, 'username' | 'password'>>({
    username: '',
    password: '',
  });

  const history = useHistory();

  const handleChange = (name: string, value: string) => {
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <Styled.UserAuthWrapper>
      <h1>Login</h1>
      {loading && <p>loading...</p>}
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const { username, password } = userCredentials;
          await userAuth({
            authType: 'login',
            username: username,
            password: password,
          });
          history.push('/trips');
        }}>
        <LabeledInput
          id="user-username"
          type="text"
          name="username"
          placeholder="username"
          handleChange={handleChange}
          value={userCredentials.username}
          required
        />
        <LabeledInput
          id="user-password"
          type="password"
          name="password"
          placeholder="password"
          handleChange={handleChange}
          value={userCredentials.password}
          required
        />

        <Styled.ButtonGroupWrapper>
          <Button type="submit" name="submit" primary>
            Login
          </Button>
          <span>
            Need to register?
            <Link to="/register">Register here</Link>
          </span>
        </Styled.ButtonGroupWrapper>
      </form>
    </Styled.UserAuthWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectAuthLoading,
});

const mapDispatchToProps = (dispatch) => ({
  userAuth: (userLoginData: UserAuth) => dispatch(userAuth({ ...userLoginData })),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
