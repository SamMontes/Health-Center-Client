import { MenuItem, Select, Typography } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Grid } from './Grid';

export default function SelectTimeRange({
  label = '',
  name = '',
  data = {},
  onChange = () => {},
}) {
  const locale = 'en'; // or whatever you want...
  const [hours, setHours] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e?.target ?? {};
    onChange({ ...(data ?? {}), [name]: value });
  };

  useEffect(() => {
    moment.locale(locale); // optional - can remove if you are only dealing with one locale

    const t = [];
    for (let hour = 0; hour < 24; hour++) {
      t.push(moment({ hour }).format('H:mm'));
      t.push(
        moment({
          hour,
          minute: 30,
        }).format('H:mm')
      );
    }

    setHours(t);
  }, []);
  return (
    <div className='w-full'>
      {label ? (
        <Typography
          className='mb-2'
          variant='body2'
          fontWeight={700}
          color='primary'
        >
          {label}
        </Typography>
      ) : null}
      <Grid container spacing={2} wrap='nowrap' alignItems='center'>
        <Grid item flexGrow={1}>
          <Select
            name={`from_${name}`}
            value={data?.[`from_${name}`] ?? ''}
            onChange={handleChange}
            fullWidth
            size='small'
          >
            {hours.map((option, optionIndex) => (
              <MenuItem key={optionIndex} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item>
          <Typography variant='body2' fontWeight={700} color='inherit'>
            a
          </Typography>
        </Grid>
        <Grid item flexGrow={1}>
          <Select
            name={`to_${name}`}
            value={data?.[`to_${name}`] ?? ''}
            onChange={handleChange}
            fullWidth
            size='small'
          >
            {hours.map((option, optionIndex) => (
              <MenuItem key={optionIndex} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
    </div>
  );
}
