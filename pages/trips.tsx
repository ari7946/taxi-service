import type { NextPage } from 'next';
import Head from 'next/head';
import TripsContainer from '../features/trips/container/trips.container';
import NavbarContainer from '../features/navbar';

const UserPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Trips</title>
        <meta name="description" content="Trips" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarContainer />
      <TripsContainer />
    </div>
  );
};

export default UserPage;
