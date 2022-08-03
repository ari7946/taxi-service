import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as Styled from './admin.styles';

import { createStructuredSelector } from 'reselect';
import { selectAuthLoading } from '../../redux/auth.selectors';
import { connect } from 'react-redux';
import { adminLogin } from '../../redux/auth.actions';

import { AdminLogin as AdminLoginType } from '../../types/auth.types';

import LabeledInput from '../../../_global/components/labeled-input/labeled-input.component';
import Button from '../../../_global/components/button/button.component';

interface AdminLoginProps {
  adminLogin: (obj: AdminLoginType) => any;
  loading: boolean;
}

type AdminCredentials = Pick<AdminLoginType, 'username' | 'password'>;

const AdminLogin = ({ adminLogin, loading }: AdminLoginProps) => {
  const [adminCredentials, setAdminCredentials] = useState<AdminCredentials>({
    username: '',
    password: '',
  });

  const router = useRouter();

  const handleChange = (name: string, value: string) => {
    setAdminCredentials({
      ...adminCredentials,
      [name]: value,
    });
  };

  return (
    <Styled.AdminLoginWapper>
      <p>
        NOTE: Feel free to Log in as a guest for development or demo purposes. No username or
        password required
      </p>
      <h1>Admin Login</h1>
      {loading && <p>Loading... </p>}
      <form
        className=""
        onSubmit={async (event) => {
          event.preventDefault();
          const { username, password } = adminCredentials;
          await adminLogin({ username, password });
          router.push('/trips');
        }}>
        <LabeledInput
          id="admin-username"
          type="text"
          name="username"
          placeholder="admin"
          handleChange={handleChange}
          value={adminCredentials.username}
        />

        <LabeledInput
          id="admin-password"
          type="password"
          name="password"
          placeholder="password"
          handleChange={handleChange}
          value={adminCredentials.password}
        />

        <Styled.ButtonGroupWrapper>
          <Button type="submit" name="submit" primary width="10rem">
            Login
          </Button>
          <Button
            secondary
            width="15rem"
            type="button"
            name="admin-guest-admin"
            handleClick={async (event) => {
              event.preventDefault();
              const { username, password } = adminCredentials;
              // third argument is true when user is signing in as a guest admin
              await adminLogin({ username, password, guestAdmin: true });
              router.push('/trips');
            }}>
            Guest Admin Login
          </Button>
        </Styled.ButtonGroupWrapper>
      </form>
    </Styled.AdminLoginWapper>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectAuthLoading,
});

const mapDispatchToProps = (dispatch) => ({
  adminLogin: (adminLoginData) => dispatch(adminLogin({ ...adminLoginData })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
