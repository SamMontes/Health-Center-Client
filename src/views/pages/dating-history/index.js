import React from 'react';
import SidebarLayoutContent from 'views/layout/sidebarLayout/SidebarLayoutContent';
import DatingHistoryComponent from './DatingHistoryComponent';

export default function DatingHistory() {
  return (
    <SidebarLayoutContent label='Historial citas'>
      <DatingHistoryComponent />
    </SidebarLayoutContent>
  );
}
