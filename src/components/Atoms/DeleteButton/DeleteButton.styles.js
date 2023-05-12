import styled from 'styled-components';

export const StyledDeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.grey};
  border: none;
  color: white;

  svg {
    width: 100%;
    height: 100%;
  }
`;
