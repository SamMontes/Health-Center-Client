import { Stack, Typography } from '@mui/material';
import notFound from 'assets/images/notFound.png';
import React from 'react';
import Img from 'views/components/Img';

export default function Error404() {
  return (
    <Stack alignItems='center' spacing={4}>
      <Typography variant='h2' fontWeight={800} color='primary'>
        ERROR 404
      </Typography>
      <Typography variant='h6' fontWeight={300}>
        Página no encontrada
      </Typography>
      <Img src={notFound} alt='Not Found' />
    </Stack>
  );
}
