/* eslint-disable react/require-default-props */
/* eslint-disable prefer-promise-reject-errors */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import usersData from 'data/users';

const initialFormState = [
  {
    name: '',
    attendance: '',
    average: '',
  },
];

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
  isLoading: false,
});

function UsersProvider({ children }) {
  const [users, setUsers] = useState(initialFormState);
  const [, setIsLoading] = useState(false);

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

  const handleAddUser = useCallback(
    (values) => {
      const newUser = {
        name: values.name,
        attendance: values.attendance,
        average: values.average,
      };
      setUsers([newUser, ...users]);
    },
    [users]
  );

  const deleteUser = useCallback(
    (userName) => {
      const filteredUsersList = users.filter((user) => user.name !== userName);

      setUsers(filteredUsersList);
    },
    [users]
  );

  return (
    <UsersContext.Provider
      value={useMemo(
        () => ({
          users,
          handleAddUser,
          deleteUser,
        }),
        [users, deleteUser, handleAddUser]
      )}
    >
      {children}
    </UsersContext.Provider>
  );
}

UsersProvider.propTypes = {
  children: PropTypes.element,
};

export default UsersProvider;
