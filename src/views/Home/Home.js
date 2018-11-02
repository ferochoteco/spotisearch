import React from 'react';

const ScreensUserForm = ({ match: { params } }) => (
  <div>
    <h1>
      {`${!params.id ? 'Create' : 'Update'}`} User
    </h1>
    <UserForm id={params.id} />
  </div>
);

export default ScreensUserForm;