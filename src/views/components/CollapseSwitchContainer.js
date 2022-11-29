import { Collapse } from '@mui/material';
import React from 'react';

export default function CollapseSwitchContainer({
  index = 0,
  children = null,
}) {
  const formatChildren = Array.isArray(children) ? children : [children];

  return (
    <div className='w-full'>
      {formatChildren.map((item, itemIndex) => (
        <Collapse key={itemIndex} in={itemIndex === index} mountOnEnter>
          <div className='w-full'>{item}</div>
        </Collapse>
      ))}
    </div>
  );
}
