import styled from 'styled-components';

export const Button = styled.button`
  padding: 7px 20px;
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.darkPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
