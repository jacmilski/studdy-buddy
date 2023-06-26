import React, { useState } from 'react';
import Note from 'components/Molecules/Note/Note';
import { useSelector } from 'react-redux';
import { Wrapper, WidgetHandler, NotesWrapper } from './NotesWidget.styles';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const notes = useSelector((state) => state.notes);

  const handleToggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>Notes</WidgetHandler>
      <NotesWrapper>
        {notes.map(({ id, title, content }) => (
          <Note key={id} title={title} content={content} />
        ))}
      </NotesWrapper>
    </Wrapper>
  );
};

export default NotesWidget;
