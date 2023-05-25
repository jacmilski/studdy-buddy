import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { Title } from 'components/Atoms/Title/Title';
import AverageBadge from 'components/Atoms/AverageBadge/AverageBadge';
import { Wrapper } from './StudentDetails.styles';

const StudentDetails = ({ student }) => (
    <Wrapper>
      <AverageBadge isBig>{student.average}</AverageBadge>
      <Title>
        {student.name} (group {student.group})
      </Title>
    </Wrapper>
  );

StudentDetails.propTypes = {
  student: PropTypes.objectOf(
    shape({
      id: '',
      name: '',
      attendance: '',
      average: '',
      group: '',
    })
  ).isRequired,
};

export default StudentDetails;
