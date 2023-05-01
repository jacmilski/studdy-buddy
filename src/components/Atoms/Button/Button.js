/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as DeleteIcon } from 'assets/icons/deleteIcon.svg';
import { StyledButton } from './Button.styles';

function Button(props) {
  return (
    <StyledButton {...props}>
      <DeleteIcon />
    </StyledButton>
  );
}

Button.propTypes = {
  indexHandler: PropTypes.func.isRequired,
};

export default Button;
