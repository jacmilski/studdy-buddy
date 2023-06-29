import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'components/Atoms/Button/Button';
import Note from 'components/Molecules/Note/Note';
import { useGetNotesQuery, useAddNoteMutation } from 'store';
import { Wrapper, FormWrapper, StyledFormField, NotesWrapper } from './Notes.styles';

const Notes = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data, isLoading } = useGetNotesQuery();
  const [addNote] = useAddNoteMutation();

  const handleAddNote = ({ title, content }) => addNote({ title, content });

  return (
    <Wrapper>
      <FormWrapper>
        <form onSubmit={handleSubmit(handleAddNote)}>
          <StyledFormField label="Title" name="title" id="title" {...register('title', { required: true })} />
          {errors.title && <span>Title is required</span>}
          <StyledFormField isTextArea label="Content" name="content" id="content" {...register('content', { required: true })} />
          {errors.content && <span>Content is required</span>}
          <Button type="submit">Add</Button>
        </form>
      </FormWrapper>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <NotesWrapper>
          {data.notes.length ? (
            data.notes.map(({ title, content, id }) => <Note key={id} id={id} title={title} content={content} />)
          ) : (
            <p>No notes so far</p>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};

export default Notes;
