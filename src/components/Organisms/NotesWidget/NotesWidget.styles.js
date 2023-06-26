import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  height: auto;
  max-height: 700px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(400px)')};
  transition: transform 0.6s ease-in-out;
  position: absolute;
  right: 0;
  top: 40px;
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
`;

export const WidgetHandler = styled.button`
  width: 80px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  transform: rotate(-90deg);
  position: absolute;
  left: -55px;
  top: 40px;
  border-radius: 8px 8px 0 0;
  color: white;
  border: none;
  cursor: pointer;
`;

export const NotesWrapper = styled.div`
  padding: 20px 60px;
  max-height: 698px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
