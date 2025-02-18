import React from 'react';
import AboutHeroSection from './AboutHeroSection';
import StickyMenu from '../../components/StickyMenu';
import AboutSection from './AboutSection';
import UsingSection from './UsingSection';
import MaterialsSection from './MaterialsSection';
import SurfacesSection from './SurfacesSection';
import DyesSection from './DyesSection';
import BubblesSection from './BubblesSection';
import SafetySection from './SafetySection';
import MistakesSection from './MistakesSection';
import CareSection from './CareSection';

function AboutPage() {
  return (
    <div>
      <AboutHeroSection />
      <StickyMenu />
      <AboutSection />
      <UsingSection />
      <MaterialsSection />
      <SurfacesSection />
      <DyesSection />
      <BubblesSection />
      <SafetySection />
      <MistakesSection />
      <CareSection />
    </div>
  );
}

export default AboutPage;
