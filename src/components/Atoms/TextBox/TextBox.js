import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './TextBox.styles';

function TextBox({ name, attendance }) {
  return (
    <Wrapper>
      <p>{name}</p>
      <p>Attendance: {attendance}</p>
    </Wrapper>
  );
}

TextBox.propTypes = {
  name: PropTypes.string.isRequired,
  attendance: PropTypes.string.isRequired,
};

export default TextBox;
