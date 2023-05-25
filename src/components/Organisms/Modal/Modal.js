/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'components/Atoms/Button/Button';
import { ModalWrapper, BackgroundWrapper } from './Modal.styles';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose, children }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <BackgroundWrapper>
      <ModalWrapper>
        {children}
        <Button onClick={handleClose}>Close modal</Button>
      </ModalWrapper>
    </BackgroundWrapper>,
    modalNode
  );
};

export default Modal;
