import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Grid } from 'views/components/Grid';
import Img from 'views/components/Img';
import img3Doctors from 'assets/images/3doctors.png';

export default function DoctorsIntroSection() {
  return (
    <div className='py-8'>
      <Container>
        <Grid container spacing={2} alignItems='center'>
          <Grid item lg={6} md={6} sm={6} xs={12} className='flex justify-end'>
            <Img src={img3Doctors} alt='3 doctors' />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Stack spacing={2}>
              <Typography variant='h4'>Médicos</Typography>
              <Typography variant='h6'>
                Nuestros valores son los pilares que sustentan nuestra forma de
                actuar, trabajar y hacer las cosas. Dicen cómo somos hoy y cómo
                vamos a ser en el futuro. Hablan sobre nuestra manera de
                entender la salud y nuestra relación con las personas. Nos hacen
                diferentes y únicos. Son nuestra identidad:
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
