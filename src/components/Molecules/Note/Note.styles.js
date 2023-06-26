import styled from 'styled-components';
import DeleteButton from 'components/Atoms/DeleteButton/DeleteButton';

export const NoteWrapper = styled.div`
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

export const StyledDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 0;
  left: -40px;
`;
