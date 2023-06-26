import styled from 'styled-components';
import FormField from 'components/Molecules/FormField/FormField';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  grid-gap: 30px;
  padding: 30px;
  overflow-y: scroll;
`;

export const FormWrapper = styled.div`
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

export const StyledFormField = styled(FormField)`
  height: ${({ isTextArea }) => (isTextArea ? '300px' : 'unset')};
  width: ${({ isTextArea }) => (isTextArea ? '227px' : 'unset')};
`;

export const NotesWrapper = styled.div`
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
`;
