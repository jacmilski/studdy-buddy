/* eslint-disable import/no-cycle */
import React from 'react';
import UsersList from 'components/Organisms/UsersList/UsersList';

function Dashboard() {
  return (
    <>
      <UsersList />
    </>
  );
}

export default Dashboard;
