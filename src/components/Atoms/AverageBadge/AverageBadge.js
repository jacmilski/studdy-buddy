import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 34px;
  height: 34px;
  background-color: ${({ score }) => (score <= 1.5 ? '#CB8581' : score <= 3.5 ? '#E1D888' : '#8FCB81')};
  border-radius: 50px;
  text-align: center;
  line-height: 2.7;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
`;

function AverageBadge({ score = 2.3 }) {
  return <Wrapper score={score}>{score}</Wrapper>;
}

export default AverageBadge;
