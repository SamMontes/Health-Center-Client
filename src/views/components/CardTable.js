import { Visibility } from '@mui/icons-material';
import { Button, Paper, Stack, Typography } from '@mui/material';
import { formatArray } from 'lib/arrayObject';
import React from 'react';

export default function CardTable({ spacing = 2, data = [], onView = null }) {
  return (
    <div>
      <Stack spacing={spacing}>
        {formatArray(data).map((item, itemIndex, self) => (
          <Paper
            key={itemIndex}
            className='flex items-center justify-between py-3 px-8 rounded-3xl shadow-card'
          >
            <Typography variant='body2'>{item.label ?? ''}</Typography>
            {typeof onView === 'function' ? (
              <Button
                variant='contained'
                color='info'
                startIcon={<Visibility />}
                onClick={() => onView(item, itemIndex, self)}
              >
                Ver
              </Button>
            ) : null}
          </Paper>
        ))}
      </Stack>
    </div>
  );
}
