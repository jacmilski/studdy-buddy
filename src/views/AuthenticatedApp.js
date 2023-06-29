import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/Templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import Notes from './Notes';
import { Wrapper } from './Root.styles';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Routes>
          {/* <Route path="/group" element={<Dashboard />} /> */}
          <Route path="/group/:id?" element={<Dashboard />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/" element={<Navigate replace to="/group" />} />
        </Routes>
      </Wrapper>
    </MainTemplate>
  );
};

export default AuthenticatedApp;
