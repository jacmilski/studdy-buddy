import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/Atoms/DeleteButton/DeleteButton';
import AverageBadge from 'components/Atoms/AverageBadge/AverageBadge';
import TextBox from 'components/Atoms/TextBox/TextBox';
import { UserShape } from 'types';
import { UsersContext } from 'Providers/UsersProvider';
import { Wrapper } from './UsersListItem.styles';

function UsersListItem({ userData: { name, attendance, average } }) {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper>
      <AverageBadge average={average} />
      <TextBox name={name} attendance={attendance} />
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
}

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

UsersListItem.defaultProps = {
  userData: PropTypes.shape({
    name: '',
    attendance: '0%',
    average: '0',
  }),
};

export default UsersListItem;
