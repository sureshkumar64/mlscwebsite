import React from 'react';
import HeroSection from '../components/HeroSection';
import UpcomingEvent from '../components/UpcomingEvent';
import AboutUs from '../components/AboutUs';
import MeetTeam from '../components/MeetTeam';

const Home = () => {
  return (
    <>
      <HeroSection />
      <UpcomingEvent />
      <AboutUs />
      <MeetTeam />
    </>
  );
};

export default Home;