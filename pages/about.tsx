import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../features/about';
import NavbarContainer from '../features/navbar';

const AboutPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Top notch taxi services in La country" />
      </Head>
      <NavbarContainer />
      <About />
    </div>
  );
};

export default AboutPage;
