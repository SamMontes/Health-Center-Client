import React from 'react';
import SidebarLayoutContent from 'views/layout/sidebarLayout/SidebarLayoutContent';
import ContactUsForm from '../home/contents/ContactUsForm';
import AppointmentComponent from './components/AppointmentComponent';

export default function Appointment() {
  return (
    <SidebarLayoutContent label={['Agendar cita', 'Enviar mensaje']}>
      <AppointmentComponent />
      <ContactUsForm />
    </SidebarLayoutContent>
  );
}
