import React from 'react';
import EditForms from 'views/components/forms/EditForms';

export default function UserProfileForm({
  data = {},
  onChange = () => {},
  readOnly = false,
  noLabel = false,
}) {
  return (
    <div>
      <EditForms
        data={data}
        onChange={onChange}
        readOnly={readOnly}
        noLabel={noLabel}
        layout={[
          { label: 'Full Name', placeholder: 'Full Name', name: 'name' },
          { label: 'Age', placeholder: 'Age', name: 'age' },
          { label: 'Phone', placeholder: 'Phone', name: 'phone' },
          { label: 'DUI Number', placeholder: 'DUI Number', name: 'duiNumber' },
          { label: 'Email', placeholder: 'Email', name: 'email' },
        ]}
      />
    </div>
  );
}
