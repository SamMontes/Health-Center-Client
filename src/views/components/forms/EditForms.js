import { Grid, TextField, Typography } from '@mui/material';
import { formatArray } from 'lib/arrayObject';
import React from 'react';

export default function EditForms({
  data = {},
  onChange = () => {},
  layout = [],
  noLabel = false,
  labelColor = 'primary',
  spacing = 2,
  readOnly = false,
}) {
  const handleChange = (e) => {
    const { name, value } = e?.target ?? {};
    onChange({ ...(data ?? {}), [name]: value });
  };

  return (
    <Grid container spacing={spacing}>
      {formatArray(layout).map((item, itemIndex) => {
        const label = (
          <Typography
            className='mb-2'
            variant='body2'
            fontWeight={700}
            color={labelColor}
          >
            {item.label}
          </Typography>
        );

        const textField =
          !item.type ||
          item.type === 'text' ||
          item.type === 'text-with-color' ? (
            <TextField
              name={item.name}
              placeholder={item.placeholder}
              value={data?.[item?.name] ?? ''}
              onChange={handleChange}
              fullWidth
              size='small'
              disabled={item?.readOnly || item?.disabled || readOnly}
              multiline={item?.multiline ?? false}
              rows={item?.rows ?? 1}
            />
          ) : null;

        return (
          <Grid
            key={itemIndex}
            item
            lg={item?.size ?? 6}
            md={item?.size ?? 6}
            sm={12}
            xs={12}
          >
            {item.type === 'text-with-color' ? (
              <>
                {noLabel ? null : label}
                <Grid
                  container
                  className='p-0'
                  alignItems='center'
                  spacing={spacing}
                >
                  <Grid item>
                    <div className='bg-green-700 w-9 h-9 rounded cursor-pointer' />
                  </Grid>
                  <Grid item flexGrow={1}>
                    {textField}
                  </Grid>
                </Grid>
              </>
            ) : (
              <>
                {noLabel ? null : label}
                {textField}
              </>
            )}
          </Grid>
        );
      })}
    </Grid>
  );
}
