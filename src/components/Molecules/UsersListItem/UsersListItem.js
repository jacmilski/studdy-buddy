import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Atoms/Button/Button';
import AverageBadge from 'components/Atoms/AverageBadge/AverageBadge';
import TextBox from 'components/Atoms/TextBox/TextBox';
import { Wrapper } from './UsersListItem.styles';

function UsersListItem({ deleteUser, userData: { name, attendance = '0%', average } }) {
  return (
    <Wrapper>
      <AverageBadge score={average} />
      <TextBox name={name} attendance={attendance} />
      <Button onClick={() => deleteUser(name)} />
    </Wrapper>
  );
}

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
    average: PropTypes.number.isRequired,
  }).isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default UsersListItem;
