/* eslint-disable react/require-default-props */
/* eslint-disable prefer-promise-reject-errors */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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
  const [users, setUsers] = useState([]);
  // const [, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get('/students')
      .then(({ data: { students } }) => setUsers(students))
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
