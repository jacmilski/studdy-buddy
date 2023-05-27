/* eslint-disable react/prop-types */
import React from 'react';
import AverageBadge from 'components/Atoms/AverageBadge/AverageBadge';
import { Title } from 'components/Atoms/Title/Title';
import { HeadingWrapper } from './Heading.styles';

const Heading = ({ student }) => {
  return (
    <HeadingWrapper>
      <AverageBadge isBig>{student?.average}</AverageBadge>
      <Title>{student?.name}</Title>
    </HeadingWrapper>
  );
};

export default Heading;
