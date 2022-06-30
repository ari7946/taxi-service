import type { NextPage } from 'next';
import Head from 'next/head';
import LandingContainer from '../features/landing/components/landing.container';
import NavbarContainer from '../features/navbar';

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Coastal Yellow Cabs</title>
        <meta
          name="description"
          content="Get an instant estimate and book a taxi. Our professional drivers will meet your needs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarContainer />
      <LandingContainer />
    </div>
  );
};

export default HomePage;
