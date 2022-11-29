import React from 'react';
import SidebarLayoutContent from 'views/layout/sidebarLayout/SidebarLayoutContent';
import DoctorProfileComponent from './DoctorProfileComponent';

export default function DoctorProfile() {
  return (
    <SidebarLayoutContent label='Médicos'>
      <DoctorProfileComponent />
    </SidebarLayoutContent>
  );
}
