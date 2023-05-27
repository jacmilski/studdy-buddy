/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Button } from 'components/Atoms/Button/Button';
import { ModalWrapper } from './Modal.styles';

const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      {children}
      <Button onClick={handleClose}>Close modal</Button>
    </ModalWrapper>
  );
};

export default Modal;
