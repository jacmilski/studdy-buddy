/* eslint-disable prefer-promise-reject-errors */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/globalStyle';
import styledTheme from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/Templates/MainTemplate/MainTemplate';
import AddUser from 'views/AddUser';
import Dashboard from './Dashboard';
import { Wrapper } from './Root.styles';

function Root() {
  return (
    <Router>
      <ThemeProvider theme={styledTheme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/group/:id?" element={<Dashboard />} />
              <Route path="/" element={<Navigate replace to="/group" />} />
              <Route path="/group" element={<Dashboard />} />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
