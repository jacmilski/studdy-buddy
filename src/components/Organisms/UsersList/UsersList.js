/* eslint-disable prefer-promise-reject-errors */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import usersData from 'data/users';
import UsersListItem from 'components/Molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

function UsersList({ title }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const mockAPI = () =>
    new Promise((resolve, reject) => {
      setIsLoading(true);
      setTimeout(() => {
        if (usersData) {
          resolve([...usersData]);
        } else reject({ message: 'error' });
      }, 2000);
    });

  useEffect(() => {
    mockAPI()
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const deleteUser = (name) => {
    const filteredUsersList = users.filter((user) => user.name !== name);

    setUsers(filteredUsersList);
  };

  return (
    <Wrapper>
      <h1>{isLoading ? '...is loading' : title}</h1>
      <StyledList>
        {users.map((user) => (
          <UsersListItem key={user.name} userData={user} deleteUser={(name) => deleteUser(name)} />
        ))}
      </StyledList>
    </Wrapper>
  );
}

UsersList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default UsersList;
