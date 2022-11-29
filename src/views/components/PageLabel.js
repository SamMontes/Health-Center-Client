import React from 'react';

export default function PageLabel({ children = null }) {
  return (
    <div className='rounded-2xl bg-primary text-white-light text-lg w-96 h-14 flex justify-center items-center'>
      {children}
    </div>
  );
}
