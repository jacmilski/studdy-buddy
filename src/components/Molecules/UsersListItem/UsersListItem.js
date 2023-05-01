import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Atoms/Button/Button';
import AverageBadge from 'components/Atoms/AverageBadge/AverageBadge';
import TextBox from 'components/Atoms/TextBox/TextBox';
import { Wrapper } from './UsersListItem.styles';

const showIndexOfStudent = (index) => {
  alert(`This is student with index ${index + 1}`);
};

function UsersListItem({ index, userData: { name, attendance = '0%', average } }) {
  return (
    <Wrapper>
      <AverageBadge score={average} />
      <TextBox name={name} attendance={attendance} />
      <Button onClick={() => showIndexOfStudent(index)} />
    </Wrapper>
  );
}

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
    average: PropTypes.number.isRequired,
  }).isRequired,
};

export default UsersListItem;
