import { Typography } from '@mui/material';
import React from 'react';
import EditForms from 'views/components/forms/EditForms';

export default function AppointmentCheckDataForm({
  data = {},
  onChange = () => {},
}) {
  return (
    <div>
      <Typography variant='body2' fontWeight={700}>
        Verifique los datos
      </Typography>

      <EditForms
        data={data}
        onChange={onChange}
        noLabel={true}
        layout={[
          {
            label: 'Dra. Carranza',
            name: 'service',
            placeholder: 'Dra. Carranza',
            size: 4,
            readOnly: true,
          },
          {
            label: 'Dra. Carranza',
            name: 'fullName',
            placeholder: 'Dra. Carranza',
            size: 2,
            readOnly: true,
          },
          {
            label: 'Mayo 2, 2022',
            name: 'date',
            placeholder: 'Mayo 2, 2022',
            size: 4,
            readOnly: true,
          },
          {
            label: '08:00 AM',
            name: 'time',
            placeholder: '08:00 AM',
            size: 2,
            readOnly: true,
          },
          {
            label: 'Rosa Mercedes Hernandez Campos',
            name: 'address',
            placeholder: 'Rosa Mercedes Hernandez Campos',
            size: 6,
            readOnly: true,
          },
          {
            label: '65 años',
            name: 'weight',
            placeholder: '65 años',
            size: 6,
            readOnly: true,
          },
          {
            label: '8765-2143',
            name: 'phone',
            placeholder: '8765-2143',
            size: 6,
            readOnly: true,
          },
          {
            label: '98765432-1',
            name: 'dui',
            placeholder: '98765432-1',
            size: 6,
            readOnly: true,
          },
          {
            label: 'mercedes@gmail.com',
            name: 'email',
            placeholder: 'mercedes@gmail.com',
            size: 6,
            readOnly: true,
          },
        ]}
      />

      <br />
      <EditForms
        data={data}
        onChange={onChange}
        noLabel={true}
        layout={[
          {
            label: 'Exámen de sangre',
            name: 'exam',
            placeholder: 'Exámen de sangre',
            type: 'text-with-color',
            size: 6,
            readOnly: true,
          },
        ]}
      />
    </div>
  );
}
