import type { NextPage } from 'next';
import Head from 'next/head';
import UserLoginContainer from '../features/auth/components/user/user-login.component';
import NavbarContainer from '../features/navbar';

const UserPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="logina to view your trips" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarContainer />
      <UserLoginContainer />
    </div>
  );
};

export default UserPage;
