import { Button } from '@mui/material';
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import EditForms from 'views/components/forms/EditForms';
import SidebarLayoutContent from 'views/layout/sidebarLayout/SidebarLayoutContent';
import AppointmentCheckDataForm from 'views/pages/appointment/components/AppointmentCheckDataForm';
import Error404 from 'views/pages/errors/Error404';
import { DATING_HISTORY_DATA } from '../DatingHistoryComponent';

export default function DatingHistoryDetail() {
  const id = useParams()?.id;
  const data = useMemo(
    () => DATING_HISTORY_DATA.find((item) => item?.id === id),
    [id]
  );

  return (
    <SidebarLayoutContent label='Historial citas'>
      {data ? (
        <div>
          <AppointmentCheckDataForm data={data} />
          <br />
          <EditForms
            data={data}
            labelColor='inherit'
            layout={[
              {
                label: 'Observaciones',
                name: 'observation',
                placeholder: 'El paciente presenta un alto nivel de azúcar.',
                size: 12,
                type: 'text',
                multiline: true,
                rows: 4,
                readOnly: true,
              },
              {
                label: 'Receta médica',
                name: 'prescription',
                placeholder: 'No aplica',
                size: 12,
                type: 'text',
                multiline: true,
                rows: 4,
                readOnly: true,
              },
            ]}
          />

          <br />

          <div className='flex justify-end'>
            <Button variant='contained' color='info'>
              Regresar
            </Button>
          </div>
        </div>
      ) : (
        <Error404 />
      )}
    </SidebarLayoutContent>
  );
}
