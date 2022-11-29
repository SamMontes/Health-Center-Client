import { Container, Grid } from '@mui/material';
import React from 'react';
import Logo from 'views/components/Logo';

export default function Footer() {
  return (
    <div className='bg-black-blue'>
      <Container>
        <Grid
          container
          justifyContent='space-between'
          alignItems='center'
          className='h-64'
        >
          <Grid item>
            <Logo variant='white' />
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </div>
  );
}
