import React from 'react';
import { useSelector } from 'react-redux';
import SidebarLayoutContent from 'views/layout/sidebarLayout/SidebarLayoutContent';
import UserProfileComponent from './UserProfileComponent';

export default function UserProfile() {
  const user = useSelector((state) => state?.auth?.user ?? {});

  return (
    <SidebarLayoutContent label='Mis datos'>
      <UserProfileComponent data={user} />
    </SidebarLayoutContent>
  );
}
