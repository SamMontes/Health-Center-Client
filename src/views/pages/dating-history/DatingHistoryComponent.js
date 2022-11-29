import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardTable from 'views/components/CardTable';

export const DATING_HISTORY_DATA = [
  { id: '1', label: 'Cita' },
  { id: '2', label: 'Cita' },
  { id: '3', label: 'Cita' },
  { id: '4', label: 'Cita' },
  { id: '5', label: 'Cita' },
  { id: '6', label: 'Cita' },
  { id: '7', label: 'Cita' },
  { id: '8', label: 'Cita' },
];

export default function DatingHistoryComponent() {
  const navigate = useNavigate();

  const handleView = (value, valueIndex, self) => {
    navigate(`./${value?.id}`);
  };

  return (
    <div>
      <CardTable data={DATING_HISTORY_DATA} onView={handleView} />
    </div>
  );
}
