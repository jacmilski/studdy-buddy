import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'components/Atoms/Button/Button';
import Note from 'components/Molecules/Note/Note';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addNote } from 'store';
import { Wrapper, FormWrapper, StyledFormField, NotesWrapper } from './Notes.styles';

const Notes = () => {
  const notes = useSelector((state) => state.notes);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddNote = ({ title, content }) => {
    dispatch(
      addNote({
        id: uuid(),
        title,
        content,
      })
    );
  };

  return (
    <Wrapper>
      <FormWrapper>
        <form onSubmit={handleSubmit(handleAddNote)}>
          <StyledFormField label="Title" name="title" id="title" {...register('title', { required: true })} />
          {errors.title && <span>Title is required</span>}
          <StyledFormField isTextArea label="Content" name="content" id="content" {...register('content', { required: true })} />
          {errors.title && <span>Content is required</span>}
          <Button type="submit">Add</Button>
        </form>
      </FormWrapper>
      <NotesWrapper>
        {notes.length ? notes.map(({ title, content, id }) => <Note key={id} id={id} title={title} content={content} />) : <p>No notes so far</p>}
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;
