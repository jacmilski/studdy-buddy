import styled from 'styled-components';

export const Wrapper = styled.li`
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    position: absolute;
    content: '';
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
