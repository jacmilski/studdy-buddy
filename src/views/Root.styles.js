import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  height: 100vh;

  nav {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }
`;
