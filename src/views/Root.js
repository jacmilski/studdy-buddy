/* eslint-disable react/button-has-type */
/* eslint-disable prefer-promise-reject-errors */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/globalStyle';
import styledTheme from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/Templates/MainTemplate/MainTemplate';
// import SearchProvider from 'Providers/SearchProvider';
// import StudentsProvider from 'Providers/StudentsProvider';
import Dashboard from './Dashboard';
import { Wrapper } from './Root.styles';

function Root() {
  return (
    <Router>
      <ThemeProvider theme={styledTheme}>
        <GlobalStyle />
        {/* <SearchProvider> */}
        {/* <StudentsProvider> */}
        <MainTemplate>
          <Wrapper>
            <Routes>
              {/* <Route path="/group" element={<Dashboard />} /> */}
              <Route path="/group/:id?" element={<Dashboard />} />
              <Route path="/" element={<Navigate replace to="/group" />} />
            </Routes>
          </Wrapper>
        </MainTemplate>
        {/* </StudentsProvider> */}
        {/* </SearchProvider> */}
      </ThemeProvider>
    </Router>
  );
}

export default Root;
