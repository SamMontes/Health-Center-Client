import { Paper } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { Grid } from 'views/components/Grid';
import Sidebar from './Sidebar';

export default function SidebarLayout() {
  const navigate = useNavigate();

  const isAuth = useSelector((state) => state?.auth?.isAuth);

  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <div className='flex-grow flex flex-col items-stretch py-8 px-10'>
      <Grid container spacing={4} className='flex-grow'>
        <Grid item lg={3} md={3} sm='auto' xs='auto'>
          <Paper className='rounded-4xl min-h-full p-4 sm:px-7 md:px-14 sm:py-10 md:py-20 sticky top-16'>
            <Sidebar />
          </Paper>
        </Grid>
        <Grid item lg={9} md={9} sm='auto' xs='auto'>
          <Paper className='rounded-4xl min-h-full p-4'>
            <Outlet />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
