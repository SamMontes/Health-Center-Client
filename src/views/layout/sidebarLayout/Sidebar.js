import { Menu } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MENU_DATA } from './menuData';

export const SidebarMenuButton = ({
  icon: Icon = Menu,
  label = '',
  children = null,
  path = '/',
  color = 'default',
}) => {
  const navigate = useNavigate();

  const isCurrent = useMemo(
    () => window.location.pathname.search(path) === 0,
    [path]
  );

  const handleClick = () => {
    navigate(path);
  };

  return (
    <Button
      startIcon={<Icon className='mr-10' />}
      color={isCurrent ? 'primary' : color}
      className='justify-start items-center'
      onClick={handleClick}
    >
      <Typography variant='h6'>{label || children}</Typography>
    </Button>
  );
};

export default function Sidebar() {
  return (
    <Stack spacing={2}>
      {[
        MENU_DATA.map((item, itemIndex) => {
          return (
            <SidebarMenuButton
              key={itemIndex}
              icon={item.icon}
              label={item.label}
              path={item.path}
              color='inherit'
            />
          );
        }),
      ]}
    </Stack>
  );
}
