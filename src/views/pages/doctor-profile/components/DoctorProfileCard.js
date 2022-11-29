import { Close, Person } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import React from 'react';
import { Grid } from 'views/components/Grid';
import Img from 'views/components/Img';

export default function DoctorProfileCard({ data = {} }) {
  return (
    <div className='relative p-20'>
      <div className='absolute bg-white-light p-4 rounded-full right-2 top-2 cursor-pointer'>
        <Close fontSize='large' />
      </div>
      <div className='absolute bottom-28 right-28'>
        <Button variant='contained'>Agendar cita</Button>
      </div>
      <div className='bg-white-light rounded-3xl p-4'>
        <Grid container>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Img
              src={data?.img}
              alt={data?.name}
              className='rounded-l-3xl object-cover'
              width='100%'
              height='100%'
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography className='text-xl'>
              <b>Name: </b>
              <span>{data?.name ?? ''}</span>
            </Typography>
            <br />
            <Typography className='text-xl'>
              <b>Speciality: </b>
              <span>{data?.title ?? ''}</span>
            </Typography>
            <br />
            <Typography className='text-xl'>
              <b>About me: </b>
              <span>{data?.description ?? ''}</span>
            </Typography>
            <br />
            <Typography className='text-xl'>
              <b>Assistant: </b>
            </Typography>
            <div className='flex items-center p-2 rounded-3xl shadow-card'>
              <div className='bg-primary text-white-light rounded-3xl p-1 mr-4'>
                <Person fontSize='large' />
              </div>
              <Typography color='primary' className='text-xl'>
                {data?.assistant ?? ''}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
