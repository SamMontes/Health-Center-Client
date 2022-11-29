import React, { useState } from 'react';
import { Grid } from 'views/components/Grid';
import PageLabel from 'views/components/PageLabel';
import PageLabelTabs from 'views/components/PageLabelTabs';

export default function SidebarLayoutContent({ label = '', children = null }) {
  const isTab = Array.isArray(label);

  const formattedChildren = Array.isArray(children) ? children : [children];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleChangeActiveIndex = (valueIndex) => {
    setActiveIndex(valueIndex);
  };

  return (
    <div>
      <Grid container justifyContent='center' className='my-10'>
        <Grid item>
          {isTab ? (
            <PageLabelTabs tabs={label} onChange={handleChangeActiveIndex} />
          ) : (
            <PageLabel>{label}</PageLabel>
          )}
        </Grid>
      </Grid>
      <div className='px-16 pb-8'>{formattedChildren[activeIndex]}</div>
    </div>
  );
}
