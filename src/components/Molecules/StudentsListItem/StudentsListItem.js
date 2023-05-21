import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/Atoms/DeleteButton/DeleteButton';
import AverageBadge from 'components/Atoms/AverageBadge/AverageBadge';
import TextBox from 'components/Atoms/TextBox/TextBox';
import { UserShape } from 'types';
import { useStudents } from 'hooks/useStudents';
import { Wrapper } from './StudentsListItem.styles';

function StudentsListItem({ studentsData: { name, attendance, average } }) {
  const { deleteStudent } = useStudents();

  return (
    <Wrapper>
      <AverageBadge average={average} />
      <TextBox name={name} attendance={attendance} />
      <DeleteButton onClick={() => deleteStudent(name)} />
    </Wrapper>
  );
}

StudentsListItem.propTypes = {
  studentsData: PropTypes.shape(UserShape),
};

StudentsListItem.defaultProps = {
  studentsData: PropTypes.shape({
    name: '',
    attendance: '0%',
    average: '0',
  }),
};

export default StudentsListItem;
