import React from 'react';
import { useSelector } from 'react-redux';
import './user.styles.ts';
import { useRouter } from 'next/router';
import UserLogin from './user-login.component';
import { selectAuthRole } from '../../redux/auth.selectors';
import { useEffect } from 'react';

const UserContainer = () => {
  const authRole = useSelector(selectAuthRole);
  const router = useRouter();

  useEffect(() => {
    if ((authRole === 'admin') | (authRole === 'user')) {
      router.push('/trips');
    }
  }, [authRole]);

  return <UserLogin />;
};

export default UserContainer;
