import React from 'react';
import HomeHeroSection from './HomeHeroSection';
import SectionsList from './HomeInfoPage';

function HomePage() {
  return (
    <div className='container'>
      <HomeHeroSection />
      <SectionsList />
    </div>
  );
}

export default HomePage;
