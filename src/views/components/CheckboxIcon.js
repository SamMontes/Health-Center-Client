import { Done } from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react';

export default function CheckboxIcon({
  label = '',
  checked = false,
  onChange = () => {},

  readOnly = false,
  labelPosition = 'bottom',
}) {
  return (
    <div
      className={`cursor-pointer flex  ${
        labelPosition === 'bottom' ? 'flex-col' : 'flex-col-reverse'
      }`}
      onClick={() => {
        if (!readOnly) {
          onChange(!checked);
        }
      }}
    >
      <div
        className={`rounded-full ${
          checked
            ? 'bg-primary text-white-light'
            : 'bg-transparent text-primary'
        } w-6 h-6 flex justify-center items-center my-1 hover:bg-primary hover:bg-opacity-20 hover:text-primary`}
      >
        <Done />
      </div>
      <Typography variant='body2' fontWeight={700} color='inherit'>
        {label}
      </Typography>
    </div>
  );
}
