import React from 'react';
import { Title } from 'components/Atoms/Title/Title';
import DeleteButton from 'components/Atoms/DeleteButton/DeleteButton';
import styled from 'styled-components';
import { removeNote } from 'store';
import { useDispatch } from 'react-redux';

const NoteWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  h3,
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const StyledDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 0;
  left: -40px;
`;

const Note = ({ id, title = 'Untitled', content = 'No content' }) => {
  const dispatch = useDispatch();

  const handleRemoveNote = () => {
    dispatch(removeNote(id));
  };

  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton removeNote={handleRemoveNote} />
    </NoteWrapper>
  );
};

export default Note;
