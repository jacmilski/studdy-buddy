/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/deleteIcon.svg';
import { StyledDeleteButton } from './DeleteButton.styles';

function Button(props) {
  return (
    <StyledDeleteButton {...props}>
      <DeleteIcon />
    </StyledDeleteButton>
  );
}

export default Button;
