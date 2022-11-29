import React, { useState } from 'react';
import './index.css';

export default function PageLabelTabs({ tabs = [], onChange = () => {} }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('left');

  const handleSwitch = (value, valueIndex) => {
    if (activeIndex === valueIndex) {
      return;
    }

    setActiveIndex(valueIndex);
    setDirection(valueIndex > activeIndex ? 'right' : 'left');
    onChange(valueIndex);
  };

  return (
    <div className={`taeb-switch ${direction} text-center`}>
      {tabs.map((item, itemIndex) => {
        const isActive = itemIndex === activeIndex;
        return (
          <div
            key={itemIndex}
            onClick={() => handleSwitch(item, itemIndex)}
            className={`taeb ${isActive ? 'active' : ''}`}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
