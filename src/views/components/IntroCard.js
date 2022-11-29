import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import Img from './Img';

const IntroCard = ({
  variant = 'default',
  label = '',
  caption = '',
  icon = null,
}) => {
  return (
    <Paper
      className={`intro-card intro-card-${variant} items-center p-5`}
      elevation={0}
    >
      <Stack alignItems='center' spacing={2}>
        {typeof icon === 'string' ? <Img src={icon} /> : icon}
        <Typography variant='h5'>{label}</Typography>
        <Typography>{caption}</Typography>
      </Stack>
    </Paper>
  );
};

export default IntroCard;
