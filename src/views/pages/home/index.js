import React from 'react';
import ContactUsSection from './contents/ContactUsSection';
import DoctorsIntroSection from './contents/DoctorsIntroSection';
import HomeHeroBanner from './contents/HomeHeroBanner';
import TestimonialsSection from './contents/TestimonialsSection';

export default function Home() {
  return (
    <div className='bg-white-light'>
      <HomeHeroBanner />
      <div className='h-48'></div>
      <DoctorsIntroSection />
      <TestimonialsSection />
      <ContactUsSection />
    </div>
  );
}
