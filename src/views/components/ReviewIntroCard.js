import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { Grid } from './Grid';
import Img from './Img';

export default function ReviewIntroCard({
  description = '',
  avatar = null,
  userName = '',
  userTitle = '',
}) {
  return (
    <Paper
      elevation={0}
      className='rounded-4xl px-4 pt-20 pb-4 border-4 border-primary'
    >
      <Stack spacing={2}>
        <Typography variant='h6'>{description}</Typography>
        <Grid container spacing={1} className='p-0'>
          <Grid item>
            <Img src={avatar} alt={userName}></Img>
          </Grid>
          <Grid item>
            <Typography variant='h5' color='primary'>
              {userName}
            </Typography>
            <Typography variant='caption'>{userTitle}</Typography>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
}
