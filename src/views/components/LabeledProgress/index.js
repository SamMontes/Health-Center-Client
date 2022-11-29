import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './index.css';

export default function LabeledProgress({
  index: propsIndex = 0,
  data = [],
  onChange = (value, valueIndex) => {},
}) {
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    if (propsIndex === index) {
    } else {
      setTimeout(() => {
        setIndex(index > propsIndex ? index - 1 : index + 1);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    setIndex(index > propsIndex ? index - 1 : index + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propsIndex]);

  return (
    <div className='w-full'>
      <table className='w-full' border={4}>
        <thead>
          <tr>
            {data.map((item, itemIndex) => (
              <th key={itemIndex} align='left' className='py-2'>
                <Typography variant='body2' fontWeight={700}>
                  {item.label ?? ''}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {data.map((item, itemIndex) => {
              const isFirst = !itemIndex;
              const isLast = itemIndex === data.length - 1;
              const isActive = itemIndex <= index;
              return (
                <td key={itemIndex} align='left'>
                  <div
                    className={`h-4 w-full ${isFirst ? 'rounded-l-xl' : ''} ${
                      isLast ? 'rounded-r-xl' : ''
                    } bg-gray-200 ${isActive ? 'fill-bg-left-right' : ''}`}
                  ></div>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
