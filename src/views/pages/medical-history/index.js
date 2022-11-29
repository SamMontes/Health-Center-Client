import React from 'react';
import SidebarLayoutContent from 'views/layout/sidebarLayout/SidebarLayoutContent';
import MedicalHistoryComponent from './MedicalHistoryComponent';

export default function MedicalHistory() {
  return (
    <SidebarLayoutContent label='Historial médico'>
      <MedicalHistoryComponent />
    </SidebarLayoutContent>
  );
}
