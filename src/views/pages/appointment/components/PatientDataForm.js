import { Typography } from '@mui/material';
import React from 'react';
import EditForms from 'views/components/forms/EditForms';

export default function PatientDataForm({ data = {}, onChange = () => {} }) {
  return (
    <div>
      <Typography variant='body2' fontWeight={700}>
        Rellene con los datos del paciente:
      </Typography>

      <EditForms
        data={data}
        onChange={onChange}
        layout={[
          {
            label: 'Nombre completo',
            name: 'fullName',
            placeholder: 'Nombre completo',
            type: 'text',
          },
          {
            label: 'Edad',
            name: 'age',
            placeholder: 'Edad',
            type: 'number',
          },
          {
            label: 'Número telefónico',
            name: 'phone',
            placeholder: 'Número telefónico',
            type: 'text',
          },
          {
            label: 'Número de DUI',
            name: 'duiNumber',
            placeholder: 'Número de DUI',
            type: 'text',
          },
          {
            label: 'Correo electrónico',
            name: 'email',
            placeholder: 'Correo electrónico',
            type: 'email',
          },
        ]}
      />

      <EditForms
        data={data}
        onChange={onChange}
        layout={[
          {
            label: 'Exámenes',
            name: 'exam',
            placeholder: 'Exámenes',
            type: 'text-with-color',
          },
          {
            label: 'Alergias',
            name: 'allergy',
            placeholder: 'Alergias',
            type: 'text-with-color',
          },
          {
            label: 'Patologías',
            name: 'pathology',
            placeholder: 'Patologías',
            type: 'text-with-color',
          },
          {
            label: 'Cirugías',
            name: 'surgery',
            placeholder: 'Cirugías',
            type: 'text-with-color',
          },
        ]}
      />
    </div>
  );
}
