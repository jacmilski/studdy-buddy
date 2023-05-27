/* eslint-disable react/prop-types */
import React from 'react';
import { Wrapper, Label, Course } from './StudentDetails.styles';
import DetailsInfo from '../DetailsInfo/DetailsInfo';
import Heading from '../Heading/Heading';

const StudentDetails = ({ student }) => {
  return (
    <Wrapper>
      <Heading student={student} />
      <Label>Course:</Label>
      <Course>{student?.course}</Course>
      <DetailsInfo student={student} />
    </Wrapper>
  );
};

export default StudentDetails;
