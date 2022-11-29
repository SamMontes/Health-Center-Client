import { Container, Paper } from '@mui/material';
import imgG10 from 'assets/images/g10.png';
import React from 'react';
import { Grid } from 'views/components/Grid';
import Img from 'views/components/Img';
import ContactUsForm from './ContactUsForm';

export default function ContactUsSection() {
  return (
    <div className='bg-discussing-doctors bg-cover bg-center py-16'>
      <Container>
        <Paper elevation={0} className='rounded-4xl p-6 pb-14'>
          <Grid container alignItems='center' spacing={4}>
            <Grid
              item
              lg={6}
              md={6}
              sm={6}
              xs={12}
              className='flex justify-end'
            >
              <Img src={imgG10} alt='contact us' />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <ContactUsForm />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
