// @ts-nocheck
/* eslint-disable react/require-default-props */
/* eslint-disable prefer-promise-reject-errors */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const StudentsContext = React.createContext({
  students: [],
  handleAddStudent: () => {},
  deleteStudent: () => {},
  isLoading: false,
});

function StudentsProvider({ children }) {
  const [studentsList, setStudentsList] = useState([]);
  // const [, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get('/students')
      .then(({ data: { students } }) => setStudentsList(students))
      .catch((err) => console.log(err.message));
  }, []);

  const handleAddStudent = useCallback(
    (values) => {
      const newStudents = {
        name: values.name,
        attendance: values.attendance,
        average: values.average,
      };
      setStudentsList([newStudents, ...studentsList]);
    },
    [studentsList]
  );

  const deleteStudent = useCallback(
    (userName) => {
      console.log('kliknięto');
      const filteredUsersList = studentsList.filter((user) => user.name !== userName);

      setStudentsList(filteredUsersList);
    },
    [studentsList]
  );

  return (
    <StudentsContext.Provider
      value={useMemo(
        () => ({
          studentsList,
          handleAddStudent,
          deleteStudent,
        }),
        [studentsList, deleteStudent, handleAddStudent]
      )}
    >
      {children}
    </StudentsContext.Provider>
  );
}

StudentsProvider.propTypes = {
  children: PropTypes.element,
};

export default StudentsProvider;
