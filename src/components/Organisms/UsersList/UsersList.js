/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prefer-promise-reject-errors */
import React from 'react';
import UsersListItem from 'components/Molecules/UsersListItem/UsersListItem';
import { Title } from 'components/Atoms/Title/Title';
import { StyledList } from './UsersList.styles';

function UsersList({ students = [] }) {
  return (
    <>
      <Title>User's list</Title>
      <StyledList>
        {students.map((student) => (
          <UsersListItem key={student.id} userData={student} />
        ))}
      </StyledList>
    </>
  );
}

export default UsersList;
