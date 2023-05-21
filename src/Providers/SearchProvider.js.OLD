/* eslint-disable react/require-default-props */
/* eslint-disable prefer-promise-reject-errors */
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const SearchContext = React.createContext({
  filteredUsers: [],
  filterUsers: () => {},
});

function SearchProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios
      .get('/students')
      .then(({ data: { students } }) => setUsers(students))
      .catch((err) => console.log(err.message));
  }, []);

  const filterUsers = useCallback(
    (fraze) => {
      const filteredUsersList = users.filter((user) => user.name.toLowerCase().includes(fraze.toLowerCase()));

      setFilteredUsers(filteredUsersList);
    },
    [users]
  );

  return (
    <SearchContext.Provider
      value={useMemo(
        () => ({
          filteredUsers,
          filterUsers,
        }),
        [filteredUsers, filterUsers]
      )}
    >
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.element,
};

export default SearchProvider;
