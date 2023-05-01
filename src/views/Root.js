import React from 'react';
import UsersList from 'components/Organisms/UsersList/UsersList';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/globalStyle';
import styledTheme from 'assets/styles/theme';
import 'views/App.css';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  height: 100vh;
`;

function Root() {
  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyle />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  );
}

export default Root;
