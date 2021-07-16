import React from 'react';
// import './about.styles.css';
import city from '../../assets/phone-hand.png';
import license from '../../assets/license-driver.png';
import cabFile from '../../assets/cab-file2.png';

import {
  AboutPageContainer,
  AboutSectionContainer,
  AboutSectionMiddle,
  AboutHeading,
  AboutDescription,
  AboutImgContainerTop,
  AboutImgContainerMiddle,
  AboutImgContainerBottom,
} from './about.styles'

const About = () => {
  return (
    <AboutPageContainer fluid className="about">
      <AboutSectionContainer className="about-section about-section-top">
        <div className="left">
          <AboutImgContainerTop className="about-img-container-top">
            <img className="about-img rounded mx-auto d-block" src={city} alt="city" width="150" height="150" />
          </AboutImgContainerTop>
        </div>

        <div className="right">
          <AboutHeading className="about-heading">Coastal yellow Cab</AboutHeading>
          <AboutDescription className="about-description text-justify">Coastal Yellow Cab offers efficient, reliable LA taxi service to meet the transportation needs of residents, visitors and our corporate clients. Our extensive service area includes Coastal, Artesia, Norwalk, Santa Fe Springs, La Mirada, La Palma, Downey, Pico Rivera, Bellflower, Whittier, Hawaiian Gardens, Etc.</AboutDescription>
        </div>
      </AboutSectionContainer>

      <AboutSectionMiddle className="about-section about-section-middle">
        <div className="left">
          <AboutHeading className="about-heading">Our Taxi Cabs Are Licensed</AboutHeading>
          <AboutDescription className="about-description">At Coastal Yellow Cab, we employ only professional trained drivers. Our drivers are licensed and required to successfully complete a formal training program, which includes training in defensive driving and safety. In addition, we perform background checks and random drug testing to ensure your safety and give our customers the highest level of confidence in our reliable taxi service.</AboutDescription>
        </div>

        <div className="right">
          <AboutImgContainerMiddle className="about-img-container-middle">
            <img className="about-img rounded mx-auto d-block" src={license} alt="city" width="150" height="150" />
          </AboutImgContainerMiddle>
        </div>
      </AboutSectionMiddle>

      <AboutSectionContainer className="about-section about-section-bottom">
        <div className="left">
          <AboutImgContainerBottom className="about-img-container-bottom">
            <img className="about-img rounded mx-auto d-block" src={cabFile} alt="city" width="150" height="150" />
          </AboutImgContainerBottom>
        </div>

        <div className="right">
          <AboutHeading className="about-heading">Services</AboutHeading>
          <AboutDescription className="about-description text-justify">We offer a full range of taxi services. Call us for dependable service for airport shuttle, sightseeing tours, or for transportation to medical visits, social visits or shopping. We offer corporate accounts, which provide businesses with a convenient method for managing their corporate transportation needs. Please contact us to learn more about starting a corporate account for airport shuttle service, driving your clients or other taxi services.</AboutDescription>
        </div>
      </AboutSectionContainer>
    </AboutPageContainer>
  )
}

export default About;