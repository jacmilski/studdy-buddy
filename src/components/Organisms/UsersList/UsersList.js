/* eslint-disable prefer-promise-reject-errors */
import React, { useContext } from 'react';
import UsersListItem from 'components/Molecules/UsersListItem/UsersListItem';
import { Title } from 'components/Atoms/Title/Title';
import { UsersContext } from 'Providers/UsersProvider';
import { Wrapper, StyledList } from './UsersList.styles';

function UsersList() {
  const { users, isLoading } = useContext(UsersContext);

  return (
    <>
      <Wrapper>
        <Title>{isLoading ? '...is loading' : "User's list"}</Title>
        <StyledList>
          {users.map((user) => (
            <UsersListItem key={user.name} userData={user} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
}

export default UsersList;
