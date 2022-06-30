import type { NextPage } from 'next';
import Head from 'next/head';
import UserContainer from '../features/auth/components/user/user.container';
import NavbarContainer from '../features/navbar';

const UserPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>User</title>
        <meta name="description" content="Login or register to view your trips" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarContainer />
      <UserContainer />
    </div>
  );
};

export default UserPage;
