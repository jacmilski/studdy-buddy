/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/deleteIcon.svg';
import { StyledButton } from './Button.styles';

function Button(props) {
  return (
    <StyledButton {...props}>
      <DeleteIcon />
    </StyledButton>
  );
}

export default Button;
