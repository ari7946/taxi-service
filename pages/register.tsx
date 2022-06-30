import type { NextPage } from 'next';
import Head from 'next/head';
import UserRegisterContainer from '../features/auth/components/user/user-register.component';
import NavbarContainer from '../features/navbar';

const UserPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Register</title>
        <meta name="description" content="Register to keep track of your trips and status" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarContainer />
      <UserRegisterContainer />
    </div>
  );
};

export default UserPage;
