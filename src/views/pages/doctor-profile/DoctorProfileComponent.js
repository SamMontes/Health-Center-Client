import React from 'react';
import DoctorProfileCard from './components/DoctorProfileCard';
import defaultProfile from 'assets/images/profile/defaultProfile.png';

export default function DoctorProfileComponent() {
  const data = {
    name: 'Savannah Nguyen',
    title: 'Pediatric dentistry',
    description:
      'We are not satisfied with the average. Our goal is to serve you and treat you with judicious methods.',
    assistant: 'Jenny Wilson',
    img: defaultProfile,
  };

  return (
    <div>
      <DoctorProfileCard data={data} />
    </div>
  );
}
