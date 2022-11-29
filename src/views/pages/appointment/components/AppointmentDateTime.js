import { TextField, Typography } from '@mui/material';
import React from 'react';
import { Grid } from 'views/components/Grid';
import SelectDays from 'views/components/SelectDays';
import SelectTimeRange from 'views/components/SelectTimeRange';

export default function AppointmentDateTime({
  data = {},
  onChange = () => {},
}) {
  const handleChange = (e) => {
    const { name, value } = e?.target ?? {};
    onChange({ ...(data ?? {}), [name]: value });
  };

  return (
    <div>
      <Typography variant='body2' fontWeight={700}>
        Por favor seleccione un día y hora:
      </Typography>

      <Grid container spacing={2}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Typography
            className='mb-2'
            variant='body2'
            fontWeight={700}
            color='primary'
          >
            Días disponibles
          </Typography>
          <TextField
            name='date'
            type='date'
            value={data?.date ?? ''}
            onChange={handleChange}
            variant='outlined'
            size='small'
            fullWidth
          />
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <SelectDays
            data={data}
            onChange={onChange}
            name='day'
            // label='Días disponibles'
            readOnly={true}
            labelPosition='top'
          />
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <SelectTimeRange
            data={data}
            onChange={onChange}
            name='time'
            label='Horas disponibles'
          />
        </Grid>
      </Grid>
    </div>
  );
}
