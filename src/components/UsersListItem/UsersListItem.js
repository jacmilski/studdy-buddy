/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function UsersListItem({ userData: { name, attendance = '0%', average } }) {
  return (
    <li>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>Attendance: {attendance}</p>
      </div>
      <button type="button">X</button>
    </li>
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
