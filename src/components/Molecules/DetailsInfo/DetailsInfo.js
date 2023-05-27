/* eslint-disable react/prop-types */
import React from 'react';
import AverageBadge from 'components/Atoms/AverageBadge/AverageBadge';
import { Wrapper, Label, SubjectInfo, Subject } from './DetailsInfo.styles';

const DetailsInfo = ({ student }) => {
  const { grades } = student;
  return (
    <Wrapper>
      <Label>Average grades:</Label>
      {grades.map((item) => {
        return (
          <SubjectInfo key={item.subject}>
            <Subject>{item.subject}</Subject>
            <AverageBadge average={item.average} />
          </SubjectInfo>
        );
      })}
    </Wrapper>
  );
};

export default DetailsInfo;
