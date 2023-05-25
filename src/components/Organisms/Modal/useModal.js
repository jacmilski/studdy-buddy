import { useState } from 'react';
import Modal from './Modal';

const useModal = (initialState = false) => {
  const [isOpen, setModalState] = useState(initialState);

  const handleOpenModal = () => {
    setModalState(true);
  };

  const handleCloseModal = () => {
    setModalState(false);
  };

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
    Modal,
  };
};

export default useModal;
