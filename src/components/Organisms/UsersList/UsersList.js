import React from 'react';
import users from 'data/users';
import UsersListItem from 'components/Molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

function UsersList() {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem key={userData.name} userData={userData} index={i} />
        ))}
      </StyledList>
    </Wrapper>
  );
}

export default UsersList;
