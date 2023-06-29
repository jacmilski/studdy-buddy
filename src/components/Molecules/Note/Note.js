import React from 'react';
import propTypes from 'prop-types';
import { Title } from 'components/Atoms/Title/Title';
import { useRemoveNoteMutation } from 'store';
import { NoteWrapper, StyledDeleteButton } from './Note.styles';

const Note = ({ id, title = 'Untitled', content = 'No content' }) => {
  const [removeNote] = useRemoveNoteMutation();

  const handleRemoveNote = () => {
    removeNote({ id });
  };

  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton removeNote={handleRemoveNote} />
    </NoteWrapper>
  );
};

Note.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
};

export default Note;
