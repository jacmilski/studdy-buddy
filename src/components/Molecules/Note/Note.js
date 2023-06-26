import React from 'react';
import { Title } from 'components/Atoms/Title/Title';
import { removeNote } from 'store';
import { useDispatch } from 'react-redux';
import { NoteWrapper, StyledDeleteButton } from './Note.styles';

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
