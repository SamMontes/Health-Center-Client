import { MenuItem, Select, Typography } from '@mui/material';
import React from 'react';
import { Grid } from 'views/components/Grid';

export default function AppointmentSelectService({
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
        Por favor elige el tipo de servicio:
      </Typography>

      <Grid container spacing={2}>
        {[
          {
            label: 'Servicio',
            name: 'service',
            placeholder: 'Seleccione un servicio',
            options: ['1', '2', '3'],
          },
          {
            label: 'Médico',
            name: 'doctor',
            placeholder: 'Cualquier médico',
            options: ['1', '2', '3'],
          },
        ].map((item, itemIndex) => {
          return (
            <Grid key={itemIndex} item lg={6} md={6} sm={12} xs={12}>
              <Typography
                className='mb-2'
                variant='body2'
                fontWeight={700}
                color='primary'
              >
                {item.label}
              </Typography>
              <Select
                name={item.name}
                value={data?.[item?.name] ?? ''}
                onChange={handleChange}
                fullWidth
                size='small'
                displayEmpty
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return item.placeholder ?? '';
                  }

                  return selected;
                }}
              >
                <MenuItem value={''}>None</MenuItem>
                {item.options.map((option, optionIndex) => (
                  <MenuItem key={optionIndex} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
