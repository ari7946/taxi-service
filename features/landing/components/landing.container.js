import React from 'react';

import { LandingPageContainer } from './landing.styles';
import { Button } from '../../_global/components';
import Link from 'next/link';

const LandingContainer = () => {
  return (
    <LandingPageContainer>
      <header className="landing-header">
        <h1 className="landing-title">
          Coastal <span>Yellow</span> Cabs
        </h1>
        <h2 className="landing-subtitle">
          Our professionally trained drivers will meet your needs.
        </h2>
        <p className="landing-message">
          Use our online system to book a taxi and get rate right away.
        </p>

        <div className="landing-buttons">
          <Link href="/book" passHref>
            <Button as="a" primary width="10rem" padding="1rem">
              BOOK TAXI
            </Button>
          </Link>

          <Link href="/book" passHref>
            <Button as="a" primary width="10rem" padding="1rem">
              GET ESTIMATE
            </Button>
          </Link>
        </div>
        <div className="bottom-filler" />
      </header>
    </LandingPageContainer>
  );
};

export default LandingContainer;
