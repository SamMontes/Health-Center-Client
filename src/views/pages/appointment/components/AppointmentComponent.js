import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import CollapseSwitchContainer from 'views/components/CollapseSwitchContainer';
import { Grid } from 'views/components/Grid';
import LabeledProgress from 'views/components/LabeledProgress';
import SelectDays from '../../../components/SelectDays';
import AppointmentCheckDataForm from './AppointmentCheckDataForm';
import AppointmentDateTime from './AppointmentDateTime';
import AppointmentSelectService from './AppointmentSelectService';
import PatientDataForm from './PatientDataForm';

export default function AppointmentComponent() {
  const { enqueueSnackbar } = useSnackbar();

  const [progress, setProgress] = useState(0);
  const [data, setData] = useState({});

  const handleChangeProgress = (value, valueIndex) => {
    setProgress(valueIndex);
  };

  const handleNext = () => setProgress((s = 0) => Math.min(3, s + 1));
  const handleBefore = () => setProgress((s = 0) => Math.max(0, s - 1));

  const handleFinish = () => {
    enqueueSnackbar('Successfully registered', { variant: 'success' });
  };

  return (
    <div>
      <LabeledProgress
        index={progress}
        onChange={handleChangeProgress}
        data={[
          { label: '1. Tipo de servicio' },
          { label: '2. Agendar' },
          { label: '3. Información personal' },
          { label: '4. Finalizar' },
        ]}
      />

      {/* main form */}
      <div className='my-8'>
        <CollapseSwitchContainer index={progress}>
          <div>
            <AppointmentSelectService data={data} onChange={setData} />
            <SelectDays
              data={data}
              onChange={setData}
              name='availableDays'
              label='Días disponibles'
            />
          </div>
          <AppointmentDateTime data={data} onChange={setData} />
          <PatientDataForm data={data} onChange={setData} />
          <AppointmentCheckDataForm data={data} onChange={setData} />
        </CollapseSwitchContainer>
      </div>

      {/* buttons */}
      <Grid container justifyContent='space-between'>
        <Grid item>
          {progress > 0 ? (
            <Button onClick={handleBefore} variant='contained' color='primary'>
              Regresar
            </Button>
          ) : null}
        </Grid>
        <Grid item>
          {progress < 3 ? (
            <Button onClick={handleNext} variant='contained' color='primary'>
              Siguiente
            </Button>
          ) : progress === 3 ? (
            <Button onClick={handleFinish} variant='contained' color='primary'>
              Enviar
            </Button>
          ) : null}
        </Grid>
      </Grid>
    </div>
  );
}
