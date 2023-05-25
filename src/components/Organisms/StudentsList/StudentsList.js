import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StudentsListItem from 'components/Molecules/StudentsListItem/StudentsListItem';
import { Title } from 'components/Atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';
import { StyledList } from './StudentsList.styles';

function StudentsList({ handleOpenStudentDetails }) {
  const [studentsList, setStudentsList] = useState([]);

  const { id } = useParams();

  const { getStudentsByGroup } = useStudents();

  useEffect(() => {
    (async () => {
      try {
        const data = await getStudentsByGroup(id);
        setStudentsList(data);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [getStudentsByGroup, id]);

  return (
    <>
      <Title>User's list</Title>
      <StyledList>
        {studentsList &&
          studentsList.map((student) => (
            <StudentsListItem key={student.id} studentsData={student} onClick={() => handleOpenStudentDetails(student.id)} />
          ))}
      </StyledList>
    </>
  );
}

export default StudentsList;
