import React from 'react';
import { useForm } from 'react-hook-form';
import FormField from 'components/Molecules/FormField/FormField';
import { Button } from 'components/Atoms/Button/Button';
import styled from 'styled-components';
import Note from 'components/Molecules/Note/Note';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addNote } from 'store';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  grid-gap: 30px;
  padding: 30px;
  overflow-y: scroll;
`;

const FormWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 80%;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
`;

const StyledFormField = styled(FormField)`
  height: ${({ isTextArea }) => (isTextArea ? '300px' : 'unset')};
  width: ${({ isTextArea }) => (isTextArea ? '227px' : 'unset')};
`;

const NotesWrapper = styled.div`
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
`;

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
          {errors.title && <span>This field is required</span>}
          <StyledFormField isTextArea label="Content" name="content" id="content" {...register('content')} />
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
