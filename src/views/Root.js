/* eslint-disable no-constant-condition */
/* eslint-disable react/button-has-type */
/* eslint-disable prefer-promise-reject-errors */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/Templates/MainTemplate/MainTemplate';
// import SearchProvider from 'Providers/SearchProvider';
// import StudentsProvider from 'Providers/StudentsProvider';
import FormField from 'components/Molecules/FormField/FormField';
import { Button } from 'components/Atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import ErrorMessage from 'components/Molecules/ErrorMessage/ErrorMessage';
import { useError } from 'hooks/useError';
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

const UnauthenticatedApp = () => {
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(auth.signIn)}
      style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
    >
      {/* {error && <span style={{ color: 'red' }}>{error}</span>} */}
      <FormField label="login" id="login" {...register('login', { required: true })} />
      {errors.login && <span style={{ color: 'red' }}>Login is required</span>}
      <FormField label="password" id="password" type="password" {...register('password', { required: true })} />
      {errors.password && <span style={{ color: 'red' }}>Password is required</span>}
      <Button type="submit">Sign in</Button>
    </form>
  );
};

function Root() {
  const auth = useAuth();
  const { _currentValue } = useError();

  return (
    <>
      {_currentValue?.error ? <ErrorMessage /> : null}
      {auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
}

export default Root;
