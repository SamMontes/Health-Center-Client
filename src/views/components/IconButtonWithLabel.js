import { IconButton, Typography } from '@mui/material';
import React from 'react';

export default function IconButtonWithLabel({
  icon = null,
  label = '',
  children = null,
  onClick = () => {},
}) {
  return (
    <div onClick={onClick} className='flex items-center cursor-pointer'>
      <IconButton color='info' className='bg-white-light text-info'>
        {icon || children}
      </IconButton>
      <Typography variant='h6' className='ml-4'>
        {label}
      </Typography>
    </div>
  );
}
