import React, { useState } from 'react';
import Note from 'components/Molecules/Note/Note';
import { useGetNotesQuery } from 'store';
import { Wrapper, WidgetHandler, NotesWrapper } from './NotesWidget.styles';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data, isLoading } = useGetNotesQuery();

  const handleToggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>Notes</WidgetHandler>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <NotesWrapper>
          {data.notes.map(({ id, title, content }) => (
            <Note key={id} title={title} content={content} id={id} />
          ))}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};

export default NotesWidget;
