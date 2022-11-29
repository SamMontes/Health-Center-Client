import { Typography } from '@mui/material';
import { formatArray } from 'lib/arrayObject';
import React from 'react';
import CheckboxIcon from 'views/components/CheckboxIcon';
import { Grid } from 'views/components/Grid';

export const WEEK_WORK_DAYS = ['lun', 'mar', 'mier', 'jue', 'vier'];

export default function SelectDays({
  name = '',
  label = '',
  data = {},
  onChange = () => {},

  readOnly = false,
  labelPosition = 'bottom',
}) {
  const formattedValue = formatArray(data?.[name]);

  const handleChange = (value = '', checked = false) => {
    const filtered = formattedValue.filter((a) => !(a === value));

    onChange({
      ...(data ?? {}),
      [name]: checked ? [...filtered, value] : filtered,
    });
  };

  return (
    <Grid container spacing={2} alignItems='center' wrap='nowrap'>
      {label ? (
        <Grid item>
          <Typography variant='body2' fontWeight={700}>
            {label}
          </Typography>
        </Grid>
      ) : null}
      {WEEK_WORK_DAYS.map((item, itemIndex) => {
        return (
          <Grid item key={itemIndex}>
            <CheckboxIcon
              label={item}
              checked={formattedValue.some((a) => a === item)}
              onChange={(v) => handleChange(item, v)}
              readOnly={readOnly}
              labelPosition={labelPosition}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
