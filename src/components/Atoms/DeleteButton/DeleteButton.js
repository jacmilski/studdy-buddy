/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/deleteIcon.svg';
import { StyledDeleteButton } from './DeleteButton.styles';

function Button(props) {
  const { removeNote } = props;
  return (
    <StyledDeleteButton {...props}>
      <DeleteIcon onClick={removeNote} />
    </StyledDeleteButton>
  );
}

export default Button;
