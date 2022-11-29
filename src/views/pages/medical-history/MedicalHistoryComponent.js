import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardTable from 'views/components/CardTable';

export const MEDICAL_HISTORY_DATA = [
  { label: 'Exámen de sangre', id: 'blood-test' },
  { label: 'Operación de cornea', id: 'corneal-operation' },
];

export default function MedicalHistoryComponent() {
  const navigate = useNavigate();

  const handleView = (value, valueIndex, self) => {
    navigate(`./${value?.id}`);
  };

  return (
    <div>
      <CardTable data={MEDICAL_HISTORY_DATA} onView={handleView} />
    </div>
  );
}
