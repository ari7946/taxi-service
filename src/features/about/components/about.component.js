import React from 'react';

import phone from '../assets/phone-hand.png';
import license from '../assets/license-driver.png';
import cabFile from '../assets/cab-file2.png';

import {
  AboutPageContainer,
  AboutSectionContainer,
  AboutSectionMiddle,
  AboutHeading,
  AboutDescription,
  AboutImgContainer,
} from './about.styles'

const About = () => {
  return (
    <AboutPageContainer>
      <AboutSectionContainer>
        <div className="left">
          <AboutImgContainer top>
            <img src={phone} alt="phone" width="150" height="150" />
          </AboutImgContainer>
        </div>

        <div className="right">
          <AboutHeading>Coastal yellow Cab</AboutHeading>
          <AboutDescription className="about-description text-justify">Coastal Yellow Cab offers efficient, reliable LA taxi service to meet the transportation needs of residents, visitors and our corporate clients. Our extensive service area includes Coastal, Artesia, Norwalk, Santa Fe Springs, La Mirada, La Palma, Downey, Pico Rivera, Bellflower, Whittier, Hawaiian Gardens, Etc.</AboutDescription>
        </div>
      </AboutSectionContainer>

      <AboutSectionMiddle>
        <div className="left">
          <AboutHeading>Our Taxi Cabs Are Licensed</AboutHeading>
          <AboutDescription>At Coastal Yellow Cab, we employ only professional trained drivers. Our drivers are licensed and required to successfully complete a formal training program, which includes training in defensive driving and safety. In addition, we perform background checks and random drug testing to ensure your safety and give our customers the highest level of confidence in our reliable taxi service.</AboutDescription>
        </div>

        <div className="right">
          <AboutImgContainer middle>
            <img src={license} alt="phone" width="150" height="150" />
          </AboutImgContainer>
        </div>
      </AboutSectionMiddle>

      <AboutSectionContainer>
        <div className="left">
          <AboutImgContainer bottom>
            <img src={cabFile} alt="phone" width="150" height="150" />
          </AboutImgContainer>
        </div>

        <div className="right">
          <AboutHeading >Services</AboutHeading>
          <AboutDescription>We offer a full range of taxi services. Call us for dependable service for airport shuttle, sightseeing tours, or for transportation to medical visits, social visits or shopping. We offer corporate accounts, which provide businesses with a convenient method for managing their corporate transportation needs. Please contact us to learn more about starting a corporate account for airport shuttle service, driving your clients or other taxi services.</AboutDescription>
        </div>
      </AboutSectionContainer>
    </AboutPageContainer>
  )
}

export { About };