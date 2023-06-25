import styled from 'styled-components';

export const Input = styled.input`
  padding: 8px 10px;
  font-size: ${({ theme }) => theme.fontSize.m} !important;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: ${({ isTextArea }) => (isTextArea ? '15px' : '25px')};
  resize: none;

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.03);
  }
`;
