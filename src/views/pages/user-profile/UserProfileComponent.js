import { Button } from '@mui/material';
import React, { useState } from 'react';
import UserProfileForm from './components/UserProfileForm';

export default function UserProfileComponent({ data: propsData = {} }) {
  const [data, setData] = useState(propsData ?? {});

  return (
    <div>
      <UserProfileForm data={data} onChange={setData} noLabel={true} />
      <div className='flex justify-end'>
        <Button variant='contained' color='info'>
          Regresar
        </Button>
      </div>
    </div>
  );
}
